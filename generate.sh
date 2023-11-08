#!/bin/sh
openapi-generator-cli generate -i  https://api.flyo.cloud/nitro/v1/openapi \
    -g typescript-fetch \
    -o . \
    -c config.json