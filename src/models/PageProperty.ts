/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.204
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PageProperty
 */
export interface PageProperty {
    /**
     * 
     * @type {any}
     * @memberof PageProperty
     */
    value?: any;
    /**
     * Whether or not this item is visible in the navigation.
     * @type {boolean}
     * @memberof PageProperty
     */
    navigation?: boolean;
    /**
     * Determining whether the value is carried over from the parent page or not.
     * @type {boolean}
     * @memberof PageProperty
     */
    propagate?: boolean;
}

/**
 * Check if a given object implements the PageProperty interface.
 */
export function instanceOfPageProperty(value: object): boolean {
    return true;
}

export function PagePropertyFromJSON(json: any): PageProperty {
    return PagePropertyFromJSONTyped(json, false);
}

export function PagePropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageProperty {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'navigation': json['navigation'] == null ? undefined : json['navigation'],
        'propagate': json['propagate'] == null ? undefined : json['propagate'],
    };
}

export function PagePropertyToJSON(value?: PageProperty | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
        'navigation': value['navigation'],
        'propagate': value['propagate'],
    };
}

