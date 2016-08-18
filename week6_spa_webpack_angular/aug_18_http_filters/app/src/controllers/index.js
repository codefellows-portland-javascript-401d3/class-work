import angular from 'angular';
import monkeys from './monkeys';

const module = angular.module( 'controllers', [] );

module.controller( 'monkeys', monkeys );

export default module.name;