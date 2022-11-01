import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TeamCart from './TeamCart';


const Team = () => {
    const [teams, setTeams] = useState([]);


    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, []);

    // console.log(teams);

    return (
        <div className='p-2 mt-16 mb-16'>
            <div className='text-center mb-12'>
                <p className="text-2xl font-bold text-orange-600"> Team </p>
                <h1 className='text-5xl font-semibold my-4'>Meet Our Team</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                {
                    teams.map(team => <TeamCart
                        key={team._id}
                        team={team}
                    ></TeamCart>)
                }

            </div>
        </div>

    );
};

export default Team;