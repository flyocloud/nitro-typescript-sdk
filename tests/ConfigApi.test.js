import { ConfigApi, Configuration } from './../dist/index.mjs';
import { expect, test } from 'vitest'

test('ConfigApi', async () => {
 
    const cfg = new Configuration({
        apiKey: '__ADD_TEST_TOKEN_HERE__'
    })

    const rqst = new ConfigApi(cfg)
    const response = await rqst.configRaw();

    expect(response.raw.status).toBe(200);
});