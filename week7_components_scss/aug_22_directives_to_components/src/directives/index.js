import angular from 'angular';
import simpleColor from './simple-color';
import editor from './editor';

const module = angular.module( 'directives', [] );

module.directive( 'simpleColor', simpleColor );
module.directive( 'editor', editor );

export default module.name;