import React from "react"

class UpdateCon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.data.title,
            desc : this.props.data.desc,
            id : this.props.data.id
        }
    }
    inputHolder(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Update</h1>
                <form action="/update_process" method= "post" onSubmit = {function(e){
                    e.preventDefault();
                    this.props.onUpdate(
                        this.state.title,
                        this.state.desc,
                        this.state.id
                    )            
                }.bind(this)}>
                    <p><input type="hidden" name = "id" value = {this.state.id}/></p>
                    <p><input type="text" placeholder = "title" name ="title" value = {this.state.title} onChange = {
                        this.inputHolder.bind(this)
                    }/></p>
                    <p><textarea name="desc" placeholder = {this.state.desc} value = {this.state.desc} onChange = {
                        this.inputHolder.bind(this)
                    }></textarea></p>
                    <p><input type="submit" value = "update"/></p>
                </form>
            </div>
        )
    }
}

export default UpdateCon;