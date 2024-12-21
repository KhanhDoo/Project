import type { SafeProduct } from '~/types';

interface CartState {
  items: SafeProduct[]
}

const state = reactive<CartState>({
  items: getLocalStorageData<SafeProduct[]>('cart-storage') ? getLocalStorageData<SafeProduct[]>('cart-storage') : []
})

export default () => {
  const { items } = toRefs(state);
  const { showMessage } = useStore();

  const addItem = (data: SafeProduct) => {
    const currentItems = state.items;
    const existingItem = currentItems.find(item => item.id === data.id);

    if (existingItem) {
      return showMessage({
        title: 'Item already exist',
        variant: 'destructive'
      });
    }

    state.items = [...state.items, data]

    setStorageData<SafeProduct[]>('cart-storage', state.items);
    showMessage({
      title: 'Item added to cart'
    })
  }

  const removeItem = (id: string) => {

    state.items = [...state.items.filter(item => item.id !== id)]
    setStorageData<SafeProduct[]>('cart-storage', state.items);
    showMessage({
      title: 'Item removed from the cart'
    })
  }

  const removeAll = ( ) => {

    state.items = []
    setStorageData<SafeProduct[]>('cart-storage', null);
    showMessage({
      title: 'Cart is empty'
    })
  }

  return {
    addItem,
    removeItem,
    removeAll,
  }

}
