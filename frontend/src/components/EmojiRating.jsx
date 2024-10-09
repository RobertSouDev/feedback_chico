import React, { useState } from 'react';

const EmojiRating = ({ question, onChange }) => {
    const [rating, setRating] = useState(null);

    const emojis = ['😠', '😐', '😊', '😍']; // Emojis que representam diferentes avaliações

    const handleRating = (index) => {
        setRating(index + 1);
        onChange(index + 1); // Passa o valor selecionado de volta ao pai
    };

    return (
        <div className="my-4">
            <p>{question}</p>
            <div className="flex space-x-4">
                {emojis.map((emoji, index) => (
                    <button
                        key={index}
                        onClick={() => handleRating(index)}
                        className={`text-3xl ${rating === index + 1 ? 'text-yellow-500' : 'text-gray-400'}`}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmojiRating;
