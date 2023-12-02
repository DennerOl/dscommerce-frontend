import { OrderDTO } from '../models/order';
import { Cart_key } from '../utils/system';

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);

  localStorage.setItem(Cart_key, str);
}

// pego o string no localStorage e converto para obj orderDTO
export function get(): OrderDTO {

  const str = localStorage.getItem(Cart_key) || '{"items":[]}';
  return JSON.parse(str);

}