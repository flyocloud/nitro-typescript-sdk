## Flyo Nitro TypeScript SDK

```bash
npm install @flyo/nitro-typescript
```

> **Upgrading from 1.5.0?** See [UPGRADE.md](UPGRADE.md). 1.5.0 discarded
> `meta_json.image` during deserialization, so pages built with it shipped no
> `og:image`. Upgrade to `^1.6.0`.

## Usage

### API Usage

```typescript
import { ConfigApi, Configuration } from '@flyo/nitro-typescript';

const config = new Configuration({
    apiKey: '_ADD_YOUR_TOKEN_HERE_'
})

const configApi = new ConfigApi(config)
const response = await configApi.config();

console.log(response)
```

### Type Imports

All types and models are exported from the main package and can be imported directly:

```typescript
import type { 
  Entity, 
  Page, 
  Block, 
  ConfigResponse,
  EntityMetric,
  Translation,
  Meta,
  Breadcrumb
} from '@flyo/nitro-typescript';

// Use the types in your application
const entity: Entity = {
  id: 1,
  slug: 'my-entity'
};
```

### Available Types

The SDK exports all models including:
- `Entity` - Entity data structure
- `Page` - Page configuration and content
- `Block` - Content blocks
- `ConfigResponse` - Configuration data
- `EntityMetric` - Entity metrics
- `Translation` - Translation objects
- `Meta` - Metadata
- `Breadcrumb` - Breadcrumb navigation
- And many more...

### Available APIs

- `ConfigApi` - Configuration management
- `EntitiesApi` - Entity operations
- `PagesApi` - Page management
- `SearchApi` - Search functionality
- `SitemapApi` - Sitemap generation
- `VersionApi` - Version information

## Examples

Check out the [examples directory](./examples) for more detailed usage examples, including:
- Complete API usage with type safety
- Error handling
- Working with entities, pages, and configuration

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## Package Structure

The package is built with optimal support for both CommonJS and ES modules:

- **ESM**: `dist/index.mjs` with types at `dist/index.d.ts`
- **CommonJS**: `dist/index.js` with types at `dist/index.d.ts`

All types are bundled into a single declaration file for easy consumption.