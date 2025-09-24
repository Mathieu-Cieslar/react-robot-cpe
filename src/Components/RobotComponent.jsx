import React, { useEffect, useState } from 'react';
import RobotList from './RobotList';

const RobotComponent = () => {
    const [robots, setRobots] = useState([]);


    useEffect(() => {
        fetch("https://robot-cpe-2024.cleverapps.io/robots")
            .then((response) => response.json())
            .then((data) => setRobots(data))
            .catch((error) => console.error("Error fetching robots:", error));
    }, []);

    console.log(robots);


    return (
        <div>
            <h2>Robot List</h2>
            <RobotList robots={robots} />
        </div>
    );
};

export default RobotComponent;