/**
 * Example usage of @flyo/nitro-typescript SDK
 * 
 * This example demonstrates:
 * 1. Importing API clients
 * 2. Importing types for type safety
 * 3. Using the SDK in a type-safe manner
 */

import { 
  ConfigApi, 
  EntitiesApi, 
  PagesApi,
  Configuration 
} from '@flyo/nitro-typescript';

import type { 
  Entity, 
  Page, 
  ConfigResponse,
  EntityMetric 
} from '@flyo/nitro-typescript';

// Initialize configuration
const config = new Configuration({
  apiKey: process.env.FLYO_API_KEY || '_ADD_YOUR_TOKEN_HERE_'
});

// Example 1: Fetch configuration with type safety
async function getConfig(): Promise<ConfigResponse> {
  const configApi = new ConfigApi(config);
  const response = await configApi.config();
  return response;
}

// Example 2: Fetch entity with proper typing
async function getEntity(slug: string): Promise<Entity | null> {
  const entitiesApi = new EntitiesApi(config);
  
  try {
    const entity = await entitiesApi.entityBySlug({
      slug: slug
    });
    return entity;
  } catch (error) {
    console.error('Error fetching entity:', error);
    return null;
  }
}

// Example 3: Fetch page with type safety
async function getPage(slug: string): Promise<Page | null> {
  const pagesApi = new PagesApi(config);
  
  try {
    const page = await pagesApi.page({
      slug: slug
    });
    return page;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// Example 4: Type-safe data manipulation
function processEntity(entity: Entity): void {
  console.log(`Entity ID: ${entity.id}`);
  console.log(`Entity Slug: ${entity.slug}`);
  
  // TypeScript will provide autocomplete and type checking
  if (entity.entity_metric) {
    const metrics: EntityMetric = entity.entity_metric;
    console.log('Entity has metrics:', metrics);
  }
}

// Example usage
async function main() {
  try {
    // Get configuration
    const configData = await getConfig();
    console.log('Config loaded:', configData);
    
    // Get an entity
    const entity = await getEntity('my-entity-slug');
    if (entity) {
      processEntity(entity);
    }
    
    // Get a page
    const page = await getPage('/my-page');
    if (page) {
      console.log('Page loaded:', page.slug);
    }
  } catch (error) {
    console.error('Error in main:', error);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

export { getConfig, getEntity, getPage, processEntity };
