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
 * @interface EntityinterfaceInner
 */
export interface EntityinterfaceInner {
    /**
     * Unique ID
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entityUniqueId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entityTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entityTeaser?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entitySlug?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entityType?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityinterfaceInner
     */
    entityTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entityTimeStart?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityinterfaceInner
     */
    entityImage?: string;
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
    let isInstance = true;

    return isInstance;
}

export function EntityinterfaceInnerFromJSON(json: any): EntityinterfaceInner {
    return EntityinterfaceInnerFromJSONTyped(json, false);
}

export function EntityinterfaceInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityinterfaceInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityUniqueId': !exists(json, 'entity_unique_id') ? undefined : json['entity_unique_id'],
        'entityTitle': !exists(json, 'entity_title') ? undefined : json['entity_title'],
        'entityTeaser': !exists(json, 'entity_teaser') ? undefined : json['entity_teaser'],
        'entitySlug': !exists(json, 'entity_slug') ? undefined : json['entity_slug'],
        'entityType': !exists(json, 'entity_type') ? undefined : json['entity_type'],
        'entityTypeId': !exists(json, 'entity_type_id') ? undefined : json['entity_type_id'],
        'entityTimeStart': !exists(json, 'entity_time_start') ? undefined : json['entity_time_start'],
        'entityImage': !exists(json, 'entity_image') ? undefined : json['entity_image'],
        'routes': !exists(json, 'routes') ? undefined : json['routes'],
    };
}

export function EntityinterfaceInnerToJSON(value?: EntityinterfaceInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity_unique_id': value.entityUniqueId,
        'entity_title': value.entityTitle,
        'entity_teaser': value.entityTeaser,
        'entity_slug': value.entitySlug,
        'entity_type': value.entityType,
        'entity_type_id': value.entityTypeId,
        'entity_time_start': value.entityTimeStart,
        'entity_image': value.entityImage,
        'routes': value.routes,
    };
}

