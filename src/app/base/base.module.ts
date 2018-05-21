import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { BaseRoutingModule } from './base-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './employees/employees-mock.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	imports: [
		CommonModule,
		BaseRoutingModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCardModule,
		OverlayModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(EmployeesService)
	],
	declarations: [ EmployeesComponent, HomeComponent ],
	providers: []
})
export class BaseModule {}
