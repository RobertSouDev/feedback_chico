import React from 'react';

const Button = ({ text }) => {
    return (
        <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
            {text}
        </button>
    );
};

export default Button;
