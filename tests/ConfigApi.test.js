import { ConfigApi, Configuration } from './../dist/index.mjs';
import { expect, test } from 'vitest'

test.skipIf(!process.env.FLYO_API_TOKEN)('ConfigApi', async () => {
 
    const cfg = new Configuration({
        apiKey: process.env.FLYO_API_TOKEN || '__ADD_TEST_TOKEN_HERE__'
    })

    const rqst = new ConfigApi(cfg)
    const response = await rqst.configRaw({});

    expect(response.raw.status).toBe(200);
});