import React from 'react';
import "../css/webpageDetails.css";

const WebpageDetails = ({ page }) => {
    if (!page) {
        return <em style={{ color: "red" }} className="webpage-details">&#10237; Select a website you want to check...</em>;
    }
    return (
        <div className="webpage-details">
            <h2>Webpage Details</h2>
            <p><strong>URL:</strong> {page.url}</p>
            <p>Status :
                <span style={{ color: page.status === "pending" ? "red" : "green" }}> {page.status}</span>
            </p>
            {page.status === 'scraped' && (
                <div>
                    <span><strong>Data:</strong></span>
                    <ul style={{ listStyle: "none" }}>
                        {page.data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WebpageDetails;