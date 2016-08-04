var App = (function (Ractive) {
	'use strict';

	Ractive = 'default' in Ractive ? Ractive['default'] : Ractive;

	var component$1 = { exports: {} };

	component$1.exports = {
		data() {
			return {
				loaded: false,
				type: 'in',
				showPassword: false,
				error: null,
				credentials: {
					username: '',
					password: ''
				}
			};
		},
		oninit() {
			const token = localStorage.token;
			const loaded = () => this.set( 'loaded', true );

			if ( token ) this.getUser( token ).then( loaded );
			else loaded(); 
		},
		getUser( token ) {
			const url = '/api/auth/me';
			const headers = new Headers({ token });

			return fetch( '/api/users/me', { headers } )
				.then( res => {
	                return res.json().then( body => {
						if( res.status !== 200 ) throw body.error
						body.token = token;
					    this.set( 'user', body );
					});
				})
				.catch( err => console.log( err ) );
		},
		submit() {
			this.event.original.preventDefault();
			this.set( 'error' );
			const url = `/api/auth/sign${this.get('type')}`;
			const credentials = this.get( 'credentials' );
			const options = { 
				method: 'POST', 
				body: JSON.stringify( this.get( 'credentials' ) ),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			};

			fetch( url, options )
				.then( res => {
					return res.json().then( body => {
						if( res.status !== 200 ) throw body.error
						const { token } = body;
						localStorage.token = token;
						this.getUser( token );
					})
				})
				.catch( err => this.set( 'error', err ) );
		}
	};

	component$1.exports.template = {v:3,t:[{t:4,f:[{p:[2,1,15],t:7,e:"h2",f:[{t:4,f:[{p:[4,2,47],t:7,e:"label",a:{"class":[{t:2,x:{r:["type","."],s:"_0===_1?\"active\":\"inactive\""},p:[4,16,61]}]},f:["Sign ",{t:2,r:".",p:[5,8,114]}," ",{p:[6,3,127],t:7,e:"input",a:{type:"radio",name:[{t:2,r:"type",p:[6,29,153]}],value:[{t:2,r:".",p:[6,46,170]}]}}]}],n:52,x:{r:[],s:"[\"in\",\"up\"]"},p:[3,2,21]}]}," ",{p:[11,1,209],t:7,e:"form",v:{submit:{m:"submit",a:{r:[],s:"[]"}}},f:[{p:[12,2,238],t:7,e:"div",f:[{p:[13,3,246],t:7,e:"label",f:["User name: ",{p:[14,15,268],t:7,e:"input",a:{placeholder:"your username",required:0,value:[{t:2,r:"credentials.username",p:[14,66,319]}]}}]}]}," ",{p:[18,2,367],t:7,e:"div",f:[{p:[19,3,375],t:7,e:"label",f:["Password: ",{p:[20,14,396],t:7,e:"input",a:{required:0,type:[{t:2,x:{r:["showPassword"],s:"_0?\"text\":\"password\""},p:[20,36,418]}],value:[{t:2,r:"credentials.password",p:[20,83,465]}]}}]}]}," ",{p:[23,2,512],t:7,e:"div",f:[{p:[24,3,520],t:7,e:"label",f:[{p:[25,4,531],t:7,e:"input",a:{type:"checkbox",checked:[{t:2,r:"showPassword",p:[25,36,563]}]}}," show password"]}]}," ",{p:[29,2,617],t:7,e:"button",a:{type:"submit"},f:["OK"]}]}," ",{p:[32,1,660],t:7,e:"pre",a:{"class":"error"},f:[{t:2,r:"error",p:[32,20,679]}]}],n:50,r:"loaded",p:[1,1,0]}]};
	component$1.exports.css = "input[type=radio]{display:none}.active,.inactive{width:175px;padding:0 15px;cursor:pointer;box-sizing:border-box}.active{border:1px solid #aaa}.inactive{opacity:.3}.error{color:red}";
	var __import0__ = Ractive.extend( component$1.exports );

	var component$2 = { exports: {} };

	component$2.exports = {
	    oninit() {
	        const token = this.get( 'user.token' );
	        const headers = new Headers({ token });

	        fetch( '/api/pirates', { headers } )
	            .then( res => res.json() )
	            .then( pirates => this.set({ pirates }) );
	    }
	};

	component$2.exports.template = {v:3,t:[{p:[1,1,0],t:7,e:"h2",f:["All Pirates"]}," ",{p:[3,1,22],t:7,e:"ul",f:[{t:4,f:[{p:[5,5,53],t:7,e:"li",f:[{p:[5,9,57],t:7,e:"span",f:[{t:2,r:"name",p:[5,15,63]}]}," (",{t:2,r:"rank",p:[5,32,80]},")"]}],n:52,r:"pirates",p:[4,5,31]}]}]};
	component$2.exports.css = "span{font-weight:bolder}";
	var __import1__ = Ractive.extend( component$2.exports );

	var component$3 = { exports: {} };

	component$3.exports = {
	    oninit() {
	        const token = this.get( 'user.token' );
	        const headers = new Headers({ token });

	        fetch( '/api/crews', { headers } )
	            .then( res => res.json() )
	            .then( crews => this.set({ crews }) );
	    }
	};

	component$3.exports.template = {v:3,t:[{p:[1,1,0],t:7,e:"h2",f:["Pirate Crews"]}," ",{p:[3,1,23],t:7,e:"ul",f:[{t:4,f:[{p:[5,5,52],t:7,e:"li",f:[{t:2,r:"name",p:[5,9,56]}]}],n:52,r:"crews",p:[4,5,32]}]}]};
	var __import2__ = Ractive.extend( component$3.exports );

	var component = { exports: {} };

	component.exports = {
	    data: {
	        user: null
	    }
	};

	component.exports.template = {v:3,t:[{p:[5,1,125],t:7,e:"h1",f:["Pirates!"]}," ",{t:4,f:[{p:[9,5,162],t:7,e:"h2",f:["Hello ",{t:2,r:"user.username",p:[9,15,172]}]}," ",{p:[10,5,199],t:7,e:"crews"}," ",{p:[11,5,219],t:7,e:"pirates"}],n:50,r:"user",p:[8,1,145]},{t:4,n:51,f:[{p:[13,5,252],t:7,e:"auth",a:{user:[{t:2,r:"user",p:[13,17,264]}]}}],r:"user"}]};
	component.exports.components = { auth: __import0__, pirates: __import1__, crews: __import2__ };
	var app = Ractive.extend( component.exports );

	return app;

}(Ractive));