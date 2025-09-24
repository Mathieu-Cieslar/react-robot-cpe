import React, { useEffect, useState } from 'react';
import RobotList from './RobotList';
import { loadRobots } from '../actions';
import { useDispatch } from 'react-redux';

const RobotComponent = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        fetch("https://robot-cpe-2024.cleverapps.io/robots")
            .then((response) => response.json())
            .then((data) => {

                console.log("fetched robots:", data);
            })
            .catch((error) => console.error("Error fetching robots:", error));
    }, []);




    return (
        <div>
            <h2>Robot List</h2>
            <RobotList />
        </div>
    );
};

export default RobotComponent;