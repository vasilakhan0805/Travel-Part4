// import star from "./assets/icons/star.png"
import time from "./assets/icons/card/time.png"
import people from "./assets/icons/card/people.png"
import location from "./assets/icons/card/location.png"


function Card({ products }) {
    return (
        <div className="product-card">
            <div className="product-card__image-wrapper"></div>
            <div className="product-card-content">
                <h3 className="product-card-title">Enjoy Beauty place in Bali City</h3>
                <div className="product-card__content-wrap">
                    <div className="product-card__content-item">
                        <img src={products} alt="day" />
                        <p>{products?.day} Day's</p>
                    </div>
                    <div className="product-card__content-item">
                        <img src={products.person} alt="" />
                        <p>{products?.person} person</p>
                    </div>
                    <div className="product-card__content-item">
                        <img src={products?.rating} alt="rating" />
                        <p>{products?.rating?.rate} ({products?.rating.count} k review)</p>
                    </div>
                </div>
                <div className="product-card__footer">
                    <div className="product-card__footer__left">
                        <img src={location} alt="" />
                        <p>{products?.address}</p>
                    </div>
                    <button className="product-card__btn">${products?.price}</button>
                </div>
            </div>
        </div>

    )
}
 
export default Card