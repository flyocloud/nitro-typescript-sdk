#!/bin/sh
openapi-generator-cli generate -i  https://api.flyo.cloud/nitro/v1/openapi \
    -g typescript-fetch \
    -o . \
    --additional-properties=npmName=@flyo/nitro-typescript,npmVersion=1.0.0