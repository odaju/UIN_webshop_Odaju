import Nav from "./Nav";
export default function Header() {
    return (
        <header>
            <a href="index.html" id="logo"><img src="website_images/LD_logo.svg" alt="Legodudes" /></a>
            <button id="shoppingcart">
                <span id="cartcount">99</span>
                <img src="website_images/legocart.svg" alt="Handlevogn" />
            </button>
            <Nav />
        </header>
    )
}