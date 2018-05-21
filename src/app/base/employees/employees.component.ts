import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Employee } from './employee-interface';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: [ './employees.component.scss' ]
})
export class EmployeesComponent implements OnInit {
	employee: Employee[];
	employee$;
	employeeUrl = 'api/employee';
	employeeForm: FormGroup;
	show = false;

	ngOnInit() {}

	constructor(public http: HttpClient, private fb: FormBuilder) {
		this.employeeForm = this.fb.group({
			employeeName: [],
			employeeCompany: [],
			employeeAge: [],
			employeeBirthday: [],
			employeeFavoriteColor: [],
			employeeProject: []
		});

		this.employee$ = this.http.get<Employee[]>('api/employee');
	}

	addEmployee(employee: Employee) {
		console.log(this.employeeForm.value);
		const newEmployee = {
			name: this.employeeForm.value['employeeName'] as Employee,
			company: this.employeeForm.value['employeeCompany'] as Employee,
			age: this.employeeForm.value['employeeAge'] as Employee,
			birthday: this.employeeForm.value['employeeBirthday'] as Employee,
			favoriteColor: this.employeeForm.value['employeeFavoriteColor'] as Employee,
			project: this.employeeForm.value['employeeProject'] as Employee
		};
		console.log();
		console.log(newEmployee);
		this.http.post<Employee>('api/employee', newEmployee).subscribe();
		this.employee$ = this.http.get<Employee[]>('api/employee');
		this.employeeForm.reset();
	}

	get() {
		// this.employee$ = this.employeeService.getEmployees();
		this.employee$ = this.http.get<Employee[]>('api/employee');
	}

	deleteEmployee(employee: Employee | number) {
		const id = typeof employee === 'number' ? employee : employee.id;
		const url = `${this.employeeUrl}/${id}`;
		console.log(id);
		this.http.delete<Employee>(url).subscribe();
		// this.employee = this.employee.filter((h) => h !== employee);
		this.employee$ = this.http.get<Employee[]>('api/employee');
	}
}
