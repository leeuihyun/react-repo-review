import React from 'react'

class Middle extends React.Component{
    
    render(){
        var lists = [];
        var data = this.props.data;
        data.forEach((item)=>{
            lists.push(
                <li key = {item.id}>
                    <a href={"/contents" + item.id} 
                        data-id = {item.id} 
                        onClick = {function(e){    
                            e.preventDefault();
                            this.props.onChangeMode(e.target.dataset.id);
                        }.bind(this)}>{item.title}</a></li>
            )
        })

        return(
            <nav>
                {lists}
            </nav>
        )
    }
}

export default Middle;
