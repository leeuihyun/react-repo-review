import React from "react"

class ReadCon extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default ReadCon;