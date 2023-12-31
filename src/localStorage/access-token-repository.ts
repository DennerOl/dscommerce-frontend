import { Token_key } from '../utils/system';


// para salvar token no localstorage
export function save(token: string) {
  localStorage.setItem(Token_key, token)
}

// obtendo o token do localstorage
export function get(): string | null {
  return localStorage.getItem(Token_key);
}

export function remove() {
  localStorage.removeItem(Token_key);
}