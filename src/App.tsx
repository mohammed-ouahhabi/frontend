// src/App.tsx
import React, { useEffect, useState } from 'react';
import { getRides } from './api';

interface Ride {
    id: number;
    distance: number;
    startTime: string;
    duration: number;
    price: number;
}

const App: React.FC = () => {
    const [rides, setRides] = useState<Ride[]>([]);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await getRides();
                setRides(response.data);
            } catch (error) {
                console.error("Failed to fetch rides", error);
            }
        };

        fetchRides();
    }, []);

    return (
        <div>
            <h1>Liste des Courses</h1>
            <ul>
                {rides.map(ride => (
                    <li key={ride.id}>
                        Course ID: {ride.id}, Distance: {ride.distance} miles, Prix: {ride.price} EUR
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
