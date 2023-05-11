import React, { useState } from 'react'
 
const LikeButton = ({likes, isLiked}) => {

    const [likeCount, setLikeCount] = useState(likes);
    const [likeActive, setLikeActive] = useState(isLiked)

    function decr(likeCount) {
        if (likeCount > 0) {
            setLikeCount(likeCount - 1)
        }
        else { likeCount = 0 }
    }

    function likePressed() {
        if (likeActive) {
            setLikeActive(false)
            decr(likeCount)
        } else {
            setLikeActive(true)
            setLikeCount(likeCount + 1)

        }
    }


    return (
        <div className="like">
            <span className={`likeButton ${likeActive ? 'liked' : ''}`} src="/src/like.svg" alt="" onClick={() => likePressed()} />
            <p className="likes">{likeCount}</p>
        </div>
    )
}

export default LikeButton