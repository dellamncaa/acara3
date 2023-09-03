import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const recoverPassword = createAction("[Recover password]", props<{email: string}>());
export const recoverPasswordSuccess = createAction("[Recover password] success");
export const recoverPasswordFail = createAction("[Recover password] fail", props<{error: any}>());

export const login = createAction("[login]", props<{email: string, password: string}>());
export const loginSuccess = createAction("[login] success", props<{user: User}>());
export const loginFail = createAction("[login] fail", props<{error: any}>());