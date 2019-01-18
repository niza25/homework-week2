class ShoppingCart {
    constructor() {
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName, quantity, price) {
        const item = {};
        item.name = itemName;
        item.quantity = quantity;
        item.pricePerUnit = price;
        this.items.push(item);
    }
    total() {
        if (this.items.length > 0) {
            return this.items.reduce((acc, curr) => {
                let sum = acc + (curr.quantity * curr.pricePerUnit)
                return sum
            }, 0)
        } else {
            return 0
        }

    }
    clear() {
        this.items = []
        return this.items
    }
}

module.exports = ShoppingCart;

