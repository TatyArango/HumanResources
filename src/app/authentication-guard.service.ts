import { AuthService } from './authentication/login/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, RouterModule } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanLoad {
	constructor(private auth: AuthService) {}

	canLoad() {
		if (this.auth.isLogged) {
			return true;
		} else {
			return false;
		}
	}
}
