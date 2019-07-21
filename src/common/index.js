import { cloneDeep } from 'lodash';
export function invoiceCartItem(cartItemsRaw) {
  const cartItems = cloneDeep(cartItemsRaw);
  let primaryCartItems = cartItems.filter(item => item.productType === 2);
  primaryCartItems = primaryCartItems.map((item)=>({...item,quantity: item.quantity ?item.quantity:'N/A'}))
  const secondaryCartItems = cartItems.filter(item => item.productType !== 2);
  let secondaryCartItem;
  if (secondaryCartItems.length > 1) {
    secondaryCartItem = secondaryCartItems.reduce(
      (acc, item) => {
        return ({
          ...item,
          quantity: acc.total + item.total,
          total: acc.total + item.total,
          unit: '₹',
          name: 'Material'
        });
      },
      {quantity: 0,total: 0}
    );
    secondaryCartItem = {
      ...secondaryCartItem,
      quantity: secondaryCartItem.quantity ? `${secondaryCartItem.unit} ${Number(
        secondaryCartItem.quantity
      ).toFixed(2)}` : 'N/A'
    };
  } else {
    secondaryCartItem = secondaryCartItems[0];
    if (secondaryCartItem) {
      secondaryCartItem.quantity = secondaryCartItem.quantity ?
        secondaryCartItem.unit === 'price' ? `${secondaryCartItem.currency} ${Number(secondaryCartItem.quantity
            ).toFixed(2)}`
          : `${secondaryCartItem.quantity} ${secondaryCartItem.unit}` : 'N/A';
    }
  }
  
  return { primaryCartItems, secondaryCartItem };
}
