function greeting(store_name) {
  console.log(`Thank you for visiting ${store_name}, we hope you have a great time shopping with us!`);
};

const storeName = "Tortoise's Shop";

function app() {
  for(g = 0; g < 5; g++) {
    greeting(storeName);
  }
  
};

app();

function shop() {
  const items = ['seashell', 'jar', 'rose'];

  const store_details = {
    items: ['notepad', 'pencil', 'eraser'],
    sales: 0,
    add_item: function add_items(items, item) {
      items.push(item);
    },
    bought_item: function bought_item(items, item) {
      if (items.indexOf(item) !== -1) {
        items.splice(this.items.indexOf(item), 1);
        store_details.sales++;    //this.sales??
        return 'Here\'s your receipt.';
      } else {
        return `Sorry, we don't have ${item} in stock.`
      }
    }
  }

  store_details.add_item(items, 'cocoa butter');
  store_details.add_item(items, 'almond oil');
  store_details.add_item(items, 'rosemary');
  store_details.add_item(items, 'himalyan salt');
  store_details.add_item(items, 'dark chocolate');

  console.log(`We carry ${ items }`);

  let purchase = "rosemary"

  // console.log(`The item is ${items.includes(purchase) ? bought_item(items, purchase) : "not in stock and cannot be"}`);

  // console.log(items);
  
  console.log(store_details.bought_item(items, purchase));
  console.log(store_details.bought_item(items, "water"));
  console.log(`Thank you for shopping at ${storeName}!`);

  console.log(`Today we had ${store_details.sales} sales!`)
}

shop()


// function add_items(items, item) {
//   items.push(item)
// };

// function bought_item(items, item) {
//   if (items.indexOf(item) !== -1) {
//     items.splice(items.indexOf(item), 1);
//     return 'Here\'s your receipt.';
//   } else {
//     return `Sorry, we don't have ${item} in stock.`
//   }
// }

