import React from 'react'

const LikeButton = ({ onLike, liked }) => {
        return (
                <div className="like_button">
                        <i 
                                onClick={ onLike } 
                                className={liked ? "fas fa-heart" : "far fa-heart"}
                        >
                        </i>
                </div>
        )
}

export default LikeButton