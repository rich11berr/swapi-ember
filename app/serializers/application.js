import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends JSONSerializer {
  extractId(_, resourceHash) {
    return resourceHash.url.match(/\d+/g).join('');
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalize(modelClass, resourceHash) {
    console.log(resourceHash);
    resourceHash.links = {
      related: {
        href: resourceHash.residents.map((item) => item.match(/\d+/g).join('')),
        meta: {
          count: resourceHash.residents.length,
        },
      },
    };
    return super.normalize(...arguments);
  }
  // keyForRelationship(key, _) {
  //   return key + 'Id';
  // }

  // async extractRelationships(modelClass, resourceHash) {
  //   return super.extractRelationships(modelClass, { links: { residents: resourceHash.residents } })
  // }

  // extractRelationship(modelClass, relationshipHash) {
  //   console.log(relationshipHash);
  //   return super.extractRelationship(modelClass, relationshipHash);
  // }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    switch (requestType) {
      case 'findRecord':
        return super.normalizeResponse(
          store,
          primaryModelClass,
          payload,
          id,
          requestType
        );

      case 'query':
        return super.normalizeResponse(
          store,
          primaryModelClass,
          payload.results,
          id,
          requestType
        );

      default:
        return super.normalizeResponse(
          store,
          primaryModelClass,
          payload.results,
          id,
          requestType
        );
    }
  }
}
