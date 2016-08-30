import template from './editable.html';

const ENTER = 13, ESC = 27;

export default {
	template,
	bindings: {
		text: '<',
		changed: '&'
	},
	controller
};

controller.$inject = [ '$element', '$timeout' ];

function controller( $element, $timeout ) {

	this.editing = false;
	
	this.edit = () => {
		this.proposed = this.text;
		this.editing = true;
		$timeout( () => $element.find('input')[0].focus() );
	};

	this.keydown = e => {
		if( e.which === ENTER ) this.change();
		else if ( e.which === ESC ) this.editing = false;
	};

	this.change = () => {
		if ( !this.editing ) return;

		this.text = this.proposed;
		this.editing = false;
		this.changed({ text: this.text });
	};
}