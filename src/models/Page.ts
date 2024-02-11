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
import type { Block } from './Block';
import {
    BlockFromJSON,
    BlockFromJSONTyped,
    BlockToJSON,
} from './Block';
import type { Meta } from './Meta';
import {
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';
import type { PageBreadcrumbInner } from './PageBreadcrumbInner';
import {
    PageBreadcrumbInnerFromJSON,
    PageBreadcrumbInnerFromJSONTyped,
    PageBreadcrumbInnerToJSON,
} from './PageBreadcrumbInner';
import type { PageProperty } from './PageProperty';
import {
    PagePropertyFromJSON,
    PagePropertyFromJSONTyped,
    PagePropertyToJSON,
} from './PageProperty';

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * The ID for the page
     * @type {number}
     * @memberof Page
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    title?: string;
    /**
     * Returns the completed href tag. Internal links are appended with trailing slashes, such as `/about-me`, while email links are formatted with `mailto:hello@flyo.ch`.
     * @type {string}
     * @memberof Page
     */
    href?: string;
    /**
     * The slug, in its current form, contains the full path of nested slugs and serves as the identifier for querying the respective page.
     * @type {string}
     * @memberof Page
     */
    slug?: string;
    /**
     * 
     * @type {Array<Block>}
     * @memberof Page
     */
    json?: Array<Block>;
    /**
     * The depth of the page in the tree structure
     * @type {number}
     * @memberof Page
     */
    depth?: number;
    /**
     * Determining whether the page is the homepage or not.
     * @type {number}
     * @memberof Page
     */
    is_home?: number;
    /**
     * A Unix timestamp indicating when the page was created.
     * @type {number}
     * @memberof Page
     */
    created_at?: number;
    /**
     * A Unix timestamp indicating when the page was last updated.
     * @type {number}
     * @memberof Page
     */
    updated_at?: number;
    /**
     * Determining whether the page is visible or not.
     * @type {number}
     * @memberof Page
     */
    is_visible?: number;
    /**
     * 
     * @type {Meta}
     * @memberof Page
     */
    meta_json?: Meta;
    /**
     * 
     * @type {{ [key: string]: PageProperty; }}
     * @memberof Page
     */
    properties?: { [key: string]: PageProperty; };
    /**
     * A unique identifier for the page
     * @type {string}
     * @memberof Page
     */
    uid?: string;
    /**
     * Can be either a page with content (which is default behavior), email, file, url, tel
     * @type {string}
     * @memberof Page
     */
    type?: string;
    /**
     * can be either _self (which is default) or _blank
     * @type {string}
     * @memberof Page
     */
    target?: string;
    /**
     * The container this page belongs, by default all pages belong to the default container which is the main nav.
     * @type {string}
     * @memberof Page
     */
    container?: string;
    /**
     * The breadcrumb of the current site is represented by an array of pages, forming a navigational path. It provides a hierarchical representation of the user's current location within the website. The array is ordered from the innermost page, closest to the current page, to the outermost page, with the current page itself residing at the last position.
     * @type {Array<PageBreadcrumbInner>}
     * @memberof Page
     */
    breadcrumb?: Array<PageBreadcrumbInner>;
}

/**
 * Check if a given object implements the Page interface.
 */
export function instanceOfPage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'json': !exists(json, 'json') ? undefined : ((json['json'] as Array<any>).map(BlockFromJSON)),
        'depth': !exists(json, 'depth') ? undefined : json['depth'],
        'is_home': !exists(json, 'is_home') ? undefined : json['is_home'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updated_at': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'is_visible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'meta_json': !exists(json, 'meta_json') ? undefined : MetaFromJSON(json['meta_json']),
        'properties': !exists(json, 'properties') ? undefined : (mapValues(json['properties'], PagePropertyFromJSON)),
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'container': !exists(json, 'container') ? undefined : json['container'],
        'breadcrumb': !exists(json, 'breadcrumb') ? undefined : ((json['breadcrumb'] as Array<any>).map(PageBreadcrumbInnerFromJSON)),
    };
}

export function PageToJSON(value?: Page | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'href': value.href,
        'slug': value.slug,
        'json': value.json === undefined ? undefined : ((value.json as Array<any>).map(BlockToJSON)),
        'depth': value.depth,
        'is_home': value.is_home,
        'created_at': value.created_at,
        'updated_at': value.updated_at,
        'is_visible': value.is_visible,
        'meta_json': MetaToJSON(value.meta_json),
        'properties': value.properties === undefined ? undefined : (mapValues(value.properties, PagePropertyToJSON)),
        'uid': value.uid,
        'type': value.type,
        'target': value.target,
        'container': value.container,
        'breadcrumb': value.breadcrumb === undefined ? undefined : ((value.breadcrumb as Array<any>).map(PageBreadcrumbInnerToJSON)),
    };
}

