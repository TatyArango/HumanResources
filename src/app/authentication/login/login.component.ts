import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	user = '';
	password = '';

	constructor(private fb: FormBuilder, private router: Router, public auth: AuthService) {
		this.loginForm = this.fb.group({
			User: [ '', Validators.required ],
			Password: [ '', Validators.required ]
		});
	}

	validate(): boolean {
		this.user = this.loginForm.value['User'];
		this.password = this.loginForm.value['Password'];
		if (this.user === 'admin' && this.password === '12345') {
			console.log('Logeado');
			this.router.navigate([ 'base' ]);
			this.auth.isLogged();
			return true;
		} else {
			console.log('Vuelve a intentarlo');
			return false;
		}
	}

	ngOnInit() {}
}
