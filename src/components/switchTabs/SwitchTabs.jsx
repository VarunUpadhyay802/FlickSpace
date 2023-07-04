import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    // State variables for managing selected tab and left position of moving background
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    // Function called when a tab is clicked
    const activeTab = (tab, index) => {
        // Update the left position to move the background element
        setLeft(index * 100);

        // Wait for 300 milliseconds and then update the selected tab
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);

        // Call the onTabChange function with the selected tab and index
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {/* Map over the data array to render tab items */}
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${selectedTab === index ? "active" : ""}`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                {/* Render the moving background element */}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};

export default SwitchTabs;
