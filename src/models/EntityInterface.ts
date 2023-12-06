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
import type { EntityMetric } from './EntityMetric';
import {
    EntityMetricFromJSON,
    EntityMetricFromJSONTyped,
    EntityMetricToJSON,
} from './EntityMetric';

/**
 * 
 * @export
 * @interface EntityInterface
 */
export interface EntityInterface {
    /**
     * A sequential index serves as a version identifier for an item, allowing for improved organization and extended functionality. By assigning a unique numerical value to each version, it becomes easier to track and manage different iterations of an item over time.
     * @type {number}
     * @memberof EntityInterface
     */
    version?: number;
    /**
     * 
     * @type {EntityMetric}
     * @memberof EntityInterface
     */
    entityMetric?: EntityMetric;
    /**
     * Unique ID
     * @type {string}
     * @memberof EntityInterface
     */
    entityUniqueId?: string;
    /**
     * An unique ID across the flyo sytem
     * @type {string}
     * @memberof EntityInterface
     */
    entityId?: string;
    /**
     * For image manipulation please see https://dev.flyo.cloud/dev/infos/images.html
     * @type {string}
     * @memberof EntityInterface
     */
    entityImage?: string;
    /**
     * The slug for the given item, this can be either unique or not, depending on the configuration of the entity definition schema.
     * @type {string}
     * @memberof EntityInterface
     */
    entitySlug?: string;
    /**
     * The standard interface teaser resolved for the current entity
     * @type {string}
     * @memberof EntityInterface
     */
    entityTeaser?: string;
    /**
     * Unique ID
     * @type {string}
     * @memberof EntityInterface
     */
    entityTimeEnd?: string;
    /**
     * If not defined, null is returned
     * @type {string}
     * @memberof EntityInterface
     */
    entityTimeStart?: string;
    /**
     * The standard interface title resolved for the current entity
     * @type {string}
     * @memberof EntityInterface
     */
    entityTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityInterface
     */
    entityType?: string;
    /**
     * The Type-ID, alternatively referred to as the Entity-Definition-Schema ID, serves as a crucial identifier within the system. It uniquely distinguishes and categorizes the Entity-Definition-Schema.
     * @type {number}
     * @memberof EntityInterface
     */
    entityTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityInterface
     */
    updatedAt?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityInterface
     */
    routes?: { [key: string]: string; };
}

/**
 * Check if a given object implements the EntityInterface interface.
 */
export function instanceOfEntityInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityInterfaceFromJSON(json: any): EntityInterface {
    return EntityInterfaceFromJSONTyped(json, false);
}

export function EntityInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, '_version') ? undefined : json['_version'],
        'entityMetric': !exists(json, 'entity_metric') ? undefined : EntityMetricFromJSON(json['entity_metric']),
        'entityUniqueId': !exists(json, 'entity_unique_id') ? undefined : json['entity_unique_id'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'entityImage': !exists(json, 'entity_image') ? undefined : json['entity_image'],
        'entitySlug': !exists(json, 'entity_slug') ? undefined : json['entity_slug'],
        'entityTeaser': !exists(json, 'entity_teaser') ? undefined : json['entity_teaser'],
        'entityTimeEnd': !exists(json, 'entity_time_end') ? undefined : json['entity_time_end'],
        'entityTimeStart': !exists(json, 'entity_time_start') ? undefined : json['entity_time_start'],
        'entityTitle': !exists(json, 'entity_title') ? undefined : json['entity_title'],
        'entityType': !exists(json, 'entity_type') ? undefined : json['entity_type'],
        'entityTypeId': !exists(json, 'entity_type_id') ? undefined : json['entity_type_id'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'routes': !exists(json, 'routes') ? undefined : json['routes'],
    };
}

export function EntityInterfaceToJSON(value?: EntityInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_version': value.version,
        'entity_metric': EntityMetricToJSON(value.entityMetric),
        'entity_unique_id': value.entityUniqueId,
        'entity_id': value.entityId,
        'entity_image': value.entityImage,
        'entity_slug': value.entitySlug,
        'entity_teaser': value.entityTeaser,
        'entity_time_end': value.entityTimeEnd,
        'entity_time_start': value.entityTimeStart,
        'entity_title': value.entityTitle,
        'entity_type': value.entityType,
        'entity_type_id': value.entityTypeId,
        'updated_at': value.updatedAt,
        'routes': value.routes,
    };
}
