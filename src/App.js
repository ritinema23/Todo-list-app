import React,{Component} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import About from './components/About';
//import uuid from 'uuid';
import axios from 'axios';

 class App extends Component {

  state = {
   todos : []
  }

componentDidMount = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then((res) => (this.setState({todos: res.data})))
}

check = (id) => {
  this.setState({todos: this.state.todos.map((todo) => {
    if(todo.id===id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
} 

delete = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter((todo) => (
                  todo.id !== id
                )) ] }))
} 

addtodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos' ,
                {title:title,
                completed:false}
            )
    .then(res => this.setState({todos: [...this.state.todos
                               , res.data]}))
}

  render() {
    return (
      <BrowserRouter>
        <div >
          <Header addtodo={this.addtodo}/>
          
          <Route exact path="/" render={(props)=>(
            <React.Fragment>
                <Todos todos={this.state.todos} 
                       check={this.check}
                       delete={this.delete}
                />
            </React.Fragment>
          )} />
  
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// {
//   id: uuid.v4(),
//   title: 'take out trash',
//   completed: true
// },
// {
//   id: uuid.v4(),
//   task: 'dinner with wife',
//   completed: false
// },
// {
//   id: uuid.v4(),
//   task: 'meeting with boss',
//   completed: false
// }