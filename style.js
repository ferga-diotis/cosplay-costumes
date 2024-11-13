// Sample JavaScript to dynamically load featured products
const products = [
    { name: "Hero Costume", price: "$49.99", img: "Costume1.png" },
    { name: "Villain Costume", price: "$59.99", img: "Costume2.png" },
    { name: "Sidekick Costume", price: "$39.99", img: "images (3).png" },
];

const productList = document.querySelector('.product-list');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productItem.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;
    productList.appendChild(productItem);
});
