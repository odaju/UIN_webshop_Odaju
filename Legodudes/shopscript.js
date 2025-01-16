console.log(products)

// Målet med denne koden er å gå gjennom alle produkter, generere HTML for hvert produkt og skrive dette til index.html.

// Lager en variabel som kan holde på HTML-en for produktene

let productHTML = ""

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button onclick="addProductToCart(${product.prodid})">Legg i handlekurv</button>
            </article>`)

// Finn id`en til productlist i index.html og fyll den med verdiene i variabelen productHTML.

document.getElementById("productlist").innerHTML = productHTML


//Lage toggle (at den åpner seg når man trykker på den) funksjonalitet for handlevogn.
document.getElementById("shoppingcart").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("visible")
})


// Lage funksjonen til addProductToCart()
function addProductToCart(prodid) {
    console.log("Du vil legge til produktid " + prodid)
    //bruk .some for å sjekke om prodid allerede finnes i cart:
    const idExists = cart.some(cartprod => cartprod.cartprodid === prodid)

    if(idExists) {
     //Oppdatere dette produktets quantity
     //Først: finne indexen til denne ID-en:
     const index = cart.findIndex(p => p.cartprodid === prodid)
     //Så: Bruke den til å oppdatere riktig quantity
     cart[index].quantity++
        } else {
        cart.push({cartprodid: prodid, quantity: 1})
    }

    console.log(cart)
}