import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'employees', component: EmployeesComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class BaseRoutingModule {}
