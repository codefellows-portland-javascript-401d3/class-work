import angular from 'angular';
import simpleColor from './simple-color';

const module = angular.module( 'directives', [] );

module.directive( 'simpleColor', simpleColor );

export default module.name;