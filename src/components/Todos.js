import React,{Component} from 'react';
import Todoitem from './Todoitem';

 class Todos extends Component {
  render() {
    return (
      <div >
        {
           this.props.todos.map((todo) => (
              <Todoitem key={todo.id} 
                        todo={todo} 
                        check={this.props.check} 
                        delete={this.props.delete}
              />
           ))
        }
      </div>
    );
  }
}

export default Todos;