/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.197
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BlockSlots } from './BlockSlots';
import {
    BlockSlotsFromJSON,
    BlockSlotsFromJSONTyped,
    BlockSlotsToJSON,
} from './BlockSlots';

/**
 * 
 * @export
 * @interface Block
 */
export interface Block {
    /**
     * The "Items" variable stores an array of items that have been obtained through the mapping process between content pools and fields. This mapping step allows for the seamless connection between various content sources and the corresponding data fields.
     * @type {Array<any>}
     * @memberof Block
     */
    items?: Array<any>;
    /**
     * Content serves as the primary source for generating invaluable blocks of information.
     * @type {object}
     * @memberof Block
     */
    content?: object;
    /**
     * The Configuration section contains essential information that greatly facilitates the transformation of the output into various visually appealing styles and formats. This section is instrumental in customizing the appearance and presentation of the output.
     * @type {object}
     * @memberof Block
     */
    config?: object;
    /**
     * The unique identifier for the current block type
     * @type {string}
     * @memberof Block
     */
    identifier?: string;
    /**
     * An unique identifier across all blocks
     * @type {string}
     * @memberof Block
     */
    uid?: string;
    /**
     * An unique identifier for a component annotation for the current block type
     * @type {string}
     * @memberof Block
     */
    component?: string;
    /**
     * 
     * @type {{ [key: string]: BlockSlots; }}
     * @memberof Block
     */
    slots?: { [key: string]: BlockSlots; };
}

/**
 * Check if a given object implements the Block interface.
 */
export function instanceOfBlock(value: object): boolean {
    return true;
}

export function BlockFromJSON(json: any): Block {
    return BlockFromJSONTyped(json, false);
}

export function BlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): Block {
    if (json == null) {
        return json;
    }
    return {
        
        'items': json['items'] == null ? undefined : json['items'],
        'content': json['content'] == null ? undefined : json['content'],
        'config': json['config'] == null ? undefined : json['config'],
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'component': json['component'] == null ? undefined : json['component'],
        'slots': json['slots'] == null ? undefined : (mapValues(json['slots'], BlockSlotsFromJSON)),
    };
}

export function BlockToJSON(value?: Block | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': value['items'],
        'content': value['content'],
        'config': value['config'],
        'identifier': value['identifier'],
        'uid': value['uid'],
        'component': value['component'],
        'slots': value['slots'] == null ? undefined : (mapValues(value['slots'], BlockSlotsToJSON)),
    };
}

