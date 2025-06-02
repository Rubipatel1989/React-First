import React, { useEffect, useRef } from "react";
import Layout from "../components/layout";
import gsap from "gsap";

export default function Home() {
    const titleRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <Layout>
            <h1 ref={titleRef} className="display-4 text-center">
                Welcome to My Gatsby Site
            </h1>
        </Layout>
    );
}
