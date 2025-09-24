import React, { useEffect, useState } from 'react';
import Label from './Label';
import '../App.css';
import RobotParts from './RobotParts';
import PartDetail from './PartDetail';

const Robot = ({ robot }) => {


    const [listPartsDetails, setListPartsDetails] = useState([]);
    const [idSelectedPart, setIdSelectedPart] = useState(null);
    const [isDisplayParts, setIsDisplayParts] = useState(false);
    const [isDisplayDetailParts, setIsDisplayDetailParts] = useState(false);

    const toggleDetailParts = (id) => {

        if (id === idSelectedPart) {
            setIsDisplayDetailParts(!isDisplayDetailParts);
            return;
        }
        setIdSelectedPart(id);

    }

    useEffect(() => {
        const url = "https://robot-cpe-2024.cleverapps.io/parts?" + robot.parts.map(part => `id=${part}`).join('&');
        fetch(url)
            .then((response) => response.json())
            .then((data) => setListPartsDetails(data))
            .catch((error) => console.error("Error fetching robots:", error));
    }, []);



    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div
                className="robot-card"
                onClick={() => setIsDisplayParts(!isDisplayParts)}
                style={{ marginRight: '20px' }}
            >
                <h1>Robot description</h1>
                <Label text={robot.title} />
                <p><strong>ID:</strong> {robot.id}</p>
                <p> Description : {robot.description}</p>
                {robot.visual_type === 'video' && robot.visual_src ? (
                    <object data={robot.visual_src} width="320" height="240"></object>
                ) : robot.visual_src ? (
                    <img src={robot.visual_src} alt={`${robot.title} robot`} />
                ) : null}
            </div>

            {isDisplayParts && (
                <div>
                    {listPartsDetails.map(part => (
                        <RobotParts key={part.id} partsDetails={part} toggleDetailParts={toggleDetailParts} />
                    ))}
                </div>
            )}

            {isDisplayDetailParts && (
                <div>
                    <PartDetail part={listPartsDetails.find(part => part.id === idSelectedPart)} />
                </div>
            )}
        </div>
    );
}


export default Robot;