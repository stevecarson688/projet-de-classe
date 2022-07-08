
// cart

let icone = document.querySelector('#icone');
let carte = document.querySelector('.carte');
let closecarte = document.querySelector('#close-carte');

// ouvrire la carte 
icone.onclick = () => {
    carte.classList.add('active');
};

// fermer la carte
closecarte.onclick = () => {
    carte.classList.remove('active');
};
























// carte travail
/*if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded, ready');
}
else {
    ready();
}*/

// changement de quantite
/* let quantiteInputs = document.getElementsByClassName('carte-quantite');
for (let i = 0; i < quantite.length; i++) {
    let input = quantiteInputs[i];
    input.addEventListener('change', quantiteChanged);
}

// ajouter la carte
let unshift = document.getElementsByClassName();
for (let i = 0; i < addcart.length; i++) {
    let button = unshift;
    
}

// botton psser commande
document.getElementsByClassName('btn-achats')[0].addEventListener('click', buybuttonCliked);


//creons nos function
function ready() {
    //retirer les items de notre carte
    let removecartbuttons = document.getElementsByClassName('carte-retire')
    console.log(removecartbuttons);
    for (let i = 0; i < removecartbuttons.length; i++) {
        let button = removecartbuttons[i];
        button.addEventListener('click', removecartItem);
    }
}

// function du button passer commande
function buybuttonCliked() {
    alert('votre commande arrive dans quelques heures');
    let cartecontent = document.getElementsByClassName('carte-content')[0]
    while (cartecontent.hasChildNodes()) {
        cartBoxContent.removeChild(cartecontent.firstElementChild);
    }
    updatetotal();
}

// retire item de la carte
function removecartItem(event) {
    let buttonCliked = event.target;
    buttonCliked.parenElement.remove();
    updatetotal();
}

// total

function updatetotal() {
    let cartecontent = document.getElementsByClassName('carte-content')[0];
    let cartebox = cartecontent.getElementsByClassName('carte-box');
    let total = 0;
    for (let i = 0; i < cartebox.length; i++) {
        let cartebox = cartebox[i];
        let prixElement = cartebox.getElementsByClassName('carte-prix')[0];
        let quantiteElement = cartebox.getElementsByClassName('carte-quantite')[0];
        let prix = parseFloat(prixElement.innerText.replace("fcfa", ""));
        let quantite = quantiteElement.value;
        total = total + prix * quantite;
    }
    // 
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-prix')[0].innerText = 'fcfa' + total;
}

//function du changementde quantite
function quantiteChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

// ajouter a la carte
function addcartCliked(event) {
    let button = event.target;
    let shopProducts = button.parenElement;
    let titre = shopProducts.getElementsByClassName("produit-titre")[0].innerText;
    let prix = shopProducts.getElementsByClassName("prix")[0].innerText;
    let produitimage = shopProducts.getElementsByClassName("produit-image")[0].src;
    addproductToCart(titre, prix, produitimage);
    updatetotal();
}

function addproductToCart(titre, prix, produitimage) {
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add('carte-box');
    let cartItems = document.getElementsByClassName('carte-content')[0]
    let cartItemsNames = cartItems.getElementsByClassName('carte-produit-titre')[0]
    for (let i = 0; i < cartItemsNames.length; i++) {
        alert('vous avez deja ajouter cette aricle dans votre carte');
        return;
    }
}
let cartBoxContent = `
                        <img src="fcfa{produitimage}" class="carte-image">
                        <div class="detail-box">
                            <div class="carte-produit-titre">fcfa{titre}</div>
                            <div class="carte-prix">fcfa{prix}</div>
                            <input type="number" value="1" class="carte-quantite">
                        </div>
                        <!-- retire votre carte-->
                        <i class='bx bxs-trash-alt carte-retire'></i>`;


cartShopBox.innerHTML = cartBoxContent;

cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('carte-retire')[0].addEventListener('click', removecartItem);
cartShopBox.getElementsByClassName('carte-quantite')[0].addEventListener('change', quantiteChanged);

 */











