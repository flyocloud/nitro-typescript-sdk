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


import * as runtime from '../runtime';
import type {
  Entity,
} from '../models/index';
import {
    EntityFromJSON,
    EntityToJSON,
} from '../models/index';

export interface EntityBySlugRequest {
    slug: string;
    typeId?: number;
    lang?: string;
}

export interface EntityByUniqueidRequest {
    uniqueid: string;
    lang?: string;
}

/**
 * 
 */
export class EntitiesApi extends runtime.BaseAPI {

    /**
     * The endpoint allows for the retrieval of entities based on their slug, with an optional Entity-Type-ID for more accurate results. The endpoint requires a `slug` parameter to be passed in the path, which is necessary for identifying the entity. However, since slugs are not unique across different entities, it is highly recommended to also provide the `typeId` parameter through the query to avoid incorrect or unintended results. This `typeId` serves as an Entity-Definition-Schema ID, ensuring a more precise and targeted entity retrieval by distinguishing the entities more clearly. The `slug` parameter is mandatory and should be a string (e.g., \'hello-world\'), while the `typeId` parameter is optional and should be an integer (e.g., 123), representing the Entity-Definition-Schema ID.
     * Find entity by slug and optional Entity-Type-ID
     */
    async entityBySlugRaw(requestParameters: EntityBySlugRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entity>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling entityBySlug().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['typeId'] != null) {
            queryParameters['typeId'] = requestParameters['typeId'];
        }

        if (requestParameters['lang'] != null) {
            queryParameters['lang'] = requestParameters['lang'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["token"] = await this.configuration.apiKey("token"); // ApiToken authentication
        }

        const response = await this.request({
            path: `/entities/slug/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityFromJSON(jsonValue));
    }

    /**
     * The endpoint allows for the retrieval of entities based on their slug, with an optional Entity-Type-ID for more accurate results. The endpoint requires a `slug` parameter to be passed in the path, which is necessary for identifying the entity. However, since slugs are not unique across different entities, it is highly recommended to also provide the `typeId` parameter through the query to avoid incorrect or unintended results. This `typeId` serves as an Entity-Definition-Schema ID, ensuring a more precise and targeted entity retrieval by distinguishing the entities more clearly. The `slug` parameter is mandatory and should be a string (e.g., \'hello-world\'), while the `typeId` parameter is optional and should be an integer (e.g., 123), representing the Entity-Definition-Schema ID.
     * Find entity by slug and optional Entity-Type-ID
     */
    async entityBySlug(requestParameters: EntityBySlugRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entity> {
        const response = await this.entityBySlugRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The endpoint provides comprehensive information about a specified entity. An entity represents a collection of information pertaining to a specific data type and is defined by a key-value pair. You can use various data types such as blogs, events, or any other relevant data. However, in order to access an entity, it must be properly configured within the nitro config.
     * Find entity by uniqueid
     */
    async entityByUniqueidRaw(requestParameters: EntityByUniqueidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Entity>> {
        if (requestParameters['uniqueid'] == null) {
            throw new runtime.RequiredError(
                'uniqueid',
                'Required parameter "uniqueid" was null or undefined when calling entityByUniqueid().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['lang'] != null) {
            queryParameters['lang'] = requestParameters['lang'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["token"] = await this.configuration.apiKey("token"); // ApiToken authentication
        }

        const response = await this.request({
            path: `/entities/uniqueid/{uniqueid}`.replace(`{${"uniqueid"}}`, encodeURIComponent(String(requestParameters['uniqueid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityFromJSON(jsonValue));
    }

    /**
     * The endpoint provides comprehensive information about a specified entity. An entity represents a collection of information pertaining to a specific data type and is defined by a key-value pair. You can use various data types such as blogs, events, or any other relevant data. However, in order to access an entity, it must be properly configured within the nitro config.
     * Find entity by uniqueid
     */
    async entityByUniqueid(requestParameters: EntityByUniqueidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Entity> {
        const response = await this.entityByUniqueidRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
