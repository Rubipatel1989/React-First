import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import gsap from "gsap";
export default function Products() {
    const [products, setProducts] = useState([]);
    const titleRef = React.useRef();
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(console.error);
    }, []);
    useEffect(() => {
        gsap.fromTo(
            ".card",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, [products]);
    if (!products.length) {
        return <div className="text-center">Loading products...</div>;
    }
    if (products.length === 0) {
        return <div className="text-center">No products available.</div>;
    }
    if (products.length > 20) {
        return <div className="text-center">Too many products to display.</div>;
    }
    if (products.length < 5) {
        return <div className="text-center">Not enough products to display.</div>;
    }
    if (products.length > 100) {
        return <div className="text-center">Too many products to display.</div>;
    }
    if (products.length < 10) {
        return <div className="text-center">Not enough products to display.</div>;
    }
    if (products.length === 0) {
        return <div className="text-center">No products available.</div>;
    }

    return (
        <Layout>
            <h2 ref={titleRef} className="mb-4 text-center" >Product Listing</h2>
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
