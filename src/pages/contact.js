import React from "react";
import Layout from "../components/layout";

export default function Contact() {
    return (
        <Layout>
            <h2 className="text-center mb-4">Contact Us</h2>
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" className="form-control" type="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-control" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </Layout>
    );
}
