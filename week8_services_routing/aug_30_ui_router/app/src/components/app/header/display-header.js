export default {
	template: `
	<div class="displays">
		<label ng-repeat="display in $ctrl.displays">
			{{display}}
			<input type="radio" name="display" 
				ng-model="$ctrl.display"
				ng-value="display"
				ng-change="$ctrl.change()">
		</label>
	</div>`,
	bindings: {
		display: '<'
	},
	controller
};

controller.$inject = [ '$state' ];

function controller( $state ) {
	this.displays = [ 'thumb', 'list', 'gallery' ];
	this.change = () => {
		$state.go( $state.current.name, { display: this.display } );
	};
}
