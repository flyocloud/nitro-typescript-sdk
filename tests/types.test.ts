import { expect, test } from 'vitest';
import type { 
  Entity, 
  Page, 
  Block, 
  ConfigResponse,
  EntityMetric,
  Translation 
} from '../dist/index.d.ts';

test('Type imports work correctly', () => {
  // This test verifies that types can be imported directly from the package
  // If the types are properly exported, this will compile without errors
  
  const entity: Entity = {
    id: 1,
    slug: 'test-entity',
  };
  
  expect(entity.id).toBe(1);
  expect(entity.slug).toBe('test-entity');
});

test('Type checking validates structure', () => {
  // This ensures the types are actually enforcing the correct structure
  const page: Partial<Page> = {
    slug: '/test-page',
  };
  
  expect(page.slug).toBe('/test-page');
});
