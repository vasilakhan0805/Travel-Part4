import React from "react";
import "./Products.css"
import { data } from "./Data.js"
import Card from "./Card.js"

export let Products = () => {
        return (
            <section className="products">
                <div className="products__wrapper">{data.map((product) => {
                    <Card key={product?.id} product={product} />
                })}</div>
            </section>
        )
    }