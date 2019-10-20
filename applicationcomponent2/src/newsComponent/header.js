import React, {Component} from 'react';
import ('./header.css');

class HeaderNews extends Component{
  constructor(){
   super();
   
   this.state={
     title: 'React app',
     userInput: 'Usr text here'
   }
  }

   

    logoClicked(){
      console.log('clicked')
        
    }
    inputChanges(event){
        console.log(event.target.value);
        this.setState({userInput: event.target.value ? event.target.value: 'Usr text here'});
        }
    render(){
            return (
              <header>
                <div className="logo" onClick={this.logoClicked}>
                  {this.state.title}
                </div>
                <center>
                  <input onChange={this.inputChanges.bind(this)}/>
                  <h4>{this.state.userInput}</h4>
                </center>
                <hr />
              </header>
            );
    }
}

export default HeaderNews;