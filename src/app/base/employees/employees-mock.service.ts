import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EmployeesService implements InMemoryDbService {
	createDb() {
		const employee = [
			{
				id: 1,
				name: 'Windstorm',
				company: 'Amazon.com',
				age: 20,
				birthday: '20/10/1998',
				favoriteColor: 'rgb(213, 103, 225)',
				project: '1'
			},
			{
				id: 2,
				name: 'Bombasto',
				company: 'Apple Inc.',
				age: 22,
				birthday: '05/12/1995',
				favoriteColor: 'Gray',
				project: '2'
			},
			{
				id: 3,
				name: 'Magneta',
				company: 'Microsoft',
				age: 25,
				birthday: '03/03/1993',
				favoriteColor: 'Green',
				project: '3'
			},
			{
				id: 4,
				name: 'Tornado',
				company: 'Alphabet Inc.',
				age: 30,
				birthday: '01/01/1988',
				favoriteColor: 'blue',
				project: '4'
			}
		];
		return { employee };
	}
}
