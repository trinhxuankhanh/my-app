import React, { Component } from 'react';
import TodoItems from './components/TodoItems.js';
import './App.css';
import arrow from './img/bottom.svg'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      todoItems: [
        { title: 'Đi mua bim bim', isComplete: true },
        { title: 'Đi đá bóng', isComplete: true },
        { title: 'Dọn nhà', isComplete: true },
      ]
    }

    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onClickItem(item) {
    return () => {
      const statusComplete = item.isComplete;
      const index = this.state.todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...this.state.todoItems.slice(0, index),
          { ...item, isComplete: !statusComplete },
          ...this.state.todoItems.slice(index + 1),
        ]
      })
    }
  }

  onKeyDown(event) {
    const text = event.target.value.trim()
    if (event.keyCode === 13) {
      if (text === '') {
        alert('Input wrong')
      } else {
        this.setState({
          todoItems: [
            ...this.state.todoItems,
            { title: text, isComplete: false },
          ]
        })

        event.target.value = ''
      }
    }
  }

  render () {
    return (
      <div className="App">
        <div className="Header">
          <img src={arrow} ></img>
          <input type='text' placeholder="Add a to do" onKeyUp={this.onKeyDown}></input>
        </div>
        {
          this.state.todoItems.length > 0 &&
          this.state.todoItems.map((item, index) => <TodoItems clickItem={this.onClickItem(item)} key={index} item={item} />)
        }
        {
          this.state.todoItems.length === 0 &&
          'Nothing here'
        }
      </div>
    )
  }
}

export default App;
