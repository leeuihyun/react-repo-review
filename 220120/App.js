import React from 'react'
import Subject from "./components/Subject"
import Middle from "./components/Middle"
import Control from "./components/Control"
import ReadCon from "./components/ReadCon"
import CreateCon from "./components/CreateCon"
import UpdateCon from "./components/UpdateCon"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'welcome',
      selected_id : 0,
      welcome : {title : 'WEB', desc : 'WEB is always used sys'},
      contents : [
        {id : 1, title : "Html", desc : "HTML is amazing..!"},
        {id : 2, title : "Css", desc : "CSS is for design..!"},
        {id : 3, title : "Java Script", desc : "Js is for perfect"}
      ]
    }
  }
  getContent(){
    var _article,_title,_desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadCon title = {_title} desc = {_desc}></ReadCon>
    }
    else if(this.state.mode === 'read'){
      this.state.contents.forEach((item)=>{
        if(item.id === this.state.selected_id){
          _title = item.title;
          _desc = item.desc;
          _article = <ReadCon title = {_title} desc = {_desc}></ReadCon>    
        }
      })
    }
    else if(this.state.mode === 'create'){
      var _contents = Array.from(this.state.contents);
      var max_content_id;
      _contents.forEach((item)=>{
        max_content_id = item.id; 
      })
      _article = <CreateCon onCreate = {function(_title,_desc){
        _contents.push(
          {id : max_content_id+1, title : _title, desc : _desc}
        )
        this.setState({
          mode : 'read',
          contents : _contents
        })
      }.bind(this)}></CreateCon>
    }
    else if(this.state.mode === 'update'){
      var _data;
      this.state.contents.forEach((item)=>{
        if(item.id === this.state.selected_id){
          _data = item;
        }
      })
      _article = <UpdateCon data = {_data} onUpdate = {function(_title,_desc,_id){
        var _contents = Array.from(this.state.contents);
        _contents.forEach((item)=>{
          if(item.id === _id){
            item.title = _title;
            item.desc = _desc;
          }
        })
        this.setState({
          mode : 'read',
          contents : _contents
        })
      }.bind(this)}></UpdateCon>
    }
    return _article;
  }
  render(){
    return(
      <div className="App">
        <Subject title = {this.state.welcome.title} desc = {this.state.welcome.desc}onChangeMode = {function(_mode){
          this.setState({
            mode : _mode
          })
        }.bind(this)}></Subject>
        <Middle data = {this.state.contents} onChangeMode = {function(_id){
             this.setState({
               selected_id : Number(_id),
               mode : 'read'
             })
        }.bind(this)}></Middle>
        <br />
        <Control onChangeMode = {function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('Really Delete?')){
              var _contents = this.state.contents.filter(function(data){
                return data.id!==this.state.selected_id;
              }.bind(this));
              this.setState({
                mode : 'welcome',
                contents : _contents
              });
              alert('Deleted');
            }
          }
          else{
            this.setState({
              mode : _mode
            })
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    )
  }
}



export default App;
