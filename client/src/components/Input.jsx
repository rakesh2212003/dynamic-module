import React from 'react';

const Input = ({ type,inputState,inputStateFunction }) => {

    const handleChange = (e) => {
        inputStateFunction(e.target.value);
    }

    return (
        <div className=''>
            <input
                type={type}
                value={inputState}
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
