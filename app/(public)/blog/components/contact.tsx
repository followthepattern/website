import React from 'react';

const Contact = () => {
    const handleBooking = () => {
        window.open('https://calendly.com/your-calendly-link/30min', '_blank');
    };

    return (
        <div className="text-center p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let{"'"}s Connect!</h2>
            <p className="text-gray-600 mb-6">
                Have questions or want to discuss your ideas? Book a free 30-minute call with us and let{"'"}s chat!
            </p>
            <button
                // onClick={handleBooking}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Book a Free Call
            </button>
        </div>
    );
};

export default Contact;
