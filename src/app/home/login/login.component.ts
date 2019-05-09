import { Component } from '@angular/core';
@Component({
	selector : 'app-login',
	templateUrl : '/login.component.html'
})
export class LoginComponent{
	disableStatus=false;
	title="tt";
	val="rajesh dan da";
	constructor(){
		setTimeout(()=>{
			this.disableStatus=true;
			this.title="timeout ran";
		},5000);
	}	
}