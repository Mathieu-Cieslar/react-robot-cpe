import React, { useEffect, useState } from 'react';
import Label from './Label';
import '../App.css';

const RobotParts = ({ partsDetails, toggleDetailParts }) => {

    console.log(partsDetails);

    return (
        <div className="robot-parts-card">
            {partsDetails ? (
                <>
                    <h1>Part {partsDetails.title ?? "Unknown Part"} description</h1>

                    <div className="part-row">
                        <span className="part-label">ID</span>
                        <span className="part-value">{partsDetails.id ?? "Unknown ID"}</span>
                    </div>

                    <div className="part-row">
                        <span className="part-label">NAME</span>
                        <span className="part-value">{partsDetails.title ?? "Unknown Name"}</span>
                    </div>

                    <div className="part-row">
                        <span className="part-label">PRICE</span>
                        <span className="price-badge" onClick={() => toggleDetailParts(partsDetails.id)}>Price {partsDetails.price ?? "??"}</span>
                    </div>
                </>
            ) : (
                <p className="loading">Loading part details...</p>
            )}
        </div>
    );
}

export default RobotParts;