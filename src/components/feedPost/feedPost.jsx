import "./feedPost.css"

export const FeedPost = (props) => {
    return(
        <div className="feedPostContainer">
            <div className="feedPostTitle">
                {props.post.title}
            </div>
            <div className="feedPostDescription">
                {props.post.description}
            </div>
            <div className="footer">
                @{props.post.username}
            </div>
        </div>
    )
}