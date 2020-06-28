import { User } from './../../shared/models/user.model';
import { Injectable } from "@angular/core";
import { timer, Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { v4 as uuidv4 } from "uuid"; 

@Injectable({
  providedIn: "root"
})
export class AuthService {
  login(username: string, password: string) {
    if (password !== "password" || !username.trim()) {
      return throwError(new Error("Invalid username or password"));
    }

    return timer(50).pipe(
      map(() => {
        const user = { id: uuidv4(), username };

        localStorage.setItem("auth", JSON.stringify(user));

        return user;
      })
    );
  }

  getStatus(): Observable<null | User> {
    return timer(50).pipe(
      map(() => {
        const userString = localStorage.getItem("auth");

        if (!userString) return null;

        return JSON.parse(userString);
      })
    );
  }

  logout() {
    localStorage.removeItem("auth");
  }
}
