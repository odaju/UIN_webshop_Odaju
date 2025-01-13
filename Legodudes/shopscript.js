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
                <button>Legg i handlekurv</button>
            </article>`)

// Finn id`en til productlist i index.html og fyll den med verdiene i variabelen productHTML.

document.getElementById("productlist").innerHTML = productHTML