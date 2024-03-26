import Comment from "./components/Comment"

function App() {
  
  const comments = [
    { author: "John Doe", timestamp: "2024-03-26 12:53", content: "This is a great product!" },
    { author: "Jane Smith", timestamp: "2024-03-26 13:00", content: "I agree, it's very user-friendly." },
  ];

  const commentElement = comments.map((comment, index) => {
    return (
      <Comment key={ index } author={comment.author} timestamp={comment.timestamp} >
        { comment.content }
      </Comment>
    )
  })

  return (
    <div className="app">
      <h2>User Comments</h2>
      { commentElement }
    </div>
  )
}

export default App;

//* 1. It is common to nest built-in browser tags like: "<div> <img /> </div>". Similarly, sometimes you'll want to nest your own components the same way: "<Card> <Avatar /> </Card>".

//* 2. Any content, element or component defined between the opening & closing tags of a component, becomes available inside the children prop of that component.
