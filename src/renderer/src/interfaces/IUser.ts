export interface IUser {
  id: string
  name: string
  email: string
  token: string
  access: {
    id: string
    name: string
  }
  create_at: string
  update_at: string
}
