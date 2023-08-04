import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            planet: "earth"
        }
    }

    componentDidMount(){
        console.log("Component Mounted")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log({
            nextProps,
            nextState
        })
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console,log({
            prevProps,
            prevState
        })
        return true;
    }


    componentDidUpdate(){
        console.log(this.state)
    }


    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.username}</h2>
                <h2>{this.props.role}</h2>
            </div>
        )
    }
}

User.defaultProps = {
    name: "Ben",
    username: "benjaminpowell24",
    role: "website user"
}