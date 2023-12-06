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
import type { PagesInner } from './PagesInner';
import {
    PagesInnerFromJSON,
    PagesInnerFromJSONTyped,
    PagesInnerToJSON,
} from './PagesInner';

/**
 * 
 * @export
 * @interface ConfigResponseContainersValue
 */
export interface ConfigResponseContainersValue {
    /**
     * Represents a comprehensive collection of pages within the specified container. These pages are organized in a nested tree structure, where each page can have child pages associated with it. These child pages are conveniently stored within the children property of their respective parent page.
     * @type {Array<PagesInner>}
     * @memberof ConfigResponseContainersValue
     */
    items?: Array<PagesInner>;
    /**
     * A unique identifier, known as a container ID, is assigned to each container during its creation and remains unchanged throughout its lifespan. This container ID serves as a permanent and unalterable reference for the container.
     * @type {string}
     * @memberof ConfigResponseContainersValue
     */
    uid?: string;
    /**
     * The identifier is a unique string consisting solely of lowercase letters, and it is intended to remain constant throughout its usage. However, in the event that there are no associated pages linked to the identifier, it can be modified within the nitro configuration.
     * @type {string}
     * @memberof ConfigResponseContainersValue
     */
    identifier?: string;
    /**
     * You can customize and assign a unique label to the container of your choice. This label can be easily modified through the nitro configuration settings. This flexibility allows you to personalize and adapt the container's identification based on your specific needs.
     * @type {string}
     * @memberof ConfigResponseContainersValue
     */
    label?: string;
}

/**
 * Check if a given object implements the ConfigResponseContainersValue interface.
 */
export function instanceOfConfigResponseContainersValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigResponseContainersValueFromJSON(json: any): ConfigResponseContainersValue {
    return ConfigResponseContainersValueFromJSONTyped(json, false);
}

export function ConfigResponseContainersValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigResponseContainersValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(PagesInnerFromJSON)),
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function ConfigResponseContainersValueToJSON(value?: ConfigResponseContainersValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(PagesInnerToJSON)),
        'uid': value.uid,
        'identifier': value.identifier,
        'label': value.label,
    };
}

