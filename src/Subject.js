import React from 'react'

class Subject extends React.Component{
    render(){
        return(
            <header>
                <h1><a href="/" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangeMode('welcome');   
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.desc}
            </header>
        )
    }
}

export default Subject;
