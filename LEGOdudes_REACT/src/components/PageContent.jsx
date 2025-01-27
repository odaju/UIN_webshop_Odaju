import CategoryHeading from "./CategoryHeading";
import ProductCard from "./ProductCard";
export default function PageContent({products}) {
    return(
        <main>
            <CategoryHeading title="Ninjago"/>
            <div id="productlist">
                {products.map((product, index) => (
                <ProductCard product={product} key={`FCT_${index}`} />
                ))}
            </div>
            {/* <!--
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            -->*/}
        </main>
    );
}
