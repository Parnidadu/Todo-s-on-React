import React ,{Component} from 'react';

class AddTodo extends Component{
    state={
        content:''
    }
    handleChange= (e)=>{
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state)
    }
    
    render(){
        return(
            <div class="row">
            <form class="col s12" onSubmit ={this.handleSubmit}>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="text" class="materialize-textarea" onChange={this.handleChange} placeholder="Add to do"/>
                    <label for="email"></label>
                    <span class="helper-text" data-error="wrong" data-success="right">e.g, Jump from sky. etc</span>
                </div>
            </div>
            </form>
            </div>
        )
    }
}
export default AddTodo