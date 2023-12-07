/**
 * This js file is based on the "@app/js/pre-entrega2.js" file from the first deliverable.
 * 
 * The objectives for this pre-entrega are listed in the pre-entregas folder, on its corresponding file.
 */
import { imageData } from "./data/image-data.js";//! Deprecated

// variable definitions
let cart = []; //! Deprecated
const postImgClass = 's6-post-image';
let products = [];


//! Deprecated. now runs in s6-gallery.js with ES6 Modules
// init function: where everything happens
function init() {
    console.log('init() run');

    //! Deprecated
    populateGalleryPosts();

    // ... logic here
}

//! Deprecated
/**
 * maps the given cart of articles to a simple string , using the given separator as a string too.
 * @returns string[]
 */
function mapToPromptString(articlesArray, separator = "\n") {
    return articlesArray.map(item => `ID: ${item.productId} - ${item.article} ($${item.price})`).join(separator);
}

//! Deprecated
/**
 * adds an article to the current cart
 * @param productId 
 */
function addToCart(productId) {
    const product = products.find(p => p.productId === productId);
    cart.push(product);
}

//! Deprecated
/**
 * removes an article from the current cart based object matching and splice().
 */
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.productId === productId);
    if (index > -1) cart.splice(index, 1);
}

//! Deprecated
/**
 * returns the total price based on the current articles holding of the cart.
 */
function calculateTotal() {
    return cart.reduce((acc, item) => acc + item.price, 0);
}

//! Deprecated
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

//! Deprecated
function loadProductsFromDOM() {
    // get all images with the identificator class
    const images = document.getElementsByClassName(postImgClass);

    // for each image, create a product object and push to products array
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const productName = img.src.split('/').pop(); // Extracts the file name from the src attribute
        const productPrice = Math.floor(Math.random() * 50) + 1; // Random price between 1 and 50
        products.push({
            productId: i + 1,
            article: productName,
            price: productPrice
        });
    }
}

//! Deprecated
function runCartLoop(){
    // map the products array into a string for the initial alert
    const availableProducts = mapToPromptString(products);

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
}
//! Deprecated
function populateGalleryPosts() {
    const galleryDiv = document.querySelector('.gallery');
    imageData.forEach((img, index) => {
        setTimeout(() => {
            const imageElement = document.createElement('img');
            imageElement.alt = img.alt;
            imageElement.src = img.src;
            imageElement.className = img.classes.join(' ') + ' s6-fade-in';
            galleryDiv.appendChild(imageElement);
            imageElement.offsetWidth; // Trigger reflow
            imageElement.classList.add('s6-fade-in-loaded');
        }, 150 * index);
    });
}

//... functions here

// run the init() function scoped to this file
init(); //!debug