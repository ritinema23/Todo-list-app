import React,{Component} from 'react';

 class Todoitem extends Component {

getstyle = () => {
  return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px black solid',
      textDecoration :
      this.props.todo.completed ? 'line-through' :'none'
  }
}

  render() {
    return (
      <div style={this.getstyle()}>

        <input type="checkbox" 
               onChange=
               {this.props.check.bind(this, this.props.todo.id)}
        />
         {' '} {this.props.todo.title}

        <button style={btn} 
                onClick=
               {this.props.delete.bind(this,this.props.todo.id)} 
        >
        x</button>

      </div>
    ); 
  }
}

const btn = {
    backgroundColor: 'red',
    borderRadius: '50%',
    height: '20px',
    width: '20px',
    color: 'white',
    float: 'right',
}


export default Todoitem;
