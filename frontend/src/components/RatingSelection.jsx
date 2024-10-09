import React, { useState } from 'react';

const RatingSelection = ({ question, onChange }) => {
    const [rating, setRating] = useState(null);

    const handleRating = (e, value) => {
        e.preventDefault();  // Evita o comportamento padrão de submissão
        setRating(value);
        onChange(value); // Passa o valor selecionado de volta ao pai
    };

    return (
        <div className="my-4">
            <p>{question}</p>
            <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        onClick={(e) => handleRating(e, num)}
                        className={`text-xl px-4 py-2 ${rating === num ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RatingSelection;
