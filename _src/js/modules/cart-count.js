var View = require('../view/view.js');
var cartCount = new View({
  ele: '[data-cart-count]',
  data: [
    'item-count',
    'cart-total'
  ]
});
module.exports = cartCount;