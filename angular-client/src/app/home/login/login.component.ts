import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Validation } from '../valildation.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector : 'app-login',
	templateUrl : '/login.component.html',
	providers : [Validation]
})
export class LoginComponent{
	showErrorMsg: number=0;
	constructor(private http: Http,private service : Validation, private router : Router,private route: ActivatedRoute){
		
	}	
	loginValidate(form :NgForm) {
		const formValues = form.value;
		this.http.get("http://localhost:3000/login?email="+formValues.email+"&password="+formValues.password)
			.subscribe(
				(response)=>{
					this.router.navigate(['chatpage']);	
				},
				(error)=>{console.log(error);this.showErrorMsg=1;}
			);
		//this.service.sample();
	}
}