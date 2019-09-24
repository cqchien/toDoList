import React, {Component} from 'react';
import './App.css';
import ToDo from './components/Todo';
import listIcon from './img/list.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      TodoItems : [
        {
          title: 'Go Shopping',
          isCompleted: false,
        },
        {
          title: 'Go Camping',
          isCompleted: true,
        },
        {
          title: 'Go home',
          isCompleted: true,
        }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this) // Set 'this' for function.
    this.onChange = this.onChange.bind(this) 
  }

  // Handling event when the item is chosen.
  onClickItem(item){
    return (() =>{
        const isComplete = item.isCompleted;
        const index = this.state.TodoItems.indexOf(item);
        this.setState({
          TodoItems: [
            ...this.state.TodoItems.slice(0, index),
            {
              ...item,
              isCompleted: !isComplete,
            },
            ...this.state.TodoItems.slice(index + 1),
          ]
        })
      }
    )
  }

  // Handling envent when the custumer input the item.
  onKeyUp(event){
    if(event.keyCode === 13) // Check Enter Key.
    {
      let textValue = event.target.value;
      textValue.trim(); // Remove whitespaces at both ends if indicated
      if(!textValue){
        return;
      };
      this.setState ({
        newItem: '',
        TodoItems: [
          {
            title: textValue,
            isCompleted: false,
          },
          ...this.state.TodoItems,
        ]
      });
    }
  }

  onChange(event){ // Set data when the customer input
    this.setState({
      newItem: event.target.value,
    });
  }

  render(){
    let {TodoItems, newItem} = this.state;
    return (
      <div className = "container">
        <h1>todo</h1> 
        <div className = "App"> 
          <div className = "header">
            <img src = {listIcon} width = {40} height = {40} ></img>
            <input 
              type = "text" 
              placeholder = "Add to new work." 
              value = {newItem}
              onChange = {this.onChange}
              onKeyUp = {this.onKeyUp}>
            </input>
          </div>

          {
            TodoItems.map((item, index) =>{
              return <ToDo 
              key ={index} 
              item = {item} 
              onClickItem = {this.onClickItem(item)}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
