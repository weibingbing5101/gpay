import template from './index.html';
import controller from './controller';
import './index.less';

let Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};


export default angular
  .module('mineEditpwd')
	.component('mineEditpwd', Component)
