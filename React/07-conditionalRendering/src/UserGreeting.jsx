export default function UserGreeting(props) {
    return (
        <>
            {props.isLoggedIn ? <h2>Welcome {props.username}</h2>:<h2>Login to proceed</h2>}
        </>
    )
}