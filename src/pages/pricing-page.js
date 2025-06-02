import React from "react";
import Layout from "../components/layout";
import gsap from "gsap";
export default function Pricing() {
    const pricingPlans = [
        { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },    
        { name: "Pro", price: "$20/month", features: ["Feature 1", "Feature 2", "Feature 3"] },
        { name: "Enterprise", price: "$30/month", features: ["All Features"] }
    ];
    const titleRef = React.useRef();
    React.useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);
    React.useEffect(() => {
        gsap.fromTo(
            ".card",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);
    return (
        <Layout>
            <h2 ref={titleRef} className="text-center mb-4">Pricing Plans</h2>
            <div className="row">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{plan.name}</h5>
                                <p className="card-text">{plan.price}</p>
                                <ul>
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
