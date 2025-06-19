"use client"

import Footer from "../../components/footer";;
import { InlineWidget } from "react-calendly";

const Contact = () => {
    return (
        <>
            <InlineWidget
                className="h-[1350px] calendly:h-[700px]"
                url="https://calendly.com/csaba-followthepattern/lets-talk-ai?text_color=0f172a&primary_color=2563eb"
            />
            <Footer />
        </>
    );
};

export default Contact;
