/**
 * this is a temporal file with the goal of developing the Js functionallity for the e-commerce cart for the shop/gallery.
 */

// variable definitions
let cart = [];
// these products are just examples from the gallery page posts
const products = [
    { productId: 1, article: "eye.png", price: 6 },
    { productId: 2, article: "grok_cluster_TRIMMED.png", price: 40 },
    { productId: 3, article: "sigil.png", price: 15 },
    { productId: 4, article: "tea-fantasy.png", price: 10 },
    { productId: 5, article: "trumpeting_ecstasy.png", price: 14 },
];


// init function: where everything happens
function init() {
    console.log('pre-entrega.js initialized');

    
    // map the products array into a string for the initial alert
    const availableProducts = mapToPromptString(products);
    

    // user interaction loop
    while (true) {
        // console.log('looped');


        const action = prompt(`Do you want to: ${getPossibleOperations().join(' | ')}?`);
        switch (action) {
            case "add":
                const addProductId = parseInt(prompt("Enter product ID\nAvailable Products:\n" + availableProducts));
                addToCart(addProductId);
                break;
            case "remove":
                const removeProductId = parseInt(prompt("Enter product ID\nCurrent Cart:\n" + mapToPromptString(cart)));
                removeFromCart(removeProductId);
                break;
            case "quit":
                break;
            default: 
                alert("Invalid action");
        }
        if (action === "quit") break;

        // pop up the current total and cart articles
        alert(`---SUMMARY---\nTotal Price: $${calculateTotal()} \nCurrent Cart: \n${mapToPromptString(cart)}`);
    }

    // ... logic here
}

/**
 * maps the given cart of articles to a simple string , using the given separator as a string too.
 * @returns string[]
 */
function mapToPromptString(articlesArray, separator = "\n") {
    return articlesArray.map(item => `ID: ${item.productId} - ${item.article} ($${item.price})`).join(separator);
}

/**
 * adds an article to the current cart
 * @param productId 
 */
function addToCart(productId) {
    const product = products.find(p => p.productId === productId);
    cart.push(product);
}
/**
 * removes an article from the current cart based object matching and splice().
 */
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.productId === productId);
    if (index > -1) cart.splice(index, 1);
}

/**
 * returns the total price based on the current articles holding of the cart.
 */
function calculateTotal() {
    return cart.reduce((acc, item) => acc + item.price, 0);
}

/**
 * returns an array with the strings of the possible operations
 * based on the current state of the `cart` and `products` arrays
 * @returns {string[]} an array with the possible operations - 'quit',...,'add', 'remove',...,etc.
 */
function getPossibleOperations(){
    const defaultOperations = ['quit'];
    let operations = [...defaultOperations];
    // check the products array, if its not empty add 'add' operation
    if (products.length > 0) {
        operations.push('add');
    }
    // check the cart array, if it has at least one item, add the 'remove' operation.
    if(cart.length > 0){
        operations.push('remove');
    }

    // console.log(cart);
    // console.log(operations);

    //...rest of checks here
    return operations;
}

//... functions here

// run the init() function scoped to this file
init();