import React from 'react';
import "../css/buttons.css"

function Buttons() {

    const handleTestChatbot = () => {
        // Logic for opening the client's website with a dummy chatbot integration
        window.open("/dummyChatbot", "_blank")
    };

    const handleIntegrateWebsite = () => {
        // Logic for integrating on the website
        alert("Integrating on your website...");
    };

    const handleTestIntegration = () => {
        // Logic for testing the integration
        alert("Testing integration...");
    };

    return (
        <div className="button-container">
            <button onClick={handleTestChatbot}>Test chatbot</button>
            
            <button onClick={handleIntegrateWebsite}>Integrate on your website</button>

            <button onClick={handleTestIntegration}>Test integration</button>
        </div>
    );
};

export default Buttons;