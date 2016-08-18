import angular from 'angular';
import reverse from './reverse';
import typeName from './typeName';

const module = angular.module( 'filters', [] );

module.filter( 'reverse', reverse );
module.filter( 'typeName', typeName );

export default module.name;