class Admin {
    constructor(shopGoods) {
        this.shopGoods = shopGoods;
    }

    read() {
        this.shopGoods.forEach((store) => {
            console.log(`Store name: ${store.store_name}`);
            console.log(`Address: ${store.store_address}`);
            console.log(store.products);
            console.log("--------------------------------------");
        });
    }

    search() {
        let productName = prompt("Write product name:");
        this.shopGoods.forEach((store) => {
            store.products.forEach((product) => {
                if (product.product_name === productName) {
                    console.log("--------------------------------------");
                    console.log(`Product: ${product.product_name}`);
                    console.log(`Price: ${product.product_price}`);
                    console.log(`Sold at: ${store.store_name}`);
                    console.log("--------------------------------------");
                }
            });
        });
    }

    delete() {
        let productToDelete = prompt("Write the name of the product you want to delete");
        this.shopGoods.forEach((store) => {
            store.products = store.products.filter((product) => product.product_name !== productToDelete);
        });
    }

    change() {
        let productToChange = prompt("Write the name of the product you want to change");
        let newPrice = +prompt("Write the new price");
        this.shopGoods.forEach((store) => {
            store.products.forEach((product) => {
                if (product.product_name === productToChange) {
                    product.product_price = newPrice;
                }
            });
        });
    }

    add() {
        let storeNameToAdd = prompt("Write the name of the store where you will add the product");
        let newProductInfo = prompt("Write the name, description, and price of the product").split(" ");
        this.shopGoods.forEach((store) => {
            if (store.store_name === storeNameToAdd) {
                store.products.push({
                    "product_name": newProductInfo[0],
                    "product_description": newProductInfo[1],
                    "product_price": +newProductInfo[2]
                });
            }
        });
    }

    sort() {
        let storeNameToSort = prompt("Write the name of the store");
        let sortBy = prompt("Name or Price");
        let sortOrder = prompt("From more to less or From less to more");
        this.shopGoods.forEach((store) => {
            if (store.store_name === storeNameToSort) {
                if (sortBy === "Name") {
                    store.products.sort((a, b) => a.product_name.localeCompare(b.product_name));
                } else if (sortBy === "Price") {
                    if (sortOrder === "From more to less") {
                        store.products.sort((a, b) => b.product_price - a.product_price);
                    } else if (sortOrder === "From less to more") {
                        store.products.sort((a, b) => a.product_price - b.product_price);
                    }
                }
            }
        });
    }
}
class Client extends Admin {
    constructor(shopGoods) {
        super(shopGoods);
        this.cart = [];
    }
    buy() {
        let productName = prompt("Write the name of the product you want to buy:");
        let productFound = false;
        this.shopGoods.forEach((store) => {
            store.products.forEach((product) => {
                if (product.product_name === productName) {
                    this.cart.push(product);
                    productFound = true;
                    console.log(`Product: ${product.product_name}`);
                    console.log(`Price: ${product.product_price}`);
                }
            });
        });
        if (!productFound) {
            console.log("Product not found!");
            return;
        }
        let totalCost = this.cart.reduce((total, product) => total + product.product_price, 0);
        console.log("Total Cost: " + totalCost);
    }
}
let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
];
let admin = new Admin(shopGoods);
let client = new Client(shopGoods);
let user = prompt("Admin or Client");
if (user === "Admin") {
    while (true) {
        let input = prompt(`
                For reading all goods write - Read
                For searching goods by name - Search
                For deleting a product write - Delete
                For changing product details write - Change
                For adding a new product write - Add
                For sorting products write - Sort
                To stop write - End
                `);

        if (input === "End") break;

        switch (input) {
            case "Read":
                admin.read();
                break;

            case "Search":
                admin.search();
                break;

            case "Delete":
                admin.delete();
                break;

            case "Change":
                admin.change();
                break;

            case "Add":
                admin.add();
                break;

            case "Sort":
                admin.sort();
                break;
        }
    }
} else if (user === "Client") {
    while (true) {
        let input = prompt(`
                For reading all goods write - Read
                For searching goods by name - Search
                For sorting products write - Sort
                To buy write - Buy 
                To stop write - End`);
        if (input === "End") break;
        switch (input) {
            case "Read":
                client.read();
                break;

            case "Search":
                client.search();
                break;

            case "Sort":
                client.sort();
                break;

            case "Buy":
                client.buy();
                break;
        }
    }
}