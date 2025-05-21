import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function useShop() {
  return useContext(ShopContext);
}
