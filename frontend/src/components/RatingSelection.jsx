import React, { useState } from 'react';

const RatingSelection = ({ question, onChange }) => {
    const [rating, setRating] = useState(null);

    const handleRating = (e, value) => {
        e.preventDefault();  // Evita o comportamento padrão de submissão
        setRating(value);
        onChange(value); // Passa o valor selecionado de volta ao pai
    };

    // Array de emojis com os valores associados
    const emojis = [
        { emoji: '😠', value: 1 },
        { emoji: '😏', value: 2 },
        { emoji: '😐', value: 3 },
        { emoji: '🙂', value: 4 },
        { emoji: '😍', value: 5 },
    ];

    return (
        <div className="my-4">
            <p>{question}</p>
            <div className="flex space-x-2">
                {emojis.map((item) => (
                    <button
                        key={item.value}
                        onClick={(e) => handleRating(e, item.value)}
                        className={`text-lg rounded-full m-1 border-2 ${
                            rating === item.value ? 'border-blue-500' : 'border-transparent'
                        } hover:border-blue-500  transition-colors`}
                    >
                        {item.emoji}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RatingSelection;
