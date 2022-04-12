import React from 'react'
import './review.css'

const Review = () => {
    return (
        <div className="reviewContainer">
            <p>Comment</p>
            <textarea name="comment" id="1" rows="5" cols="50" />
        </div>
    )
}

export default Review