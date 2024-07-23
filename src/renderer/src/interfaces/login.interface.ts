export interface Login {
  email: string
  password: string
}

export interface HandleLogin extends HTMLFormElement {
  email: {
    value: string
  }
  password: {
    value: string
  }
}
