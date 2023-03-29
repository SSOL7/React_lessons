import React, { Component } from 'react'
import './App.css';

export class Main_class extends Component {
  state = {
    person: [
      {name: 'Lita', age: 25, hobbies: 'Reading'},
      {name: 'Albeau', age: 26, hobbies: 'Coding'}
    ],
    friends: [
      {name: 'Lita', age: 25, hobbies: 'Reading', key: 1},
      {name: 'Albeau', age: 26, hobbies: 'Coding', key: 2},
      {name: 'Taming', age: 25, hobbies: 'Racing', key: 3},
    ]
  }

  event = () => {
    this.setState({
      friends: [
        {name: 'Siwon', age: 25, hobbies: 'Racing', key: 4},
      ]
    })
  }

  render() {
    const render_friends = () => {
      return this.state.friends.map((friend) => {
        return (
          <div key={friend.name}>
            <h2>{friend.name}</h2>
            <h2>{friend.age}</h2>
            <h2>{friend.hobbies}</h2>
          </div>
        )
      })
    }

    return (
      <div className='class-component'>
        <h1 className='class-component'>Class Component</h1>
        <h1>Single render</h1>
        <h2>{this.state.person[0].name}</h2>
        <h2>{this.state.person[0].age}</h2>
        <h2>{this.state.person[0].hobbies}</h2>
        <h2>{this.state.person[1].name}</h2>
        <h2>{this.state.person[1].age}</h2>
        <h2>{this.state.person[1].hobbies}</h2>

        <h1>Array of friends with map</h1>
        {render_friends()}

        <button onClick={this.event}>Click for more</button>
      </div>
    )
  }
}

export default Main_class