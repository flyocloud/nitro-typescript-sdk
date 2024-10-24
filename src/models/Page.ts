/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.204
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Block } from './Block';
import {
    BlockFromJSON,
    BlockFromJSONTyped,
    BlockToJSON,
} from './Block';
import type { Breadcrumb } from './Breadcrumb';
import {
    BreadcrumbFromJSON,
    BreadcrumbFromJSONTyped,
    BreadcrumbToJSON,
} from './Breadcrumb';
import type { Meta } from './Meta';
import {
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';
import type { PageProperty } from './PageProperty';
import {
    PagePropertyFromJSON,
    PagePropertyFromJSONTyped,
    PagePropertyToJSON,
} from './PageProperty';
import type { Translation } from './Translation';
import {
    TranslationFromJSON,
    TranslationFromJSONTyped,
    TranslationToJSON,
} from './Translation';

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * The ID for the page
     * @type {number}
     * @memberof Page
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    title?: string;
    /**
     * Returns the completed href tag. Internal links are appended with trailing slashes, such as `/about-me`, while email links are formatted with `mailto:hello@flyo.ch`.
     * @type {string}
     * @memberof Page
     */
    href?: string;
    /**
     * The slug, in its current form, contains the full path of nested slugs and serves as the identifier for querying the respective page.
     * @type {string}
     * @memberof Page
     */
    slug?: string;
    /**
     * 
     * @type {Array<Block>}
     * @memberof Page
     */
    json?: Array<Block>;
    /**
     * The depth of the page in the tree structure
     * @type {number}
     * @memberof Page
     */
    depth?: number;
    /**
     * Determining whether the page is the homepage or not.
     * @type {number}
     * @memberof Page
     */
    is_home?: number;
    /**
     * A Unix timestamp indicating when the page was created.
     * @type {number}
     * @memberof Page
     */
    created_at?: number;
    /**
     * A Unix timestamp indicating when the page was last updated.
     * @type {number}
     * @memberof Page
     */
    updated_at?: number;
    /**
     * Determining whether the page is visible or not.
     * @type {number}
     * @memberof Page
     */
    is_visible?: number;
    /**
     * 
     * @type {Meta}
     * @memberof Page
     */
    meta_json?: Meta;
    /**
     * 
     * @type {{ [key: string]: PageProperty; }}
     * @memberof Page
     */
    properties?: { [key: string]: PageProperty; };
    /**
     * A unique identifier for the page
     * @type {string}
     * @memberof Page
     */
    uid?: string;
    /**
     * Can be either a page with content (which is default behavior), email, file, url, tel
     * @type {string}
     * @memberof Page
     */
    type?: string;
    /**
     * can be either _self (which is default) or _blank
     * @type {string}
     * @memberof Page
     */
    target?: string;
    /**
     * The container this page belongs, by default all pages belong to the default container which is the main nav.
     * @type {string}
     * @memberof Page
     */
    container?: string;
    /**
     * The breadcrumb of the current site is represented by an array of pages, forming a navigational path. It provides a hierarchical representation of the user's current location within the website. The array is ordered from the innermost page, closest to the current page, to the outermost page, with the current page itself residing at the last position.
     * @type {Array<Breadcrumb>}
     * @memberof Page
     */
    breadcrumb?: Array<Breadcrumb>;
    /**
     * The translation contains information about further data in different languages. If the integration is not defined as multi lingual, the translations will be empty.
     * @type {Array<Translation>}
     * @memberof Page
     */
    translation?: Array<Translation>;
}

/**
 * Check if a given object implements the Page interface.
 */
export function instanceOfPage(value: object): boolean {
    return true;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'href': json['href'] == null ? undefined : json['href'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'json': json['json'] == null ? undefined : ((json['json'] as Array<any>).map(BlockFromJSON)),
        'depth': json['depth'] == null ? undefined : json['depth'],
        'is_home': json['is_home'] == null ? undefined : json['is_home'],
        'created_at': json['created_at'] == null ? undefined : json['created_at'],
        'updated_at': json['updated_at'] == null ? undefined : json['updated_at'],
        'is_visible': json['is_visible'] == null ? undefined : json['is_visible'],
        'meta_json': json['meta_json'] == null ? undefined : MetaFromJSON(json['meta_json']),
        'properties': json['properties'] == null ? undefined : (mapValues(json['properties'], PagePropertyFromJSON)),
        'uid': json['uid'] == null ? undefined : json['uid'],
        'type': json['type'] == null ? undefined : json['type'],
        'target': json['target'] == null ? undefined : json['target'],
        'container': json['container'] == null ? undefined : json['container'],
        'breadcrumb': json['breadcrumb'] == null ? undefined : ((json['breadcrumb'] as Array<any>).map(BreadcrumbFromJSON)),
        'translation': json['translation'] == null ? undefined : ((json['translation'] as Array<any>).map(TranslationFromJSON)),
    };
}

export function PageToJSON(value?: Page | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'href': value['href'],
        'slug': value['slug'],
        'json': value['json'] == null ? undefined : ((value['json'] as Array<any>).map(BlockToJSON)),
        'depth': value['depth'],
        'is_home': value['is_home'],
        'created_at': value['created_at'],
        'updated_at': value['updated_at'],
        'is_visible': value['is_visible'],
        'meta_json': MetaToJSON(value['meta_json']),
        'properties': value['properties'] == null ? undefined : (mapValues(value['properties'], PagePropertyToJSON)),
        'uid': value['uid'],
        'type': value['type'],
        'target': value['target'],
        'container': value['container'],
        'breadcrumb': value['breadcrumb'] == null ? undefined : ((value['breadcrumb'] as Array<any>).map(BreadcrumbToJSON)),
        'translation': value['translation'] == null ? undefined : ((value['translation'] as Array<any>).map(TranslationToJSON)),
    };
}

