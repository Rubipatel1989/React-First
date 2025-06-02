import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
    const titleRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="text-center mt-5">
            <h1 ref={titleRef} className="display-4 text-dark">
                Welcome to About Us Page
            </h1>
        </div>
    );
}
