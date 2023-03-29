import React, { Component } from 'react'
import './App.css';

export class Main_class extends Component {
  state = {
    person: [
      {name: 'Lita', age: 25, hobbies: 'Reading'},
      {name: 'Albeau', age: 26, hobbies: 'Coding'}
    ]
  }
  render() {
    return (
      <div>
        <h1 className='class-component'>Class Component</h1>
        <h2>{this.state.person[0].name}</h2>
        <h2>{this.state.person[0].age}</h2>
        <h2>{this.state.person[0].hobbies}</h2>
        <h2>{this.state.person[1].name}</h2>
        <h2>{this.state.person[1].age}</h2>
        <h2>{this.state.person[1].hobbies}</h2>
      </div>
    )
  }
}

export default Main_class