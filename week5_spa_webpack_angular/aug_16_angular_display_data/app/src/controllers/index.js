import angular from 'angular';
import counter from './counter';
import cowsay from './cowsay';

const module = angular.module( 'controllers', [] );

module.controller( 'counter', counter );
module.controller( 'cowsay', cowsay );

export default module.name;

