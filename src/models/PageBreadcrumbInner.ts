/* tslint:disable */
/* eslint-disable */
/**
 * Flyo Nitro
 * This document provides a comprehensive overview of all the endpoints available for Flyo Nitro, a powerful platform designed to facilitate the development of websites. Flyo Nitro is built upon three strategic pillars that play a central role in website development:  + Config: The config component is responsible for loading all the necessary elements required for seamless navigation within the website layout. This includes crucial elements like the navigation menu or global content, such as the \"Locations\" section of an entity, which can be utilized in the footer across all pages. + Pages: Pages are evaluated based on their unique slug (path) and encompass all the content needed to populate a specific page. This includes various content elements, known as blocks, as well as meta information like \"og-descriptions.\" Additionally, pages can dynamically incorporate content from entities by employing mapping techniques. + Entity: Entities can be retrieved by utilizing a unique identifier, which can be configured within Flyo Nitro. Each entity provides comprehensive details in the form of fields, offering specific content tailored to a particular context.  Furthermore, it is important to distinguish between the **development** and **production** environments in Flyo Nitro. In the development environment, any changes made to data within the Flyo User Interface are immediately accessible, even without saving. This feature enables users to have a live preview of the changes during data entry. On the other hand, the production environment exclusively utilizes saved data, ensuring that only finalized content is displayed.  For more detailed documentation in German, please visit: dev.flyo.cloud
 *
 * The version of the OpenAPI document: 1.0.0-beta.172
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
 * @interface PageBreadcrumbInner
 */
export interface PageBreadcrumbInner {
    /**
     * Meta page title
     * @type {string}
     * @memberof PageBreadcrumbInner
     */
    slug?: string;
    /**
     * Meta page title
     * @type {string}
     * @memberof PageBreadcrumbInner
     */
    title?: string;
}

/**
 * Check if a given object implements the PageBreadcrumbInner interface.
 */
export function instanceOfPageBreadcrumbInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageBreadcrumbInnerFromJSON(json: any): PageBreadcrumbInner {
    return PageBreadcrumbInnerFromJSONTyped(json, false);
}

export function PageBreadcrumbInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageBreadcrumbInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function PageBreadcrumbInnerToJSON(value?: PageBreadcrumbInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'slug': value.slug,
        'title': value.title,
    };
}

