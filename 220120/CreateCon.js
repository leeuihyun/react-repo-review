import React from "react"

class CreateCon extends React.Component{
    render(){
        return(
            <div>
                <h1>Create</h1>
                <form method = "post" action = "/create_process" onSubmit = {function(e){
                    e.preventDefault();
                    this.props.onCreate(e.target.title.value, e.target.desc.value);
                }.bind(this)}>
                    <p><input type="text" name = "title" placeholder = "title"/></p>
                    <p><textarea name="desc" placeholder = "description" ></textarea></p>
                    <p><input type="submit" value = "Create"/></p>
                </form>
            </div>
        )
    }
}

export default CreateCon;