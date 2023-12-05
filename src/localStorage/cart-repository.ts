import { OrderDTO, OrderItemDTO } from '../models/order';
import { Cart_key } from '../utils/system';

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);

  localStorage.setItem(Cart_key, str);
}

// pego o string no localStorage e converto para obj orderDTO
export function get(): OrderDTO {

  const str = localStorage.getItem(Cart_key) || '{"items":[]}';
  const obj = JSON.parse(str) as OrderDTO;

  const cart = new OrderDTO();
  obj.items.forEach(x => {
    cart.items.push(new OrderItemDTO(x.productId, x.quantity, x.name, x.price, x.imgUrl))

  });
  return cart;
}

// limpar o carrinho
export function clear() {
  localStorage.setItem(Cart_key, '{"items":[]}');
}