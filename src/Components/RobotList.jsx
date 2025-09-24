import React from 'react';
import Robot from './Robot';
import { useSelector } from 'react-redux';
import { selectAllRobots } from '../selector';


const RobotList = () => {
    const robots = useSelector(selectAllRobots);
    return (
        <div>
            {robots.map(robot => (
                <Robot key={robot.id} robot={robot} />
            ))}
        </div>
    );
}

export default RobotList;