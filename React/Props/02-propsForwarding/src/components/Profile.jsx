import Avatar from './Avatar'

function Profile(props) {
    const userInfo = props;

    //* 1. As you can see below, passing the props through multiple levels of nested components can be very repetitive and error prone, also it is difficult to manage and work with.

    //* 2. In such scenario using spread syntax would be more concise way to do so. Also since this component is not using any of the props directly it make more sense to use spread syntax to forward the props.
    
    return (
        <div className="card">
            {/* <Avatar 
                user={userInfo.user}
                location={userInfo.location}
                age={userInfo.age}
                isActive={userInfo.isActive}
            /> */}

            <Avatar {...props} />
        </div>
    )
    
    //* 3. The above approach forwards all the props to the next component without explicitly listing each of their names.
}

export default Profile;