import { Endpoints as Auth } from '../auth/interfaces/endpoints';
import { Endpoints as Todo } from '../todo/interfaces/endpoints';

export interface Endpoints extends Auth, Todo {}
