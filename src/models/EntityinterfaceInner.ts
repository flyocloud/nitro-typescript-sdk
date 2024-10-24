/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.203
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
 * @interface EntityinterfaceInner
 */
export interface EntityinterfaceInner {
    /**
     * Unique ID
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entity_unique_id?: string;
    /**
     * The standard interface title resolved for the current entity
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entity_title?: string;
    /**
     * The standard interface teaser resolved for the current entity
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entity_teaser?: string;
    /**
     * The slug for the given item, this can be either unique or not, depending on the configuration of the entity definition schema.
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entity_slug?: string;
    /**
     * The shared entity interface time start attribute. If not defined, null or 0 is returned
     * @type {number}
     * @memberof EntityinterfaceInner
     */
    entity_time_start?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entity_type?: string;
    /**
     * The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema.
     * @type {number}
     * @memberof EntityinterfaceInner
     */
    entity_type_id?: number;
    /**
     * For image manipulation please see https://dev.flyo.cloud/dev/infos/images.html
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entity_image?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityinterfaceInner
     */
    routes?: { [key: string]: string; };
}

/**
 * Check if a given object implements the EntityinterfaceInner interface.
 */
export function instanceOfEntityinterfaceInner(value: object): boolean {
    return true;
}

export function EntityinterfaceInnerFromJSON(json: any): EntityinterfaceInner {
    return EntityinterfaceInnerFromJSONTyped(json, false);
}

export function EntityinterfaceInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityinterfaceInner {
    if (json == null) {
        return json;
    }
    return {
        
        'entity_unique_id': json['entity_unique_id'] == null ? undefined : json['entity_unique_id'],
        'entity_title': json['entity_title'] == null ? undefined : json['entity_title'],
        'entity_teaser': json['entity_teaser'] == null ? undefined : json['entity_teaser'],
        'entity_slug': json['entity_slug'] == null ? undefined : json['entity_slug'],
        'entity_time_start': json['entity_time_start'] == null ? undefined : json['entity_time_start'],
        'entity_type': json['entity_type'] == null ? undefined : json['entity_type'],
        'entity_type_id': json['entity_type_id'] == null ? undefined : json['entity_type_id'],
        'entity_image': json['entity_image'] == null ? undefined : json['entity_image'],
        'routes': json['routes'] == null ? undefined : json['routes'],
    };
}

export function EntityinterfaceInnerToJSON(value?: EntityinterfaceInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity_unique_id': value['entity_unique_id'],
        'entity_title': value['entity_title'],
        'entity_teaser': value['entity_teaser'],
        'entity_slug': value['entity_slug'],
        'entity_time_start': value['entity_time_start'],
        'entity_type': value['entity_type'],
        'entity_type_id': value['entity_type_id'],
        'entity_image': value['entity_image'],
        'routes': value['routes'],
    };
}

