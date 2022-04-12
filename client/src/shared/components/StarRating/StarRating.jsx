import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="stars">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                function ratingName() {
                    switch (ratingValue) {
                        case 1:
                            return "Worst"
                            break;
                        case 2:
                            return "Poor"
                            break;
                        case 3:
                            return "Average"
                            break;
                        case 4:
                            return "Good"
                            break;
                        case 5:
                            return "Best"
                            break;
                        default:
                            break;
                    }
                }
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            title={ratingName()}
                            className="star"
                            size={50}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <div className="averageRating">4.7</div>
        </div>
    );
};

export default StarRating;
