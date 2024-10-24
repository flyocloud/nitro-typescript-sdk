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
import type { Breadcrumb } from './Breadcrumb';
import {
    BreadcrumbFromJSON,
    BreadcrumbFromJSONTyped,
    BreadcrumbToJSON,
} from './Breadcrumb';
import type { EntityInterface } from './EntityInterface';
import {
    EntityInterfaceFromJSON,
    EntityInterfaceFromJSONTyped,
    EntityInterfaceToJSON,
} from './EntityInterface';
import type { Translation } from './Translation';
import {
    TranslationFromJSON,
    TranslationFromJSONTyped,
    TranslationToJSON,
} from './Translation';

/**
 * 
 * @export
 * @interface Entity
 */
export interface Entity {
    /**
     * 
     * @type {EntityInterface}
     * @memberof Entity
     */
    entity?: EntityInterface;
    /**
     * All values which are mappend from inside flyo trough the mapping system are stored inside this object.
     * @type {object}
     * @memberof Entity
     */
    model?: object;
    /**
     * Current language context for entity model data
     * @type {string}
     * @memberof Entity
     */
    language?: string;
    /**
     * A Json LD based object with schema.org informations about the entity
     * @type {object}
     * @memberof Entity
     */
    jsonld?: object;
    /**
     * The translation contains information about further data in different languages. If the integration is not defined as multi lingual, the translations will be empty.
     * @type {Array<Translation>}
     * @memberof Entity
     */
    translation?: Array<Translation>;
    /**
     * The breadcrumb of the current site is represented by an array of pages, forming a navigational path. It provides a hierarchical representation of the user's current location within the website. The array is ordered from the innermost page, closest to the current page, to the outermost page, with the current page itself residing at the last position.
     * @type {Array<Breadcrumb>}
     * @memberof Entity
     */
    breadcrumb?: Array<Breadcrumb>;
}

/**
 * Check if a given object implements the Entity interface.
 */
export function instanceOfEntity(value: object): boolean {
    return true;
}

export function EntityFromJSON(json: any): Entity {
    return EntityFromJSONTyped(json, false);
}

export function EntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Entity {
    if (json == null) {
        return json;
    }
    return {
        
        'entity': json['entity'] == null ? undefined : EntityInterfaceFromJSON(json['entity']),
        'model': json['model'] == null ? undefined : json['model'],
        'language': json['language'] == null ? undefined : json['language'],
        'jsonld': json['jsonld'] == null ? undefined : json['jsonld'],
        'translation': json['translation'] == null ? undefined : ((json['translation'] as Array<any>).map(TranslationFromJSON)),
        'breadcrumb': json['breadcrumb'] == null ? undefined : ((json['breadcrumb'] as Array<any>).map(BreadcrumbFromJSON)),
    };
}

export function EntityToJSON(value?: Entity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity': EntityInterfaceToJSON(value['entity']),
        'model': value['model'],
        'language': value['language'],
        'jsonld': value['jsonld'],
        'translation': value['translation'] == null ? undefined : ((value['translation'] as Array<any>).map(TranslationToJSON)),
        'breadcrumb': value['breadcrumb'] == null ? undefined : ((value['breadcrumb'] as Array<any>).map(BreadcrumbToJSON)),
    };
}

