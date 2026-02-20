// cart.js

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addItem(item) {
        this.cart.push(item);
        console.log(`${item.name} has been added to the cart.`);
    }

    removeItem(itemName) {
        this.cart = this.cart.filter(item => item.name !== itemName);
        console.log(`${itemName} has been removed from the cart.`);
    }

    viewCart() {
        console.log('Items in your cart:');
        this.cart.forEach(item => console.log(`${item.name}: $${item.price}`));
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem({name: 'Shirt', price: 20});
cart.addItem({name: 'Pants', price: 30});
cart.viewCart();
console.log(`Total: $${cart.calculateTotal()}`);
