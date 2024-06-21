import React from 'react'
import { motion } from 'framer-motion'

import { click } from '../animations'


const Button = ({ type, name }) => {
    return (
        <motion.button
            {...click}
            type={type}
            className='px-4 py-1 bg-buttonColor text-textColor border-2 border-buttonColor font-semibold rounded-md hover:text-buttonColor hover:bg-transparent'
        >
            {name}
        </motion.button>
    )
}

export default Button