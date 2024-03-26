
// function Avatar(props) {
//     return (
//         <div className="card">
//             <h1>{props.user}</h1>
//             <h2>{props.location}</h2>
//             <h3>{props.age}</h3>
//             <h4>{props.isActive.toString()}</h4>
//         </div>
//     )
// }

//* 1. You always don’t need the whole props object itself, you can destructure it into individual props:

function Avatar({ user, location, age, isActive, defaultValueForProp = "I'm a default prop" }) {

    return (
        <div className="card">
            <h1>{ user }</h1>
            <h2>{ location }</h2>
            <h3>{ age }</h3>
            <h4>{ isActive.toString() }</h4>
            <h5>{ defaultValueForProp }</h5>
        </div>
    )
}

//* 2. You can also give default value to prop, this allows them to fall back on it when no value is specified. Inorder to give the default value to prop you have to first destructure the prop object and then specify the default value using the assignment operator right after the parameter.  

export default Avatar;