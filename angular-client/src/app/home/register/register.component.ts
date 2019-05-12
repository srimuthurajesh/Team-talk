import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
	showRegSuccessMsg: number=0;
	showRegErrorMsg: number=0;
  
  constructor(private http: Http, private router : Router,private route: ActivatedRoute){
		
	}	
  ngOnInit() {
  }
  register(form :NgForm) {
		const formValues = form.value;
		this.http.get("http://localhost:3000/register?username="+formValues.username+"&email="+formValues.email+"&password="+formValues.password+"&confirmpassword="+formValues.confirmpassword)
			.subscribe(
				(response)=>{
						form.reset();
						this.showRegSuccessMsg=1;
				},
				(error)=>{console.log(error);this.showRegErrorMsg=1;}
			);	

		//this.service.sample();
	}
}
