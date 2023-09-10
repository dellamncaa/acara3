import { Action, StoreModule } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth/auth.service";
import { provideMockActions } from '@ngrx/effects/testing';
import { User } from "src/app/model/user/User";
import { RegisterEffects } from "./register.effects";
import { register, registerFail, registerSuccess } from "./register.action";
import { UserRegister } from "src/app/model/user/UserRegister";


describe('Register effects', () => {

    let effects: RegisterEffects;
    let actions$: Observable<Action>;
    let error = {error: 'error'};
    let user = new User();
    user.id = "anyUserId";

    let authServiceMock = {
        register(userRegister: UserRegister){
            if (userRegister.email == "error@email.com") {
                return throwError(error);
            }
            return of({});
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot([]),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([
                    RegisterEffects
                ])
            ],
            providers: [
                provideMockActions(() => actions$)
            ]
        }).overrideProvider(AuthService, {useValue: authServiceMock});

        effects = TestBed.get(RegisterEffects);
    })

    it('should register return success', (done) => {
        actions$ = of(register({userRegister: new UserRegister()}));

        effects.register$.subscribe((newAction: any) => {
            expect(newAction).toEqual(registerSuccess());
            done();
        });
    })

    it('should register return error', (done) => {
        const userRegister = new UserRegister();
        userRegister.email = "error@email.com";

        actions$ = of(register({userRegister}));

        effects.register$.subscribe((newAction: any) => {
            expect(newAction).toEqual(registerFail({error}));
            done();
        });
    })
})


