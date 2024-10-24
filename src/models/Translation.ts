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
import type { TranslationLanguage } from './TranslationLanguage';
import {
    TranslationLanguageFromJSON,
    TranslationLanguageFromJSONTyped,
    TranslationLanguageToJSON,
} from './TranslationLanguage';

/**
 * 
 * @export
 * @interface Translation
 */
export interface Translation {
    /**
     * 
     * @type {TranslationLanguage}
     * @memberof Translation
     */
    language?: TranslationLanguage;
    /**
     * A URL-friendly identifier, typically lowercase, that is compatible with URI format and does not contain spaces or special characters.
     * @type {string}
     * @memberof Translation
     */
    slug?: string;
    /**
     * The title
     * @type {string}
     * @memberof Translation
     */
    title?: string;
    /**
     * Returns the completed href tag. Internal links are appended with trailing slashes, such as `/about-me`, while email links are formatted with `mailto:hello@flyo.ch`.
     * @type {string}
     * @memberof Translation
     */
    href?: string;
}

/**
 * Check if a given object implements the Translation interface.
 */
export function instanceOfTranslation(value: object): boolean {
    return true;
}

export function TranslationFromJSON(json: any): Translation {
    return TranslationFromJSONTyped(json, false);
}

export function TranslationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Translation {
    if (json == null) {
        return json;
    }
    return {
        
        'language': json['language'] == null ? undefined : TranslationLanguageFromJSON(json['language']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
        'href': json['href'] == null ? undefined : json['href'],
    };
}

export function TranslationToJSON(value?: Translation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'language': TranslationLanguageToJSON(value['language']),
        'slug': value['slug'],
        'title': value['title'],
        'href': value['href'],
    };
}
