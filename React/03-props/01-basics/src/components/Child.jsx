export default function Child(props) {

    //* 1. When you provide props from a parent component to a child component in React, the child component can access them via the props object. This props object is defined as a parameter for the child component, and it contains all of the props given from the parent.

    return (
        <div className="child">
            <h1>{ props.name }</h1>
            <h2>{ props.age }</h2>
            <h3>{ props.phone }</h3>
            <h4>{ props.location }</h4>
        </div>
    )
}