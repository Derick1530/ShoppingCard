class Product {
    constructor(title, image, price, description) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.desc = description;

    }
}

class ShoppingCart {
    item = [];
    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order now!</button>
        `;
        cartEl.className = 'cart';
         return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log('Adding product to cart');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
            <img src="${this.product.imageUrl}" alt = "${this.product.title}">
            <div  class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <button>Add to card</button>
            </div>
            </div>
            `;
        const addcartButton = prodEl.querySelector('button');
        addcartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'Nike Air Force 1',
            'https://kickz.akamaized.net/se/media/images/p/1200/nike-KD14-DEEP_ROYAL_BLUE_PALE_CORAL_COCONUT_MILK-1.jpg',
            234.4,
            'All size are available'
        ),
        new Product(
            'Nike AirMax 2020',
            'https://kickz.akamaized.net/se/media/images/p/1200/nike-W_AIR_MAX_90-PHOTON_DUST_SUMMIT_WHITE_HYPER_GRAPE-1.jpg',
            234.4,
            'All size are available'
        ),
        new Product(
            'Nike AirMax 2021',
            'https://kickz.akamaized.net/se/media/images/p/1200/nike-KD14-DEEP_ROYAL_BLUE_PALE_CORAL_COCONUT_MILK-1.jpg',
            234.4,
            'All size are available'
        )
    ];
    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render(){
        const renderHook = document.getElementById('app');
        const cart = new ShoppingCart;
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

const shop = new Shop;
shop.render();