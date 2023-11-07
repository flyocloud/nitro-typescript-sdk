/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.160
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VersionResponse
 */
export interface VersionResponse {
    /**
     * Whenever Flyo generates new data, the version number will be appropriately incremented. If this value is employed for caching, it will undergo less frequent purging in comparison to the `updated_at` value, thus extending its longevity. (last longer)
     * @type {number}
     * @memberof VersionResponse
     */
    version?: number;
    /**
     * A Unix timestamp indicating when the Nitro was last updated. This timestamp does not correlate with the version number. If this value is utilized for caching purposes, it will experience more frequent purges compared to the version number, leading to shorter caching intervals. (last shorter)
     * @type {number}
     * @memberof VersionResponse
     */
    updatedAt?: number;
}

/**
 * Check if a given object implements the VersionResponse interface.
 */
export function instanceOfVersionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VersionResponseFromJSON(json: any): VersionResponse {
    return VersionResponseFromJSONTyped(json, false);
}

export function VersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function VersionResponseToJSON(value?: VersionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'updated_at': value.updatedAt,
    };
}

