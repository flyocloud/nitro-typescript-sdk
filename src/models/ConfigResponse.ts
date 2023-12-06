/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.164
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConfigResponseContainersValue } from './ConfigResponseContainersValue';
import {
    ConfigResponseContainersValueFromJSON,
    ConfigResponseContainersValueFromJSONTyped,
    ConfigResponseContainersValueToJSON,
} from './ConfigResponseContainersValue';
import type { ConfigResponseNitro } from './ConfigResponseNitro';
import {
    ConfigResponseNitroFromJSON,
    ConfigResponseNitroFromJSONTyped,
    ConfigResponseNitroToJSON,
} from './ConfigResponseNitro';

/**
 * 
 * @export
 * @interface ConfigResponse
 */
export interface ConfigResponse {
    /**
     * 
     * @type {ConfigResponseNitro}
     * @memberof ConfigResponse
     */
    nitro?: ConfigResponseNitro;
    /**
     * A unique array of slugs is available for the entire site configuration, providing you with the flexibility to register specific routes for your application or compare a slug against this array. This comparison enables you to determine whether to return a "404 Not Found" exception or handle the request differently. By utilizing this array, you can easily manage and control the slugs used in your application, ensuring that only valid and registered routes are accessible. This approach helps maintain the integrity and security of your site's navigation, preventing users from accessing undefined or unauthorized pages.
     * @type {Array<string>}
     * @memberof ConfigResponse
     */
    pages?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: ConfigResponseContainersValue; }}
     * @memberof ConfigResponse
     */
    containers?: { [key: string]: ConfigResponseContainersValue; };
    /**
     * The globals section serves as a crucial component in the overall structure of the code. It consists of an associative array that allows users to define their own unique keys, each of which contains an array of items representing data sourced from a Content Pool. This data is essential as it needs to be accessible throughout the entire scope of the website, ensuring its availability whenever required. By leveraging this globals section, developers can efficiently manage and access these globally significant data sets.
     * @type {object}
     * @memberof ConfigResponse
     */
    globals?: object;
}

/**
 * Check if a given object implements the ConfigResponse interface.
 */
export function instanceOfConfigResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigResponseFromJSON(json: any): ConfigResponse {
    return ConfigResponseFromJSONTyped(json, false);
}

export function ConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nitro': !exists(json, 'nitro') ? undefined : ConfigResponseNitroFromJSON(json['nitro']),
        'pages': !exists(json, 'pages') ? undefined : json['pages'],
        'containers': !exists(json, 'containers') ? undefined : (mapValues(json['containers'], ConfigResponseContainersValueFromJSON)),
        'globals': !exists(json, 'globals') ? undefined : json['globals'],
    };
}

export function ConfigResponseToJSON(value?: ConfigResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nitro': ConfigResponseNitroToJSON(value.nitro),
        'pages': value.pages,
        'containers': value.containers === undefined ? undefined : (mapValues(value.containers, ConfigResponseContainersValueToJSON)),
        'globals': value.globals,
    };
}

