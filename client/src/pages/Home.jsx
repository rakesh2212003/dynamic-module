import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'

import { Button, MultipleInput } from '../components'
import { click } from '../animations'
import { MdAddCircleOutline } from '../assets/icons'

const Home = () => {
    const [inputFields, setInputFields] = useState([{ id: uuidv4(), value: '' }]);

    const handleAddField = () => {
        setInputFields([
            ...inputFields,
            { id: uuidv4(), value: '' }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    console.log(inputFields);

    return (
        <div className='w-screen min-h-screen h-auto flex flex-col justify-center items-center gap-2'>
            <form
                onClick={ handleSubmit }
                className='w-[400px] flex flex-col justify-center items-center'
            >
                <div className='w-full flex flex-col justify-center items-start gap-1'>
                    {inputFields.map(field => (
                        <MultipleInput
                            key={field.id}
                            id={field.id}
                            value={field.value}
                            inputState={inputFields}
                            inputStateFunction={setInputFields}
                        />
                    ))}
                    <motion.button
                        {...click}
                        onClick={handleAddField}
                        className='flex justify-center items-center gap-1 text-buttonColor font-semibold'
                    >
                        <MdAddCircleOutline className='text-2xl'/>
                        Add Field
                    </motion.button>
                </div>
                
                <Button 
                    type={"submit"}
                    name={"Save"}
                />
            </form>
        </div>
    );
};

export default Home;
