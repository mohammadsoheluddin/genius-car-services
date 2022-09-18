import React from 'react';
import sleeping from '../../../Images/2488754-ai.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={sleeping} alt="NotFound" />
        </div>
    );
};

export default NotFound;