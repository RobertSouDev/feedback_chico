import React from 'react';

const Button = ({ text }) => {
    return (
        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-green-400">
            {text}
        </button>
    );
};

export default Button;
