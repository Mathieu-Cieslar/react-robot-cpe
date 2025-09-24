import React from 'react';
import Robot from './Robot';


const RobotList = ({ robots }) => {
    console.log("robots", robots);

    return (
        <div>
            {robots.map(robot => (
                <Robot key={robot.id} robot={robot} />
            ))}
        </div>
    );
}

export default RobotList;