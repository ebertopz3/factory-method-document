import { User } from './user';

export interface ApiResponse<M> {

}

export interface ApiResponseUsers {
  results: Array<User>;
  info: {
    seed: "56d27f4a53bd5441",
    results: 1,
    page: 1,
    version: "1.4"
  }
}
