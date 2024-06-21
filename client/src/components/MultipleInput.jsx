import React from 'react';
import { motion } from 'framer-motion'

import { MdDelete } from '../assets/icons'
import { click } from '../animations'

const MultipleInput = ({ id, value, inputState, inputStateFunction }) => {

    const handleInputChange = (id, e) => {
        const newInputFields = inputState.map(field => {
            if (field.id === id) {
                field.value = e.target.value;
            }
            return field;
        });
        inputStateFunction(newInputFields);
    };

    const handleRemoveField = (id) => {
        if (inputState.length > 1) {
            inputStateFunction(inputState.filter(field => field.id !== id));
        }
    };

    return (
        <div className='w-full flex justify-between items-center gap-2'>
            <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(id, e)}
                className='w-full border border-gray-400 p-2 rounded-md font-medium'
            />
            <motion.button
                {...click}
                type="button"
                onClick={() => handleRemoveField(id)}
                className=''
            >
                {inputState.length > 1 && (
                    <MdDelete className='text-red-600 text-2xl' />
                )}
            </motion.button>

        </div>
    );
};

export default MultipleInput