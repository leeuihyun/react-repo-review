import React from 'react'

class Control extends React.Component{
    render(){
        var lists = [];
        lists.push(
            <li key = "1"><a href="/controls" onClick = {function(e){
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>Create</a></li>
        )
        lists.push(
            <li key ="2"><a href="/controls" onClick = {function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>Update</a></li>
        )
        lists.push(
            <li key = "3"><input type="button" value = "delete"/></li>
        )
        return(
            <article>
                {lists}
            </article>
        )
    }
}

export default Control;