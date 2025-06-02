import React from "react";
import Layout from "../components/layout";
import gsap from "gsap";    
export default function Pricing() {
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
            "ul",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);
    React.useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);
    React.useEffect(() => {
        gsap.fromTo(
            "p",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    React.useEffect(() => {
        gsap.fromTo(
            "h3",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);
    return (
        <Layout>
            <h2 ref={titleRef} className="text-center mb-4">About Us</h2>
            
            <p>
                We are a team of developers who are passionate about creating
                great products.
            </p>
            <p>
                Our mission is to provide high-quality software solutions that
                help businesses succeed.
            </p>
            <p>
                If you have any questions or would like to learn more about our
                products, please feel free to contact us.
            </p>
            <p>
                You can reach us at <a href="mailto:pawank@exeire.com">pawank@exeire.com</a>
            </p>
            <p>
                We look forward to working with you!
            </p>
            <h3 className="text-center mt-5">Our Team</h3>
            <ul className="list-unstyled">
                <li>John Doe - CEO</li>
                <li>Jane Smith - CTO</li>
                <li>Emily Johnson - Lead Developer</li>
            </ul>
            <h3 className="text-center mt-5">Our Values</h3>
            <p>
                We believe in transparency, collaboration, and continuous improvement.
            </p>
            <p>
                Our team is dedicated to delivering the best possible experience for our customers.
            </p>

        </Layout>
    );
}
