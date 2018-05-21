import { AuthService } from './login/auth.service';
import { AuthenticationRoutingModule } from './Authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule
	],
	declarations: [ LoginComponent, LogoutComponent ],
	providers: [ AuthService ]
})
export class AuthenticationModule {}
