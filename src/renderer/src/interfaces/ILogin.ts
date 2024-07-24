export interface ILogin {
  email: string
  password: string
}

export interface IHandleLogin extends HTMLFormElement {
  email: {
    value: string
  }
  password: {
    value: string
  }
}
