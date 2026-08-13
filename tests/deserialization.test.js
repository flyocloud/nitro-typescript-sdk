import { expect, test, describe } from 'vitest';
import {
  MetaFromJSON,
  MetaToJSON,
  MetaImageFromJSON,
  MetaImageToJSON,
  PageFromJSON,
  EntityFromJSON,
  PagePropertyValueFromJSON,
} from './../dist/index.mjs';

// A real meta image URL as the API sends it, kept verbatim: the bug these tests
// guard against was invisible with placeholder values, because the deserializer
// discarded *every* input equally.
const META_IMAGE_URL =
  'https://storage.flyo.cloud/74_qqLngDWbpvKrcJ_skb2026baseleditionsmockupseditionenog-image.jpg';

describe('MetaImage (oneOf string | boolean)', () => {
  // `meta_json.image` is declared in the OpenAPI spec as `oneOf: [string, boolean]`
  // — a URL when a meta image is set, `false` when it is not. openapi-generator
  // before 7.15 had no branch for a `oneOf` of *primitives* and fell through to
  // the composed-object fallback, so `MetaImageFromJSON()` returned `{}` for
  // every input and every social-preview image URL was silently destroyed.
  // These tests fail against a client generated with 7.14.0.

  test('keeps a string URL intact', () => {
    expect(MetaImageFromJSON(META_IMAGE_URL)).toBe(META_IMAGE_URL);
  });

  test('keeps `false` (the "no meta image set" signal) as a boolean', () => {
    expect(MetaImageFromJSON(false)).toBe(false);
    expect(MetaImageFromJSON(true)).toBe(true);
  });

  test('never degrades a primitive into an object', () => {
    // The precise failure mode of the 7.14.0 output: `{}` — truthy, so a plain
    // falsy check would wave it through, and `typeof` is 'object', so string
    // operations on it break.
    for (const input of [META_IMAGE_URL, '', false, true]) {
      expect(MetaImageFromJSON(input)).not.toEqual({});
    }
  });

  test('passes null / undefined through untouched', () => {
    expect(MetaImageFromJSON(null)).toBeNull();
    expect(MetaImageFromJSON(undefined)).toBeUndefined();
  });

  test('serializes back to the same primitive', () => {
    expect(MetaImageToJSON(META_IMAGE_URL)).toBe(META_IMAGE_URL);
    expect(MetaImageToJSON(false)).toBe(false);
  });
});

describe('Meta', () => {
  test('deserializes a full meta object without losing the image', () => {
    const meta = MetaFromJSON({
      title: 'Stadtguide, Magazin & Stadtgeschichten',
      description: 'Basel Editions vereint Places, Experiences und Moments.',
      image: META_IMAGE_URL,
    });

    expect(meta.title).toBe('Stadtguide, Magazin & Stadtgeschichten');
    expect(meta.description).toBe('Basel Editions vereint Places, Experiences und Moments.');
    expect(meta.image).toBe(META_IMAGE_URL);
    // Client libraries branch on `typeof image === 'string'` before building an
    // `og:image` URL, so the runtime type is the contract that matters.
    expect(typeof meta.image).toBe('string');
  });

  test('represents "no meta image" as `false`, not as an object', () => {
    const meta = MetaFromJSON({ title: 'T', description: 'D', image: false });

    expect(meta.image).toBe(false);
  });

  test('survives a From → To round trip', () => {
    const input = { title: 'T', description: 'D', image: META_IMAGE_URL };

    expect(MetaToJSON(MetaFromJSON(input))).toEqual(input);
  });

  test('omits an absent image', () => {
    const meta = MetaFromJSON({ title: 'T', description: 'D' });

    expect(meta.image).toBeUndefined();
  });
});

describe('Page.meta_json', () => {
  // The end-to-end path a framework adapter (nitro-next, nitro-nuxt, nitro-astro,
  // nitro-vue3) actually walks to emit `og:image` / `twitter:image`.
  test('exposes the meta image as a usable URL string', () => {
    const page = PageFromJSON({
      title: 'Home',
      slug: '',
      meta_json: {
        title: 'Stadtguide, Magazin & Stadtgeschichten',
        description: 'Basel Editions vereint Places, Experiences und Moments.',
        image: META_IMAGE_URL,
      },
    });

    expect(page.meta_json.image).toBe(META_IMAGE_URL);
    expect(typeof page.meta_json.image).toBe('string');
    // A social-image URL is only buildable if the value is a real string.
    expect(`${page.meta_json.image}?w=1200&h=630&format=jpg`).toContain('og-image.jpg?w=1200');
  });

  test('reports `false` for a page without a meta image', () => {
    const page = PageFromJSON({
      title: 'Home',
      slug: '',
      meta_json: { title: 'T', description: 'D', image: false },
    });

    expect(page.meta_json.image).toBe(false);
  });
});

describe('Entity.entity_image', () => {
  // Declared as a plain `string` in the spec, so it was never affected by the
  // `oneOf` bug — asserted here so the entity metadata path is covered too.
  test('keeps the entity image URL intact', () => {
    const entity = EntityFromJSON({
      id: 1,
      slug: 'a-place',
      entity: {
        entity_title: 'A Place',
        entity_teaser: 'Teaser',
        entity_image: META_IMAGE_URL,
      },
    });

    expect(entity.entity.entity_image).toBe(META_IMAGE_URL);
  });
});

describe('PagePropertyValue.value', () => {
  // Behaviour change in 7.24.0: an explicit JSON `null` used to be coerced to
  // `undefined`, so "set to null" and "not sent at all" were indistinguishable.
  test('preserves an explicit null', () => {
    expect(PagePropertyValueFromJSON({ value: null }).value).toBeNull();
  });

  test('still yields undefined for an absent value', () => {
    expect(PagePropertyValueFromJSON({}).value).toBeUndefined();
  });

  test('passes a real value through', () => {
    expect(PagePropertyValueFromJSON({ value: 'blue' }).value).toBe('blue');
  });
});
