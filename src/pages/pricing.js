import React from "react";
import Layout from "../components/layout";

export default function Pricing() {
    return (
        <Layout>
            <h2 className="text-center mb-4">Pricing Plans</h2>
            <ul>
                <li>Free Plan - $0</li>
                <li>Pro Plan - $49/month</li>
                <li>Enterprise Plan - Contact Us</li>
            </ul>
        </Layout>
    );
}
