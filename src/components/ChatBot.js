import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebpageList from '../pages/WebpageList';
import WebpageDetails from './WebpageDetails';
import '../css/chatBot.css';

function Chatbot() {
    const [companyName, setCompanyName] = useState('');
    const [companyURL, setCompanyURL] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [selectedPage, setSelectedPage] = useState(null);
    const navigate = useNavigate();

    const handleTestChatbot = () => {
        // Logic to test the chatbot
        console.log("Training chatbot...");
        navigate('/buttons');
    };

    const handleURLChange = (e) => {
        setCompanyURL(e.target.value);
    };

    return (
        <div className="chatbot-mainPage">
            <div className="chatbot-container">
                <h2>Setup Organisation</h2>
                <div className="chatbot-window">
                    <input
                        type="text"
                        name="cName"
                        placeholder="Company's name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="cURL"
                        placeholder="Company's website URL"
                        value={companyURL}
                        onChange={handleURLChange}
                        required
                    />
                    <textarea
                        name="cDescription"
                        placeholder="Company's description"
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                        required
                        cols={22}
                        rows={1}
                    />
                    <button className='btn btn-warning m-2 p-2' type="submit" onClick={handleTestChatbot}>Train ChatBot</button>
                </div>
            </div>
            <div className="webpage-container">
                <WebpageList onSelect={setSelectedPage} />
            </div>
            <WebpageDetails page={selectedPage} />
        </div>
    );
};

export default Chatbot;