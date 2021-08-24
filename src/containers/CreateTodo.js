import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTodo} from '../actions/actionCreator';
class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            todotext:''
        }
        this.onChangeTodo=this.onChangeTodo.bind(this);
    }
    onChangeTodo(e){
     this.setState({
         todotext:e.target.value
     })
    }
    render() {
        return (
            <div className="form-group row">
            <div className="col-sm-10">
                <input type='text' onChange={this.onChangeTodo} className="form-control" value={this.state.todotext} placeholder='ADD YOUR TASK'/>
                <button type='button' onClick={()=>this.setState({todotext:''})}  style={{marginTop:'25px',marginRight:'15px'}} className='btn btn-danger'>CANCLE</button>
                <button type='button' onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } } style={{marginTop:'25px'}}  className='btn btn-success'>ADD ME</button>
            </div>
                
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)
