import React,{Component} from 'react';
import {Link} from 'react-router-dom';

 class Header extends Component {

state = {
  title: ' '
}

input = (e) => (
  this.setState({[e.target.name]: e.target.value})
)

submit = (e) => {
  e.preventDefault();
  this.props.addtodo(this.state.title);
  this.setState({title: ' '})

}
 
  render() {
    return (
      <div>
        <h1 className="header">TodoList</h1>
        <Link to="/" className="home">Home</Link>|
        <Link to="/about" className="abt">About</Link>
        <form onSubmit={this.submit}>
            <input type="text" 
                   placeholder="todos...."
                   style={{ width: '90%', height: '20px'}}
                   name="title"
                   value={this.state.title}
                   onChange={this.input}
            />
            <button 
                   className="button"
            >
            submit</button>
        </form>
      </div>
    );
  }
}

export default Header;