import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationGuard } from './authentication-guard.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeesService } from './base/employees/employees-mock.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AuthenticationModule,
		MatInputModule,
		MatFormFieldModule,
		RouterModule.forRoot([
			{ path: '', component: LoginComponent },
			{
				path: 'base',
				loadChildren: './base/base.module#BaseModule',
				canLoad: [ AuthenticationGuard ]
			}
		]),
		BrowserAnimationsModule
	],
	providers: [ AuthenticationGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
