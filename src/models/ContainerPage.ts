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
 * @interface ContainerPage
 */
export interface ContainerPage {
    /**
     * The `page` type is the default behavior for a webpage, but it can also be assigned different types to suit specific purposes. In addition to the default content type, there are several other types available, including `email`, `file`, `url` and `tel`. By specifying these types, you can customize the behavior and functionality of your page to better align with your requirements.
     * @type {string}
     * @memberof ContainerPage
     */
    type?: string;
    /**
     * can be either _self (which is default) or _blank
     * @type {string}
     * @memberof ContainerPage
     */
    target?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerPage
     */
    label?: string;
    /**
     * Returns the completed href tag. Internal links are appended with trailing slashes, such as `/about-me`, while email links are formatted with `mailto:hello@flyo.ch`.
     * @type {string}
     * @memberof ContainerPage
     */
    href?: string;
    /**
     * The slug, in its current form, contains the full path of nested slugs and serves as the identifier for querying the respective page.
     * @type {string}
     * @memberof ContainerPage
     */
    slug?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContainerPage
     */
    properties?: { [key: string]: any; };
    /**
     * Represents a comprehensive collection of pages within the specified container. These pages are organized in a nested tree structure, where each page can have child pages associated with it. These child pages are conveniently stored within the children property of their respective parent page.
     * @type {Array<ContainerPage>}
     * @memberof ContainerPage
     */
    children?: Array<ContainerPage>;
}

/**
 * Check if a given object implements the ContainerPage interface.
 */
export function instanceOfContainerPage(value: object): boolean {
    return true;
}

export function ContainerPageFromJSON(json: any): ContainerPage {
    return ContainerPageFromJSONTyped(json, false);
}

export function ContainerPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerPage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'target': json['target'] == null ? undefined : json['target'],
        'label': json['label'] == null ? undefined : json['label'],
        'href': json['href'] == null ? undefined : json['href'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'properties': json['properties'] == null ? undefined : json['properties'],
        'children': json['children'] == null ? undefined : ((json['children'] as Array<any>).map(ContainerPageFromJSON)),
    };
}

export function ContainerPageToJSON(value?: ContainerPage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'target': value['target'],
        'label': value['label'],
        'href': value['href'],
        'slug': value['slug'],
        'properties': value['properties'],
        'children': value['children'] == null ? undefined : ((value['children'] as Array<any>).map(ContainerPageToJSON)),
    };
}

