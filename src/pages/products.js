import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(console.error);
    }, []);

    return (
        <Layout>
            <h2 className="mb-4">Product Listing</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} style={{ height: 200, objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
