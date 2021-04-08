import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUniqueCompleted } from './completedTasksSlice';
import './completedTasks.css';

export function TaskCompletedResponse() {
    const completedSoFar = useSelector(selectUniqueCompleted);
    const [currentClass, setCurrentClass] = useState('not-displayed');
    const displayRef = useRef(false);

    const response = () => {
        const random = Math.random() < 0.5;
        switch (completedSoFar) {
            case 1:
                return random ? "One small step! Keep it up" : "Not bad!";
            case 2:
                return random ? "Nice work!" : "Awesome!";
            case 3:
                return random ? "Another one?! Well, look at you!" : "Look who's being productive!";
            case 4:
                return random ? "You're on a roll!" : "Keep it up!";
            case 5:
                return random ? "You're getting a lot done!" : "Well done!";
            case 6:
                return random ? "Great work!" : "Impressive!";
            case 7:
                return random ? "Excellent!" : "You're accomplishing a lot!";
            case 8:
                return random ? "Kudos!" : "Superb!";
            default:
                return random ? "Nicely done!" : "Great job!";
        }
    };

    useEffect(() => {
        if (completedSoFar > 0 && displayRef.current === false) {
            displayRef.current = true;
            setCurrentClass('displayed');
            setTimeout(() => {
                displayRef.current = false;
                setCurrentClass('not-displayed');
            }, 3000);
        }
    }, [completedSoFar]);

    return <p className={currentClass} id="task-completed-response">{response()}</p>;
}