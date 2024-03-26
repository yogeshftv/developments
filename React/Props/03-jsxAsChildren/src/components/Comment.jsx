function Comment(props) {
    
    const { author, timestamp, children } = props;

    return (
        <div className="comment">
            <p><b>{ author }</b> - { timestamp }</p>
            <p>{ children }</p>
        </div>
    )
}

export default Comment;