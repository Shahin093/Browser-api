const addItem = () => {
    const nameField = document.getElementById('product-name');
    const nameFieldTest = nameField.value;

    // display ul 
    displayProduct(nameFieldTest);
    // add to local storage 
    addProductToCart(nameFieldTest);
    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getCard = () => {
    const cart = localStorage.getItem('cart');
    let carObj;
    if (cart) {
        carObj = JSON.parse(cart);
    } else {
        carObj = {};
    }
    return carObj;
}

const addProductToCart = name => {
    const cart = getCard();
    cart[name] = 1;
    // console.log(cart);
    const stringifyField = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyField);
}