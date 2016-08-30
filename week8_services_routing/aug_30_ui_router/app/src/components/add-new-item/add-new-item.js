import template from './add-new-item.html';

export default {
	template,
	controllerAs: 'addNew',
	bindings: {
		add: '&'
	},
	controller: function(){
		this.item = '';
		this.submit = function(){
			const item = this.item;
			if ( !item ) return;
			this.add({ item });
			this.item = '';
		};
	}
};