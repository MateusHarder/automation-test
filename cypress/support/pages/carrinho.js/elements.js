export const el = {
  modalConfirmation: '.modal-content',
  modalTitle: '.modal-content h4',
  modalMessage: 'p:contains("added")',
  linkToCart: '.modal-body a[href="/view_cart"]',
  buttonContinueShopping: 'button:contains("Continue Shopping")',
  cartinfo: '#cart_info',
  productCart: '.cart_product',
  productNameCart: '.cart_description h4 a',
  productPriceCart: '.cart_price p',
  deleteProductButton: '.cart_quantity_delete',
  cartEmptyMessage: 'p:contains("Cart is empty")',
  buttonProceedToCheckout: 'a:contains("Proceed To Checkout")',
  addressDetails: 'div[data-qa="checkout-info"]',
  deliveryAddressDetails: 'h3:contains("delivery address")',
  billingAddressDetails: 'h3:contains("billing address")',
  totalPriceCart: '.cart_total_price',
  labelTotalPriceCart: 'h4:contains("Total Amount")'
}