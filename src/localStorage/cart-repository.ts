import { OrderDTO } from '../models/order';

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);

  localStorage.setItem("com.dscommerce/Cart", str);
}

// pego o string no localStorage e converto para obj orderDTO
export function get(): OrderDTO {

  const str = localStorage.getItem("com.dscommerce/Cart") || '{"items"=[]}';
  return JSON.parse(str);

}