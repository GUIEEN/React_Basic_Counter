import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    imgUrl: 'https://picsum.photos/200', // generate 200x200 random img
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 50, // => 10px
    fontWeight: 'bold'
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imgUrl} alt="" />
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>

        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count || 'Zero';
  }
}

export default Counter;
