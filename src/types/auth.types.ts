export interface IRegisterObj {
    surname: string,
    name: string,
    patronymic: string,
    username: string,
    email: string,
    rolesId: string,
    password: string
}

export interface ISigninResponce {
    token: string,
    tokenType: string,
    username: string,
    surname: string,
    name: string,
    authorities: [
        {
            authority: string,
        }
    ]
}