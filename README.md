## @flyo/nitro-typescript@1.0.0

```bash
npm install @flyo/nitro-typescript
```

## Usage

```typescript
const config = new Configuration({
    apiKey: '_ADD_YOUR_TOKEN_HERE_'
})

const configApi = new ConfigApi(config)
const response = await configApi.config();

console.log(Response)
```