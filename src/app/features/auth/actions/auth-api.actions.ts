import { User } from './../../../shared/models/user.model';
import { createAction } from '@ngrx/store';


export const getAuthStatusSuccess = createAction(
    "[Auth/API] Get Auth Status Success",
    (user: User| null) => ({user})
)

export const loginSuccess = createAction(
    "[Auth/API] Login Success",
    (user: User) => ({user})
)

export const loginFailure = createAction(
    "[Auth/API] Login Failure",
    (reason: User) => ({reason})
)