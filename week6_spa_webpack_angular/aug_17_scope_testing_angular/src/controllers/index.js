import angular from 'angular';
import counter from './counter';
import cowsay from './cowsay';
import list from './list';
import item from './item';
import monkeys from './monkeys';

const module = angular.module( 'controllers', [] );

module.controller( 'counter', counter );
module.controller( 'cowsay', cowsay );
module.controller( 'list', list );
module.controller( 'item', item );
module.controller( 'monkeys', monkeys );

export default module.name;

