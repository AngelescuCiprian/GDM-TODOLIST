/*Buton de meniu  pentru mobil */
console.log("salut");
const hamburger=document.getElementById("hamburger");
const mobileMenu=document.getElementById("mobileMenu");
function showMeniuMobile(){
    mobileMenu.classList.toggle("show");
}
hamburger.addEventListener("click",showMeniuMobile);

// Selectăm toate butoanele din carduri
function getProductButtons() {
    return document.querySelectorAll(".product-card button");
}

// Obținem referința către lista de coș
function getCartList() {
    return document.getElementById("cart-items");
}

// Creează un element <li> cu titlul și prețul produsului
function createCartItem(title, price) {
    const item = document.createElement("li");
    item.textContent = `${title} - ${price}`;
    return item;
}

// Adaugă produsul în coș
function addToCart(event) {
    const card = event.target.parentElement;
    const title = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;

    const cartItem = createCartItem(title, price);
    const cartList = getCartList();
    cartList.appendChild(cartItem);
}

// Atașează evenimentele click la fiecare buton
function setupAddToCartButtons() {
    const buttons = getProductButtons();
    buttons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// Când se încarcă pagina
document.addEventListener("DOMContentLoaded", setupAddToCartButtons);
