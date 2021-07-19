import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
  
class Form extends Component{
  constructor(props){
    super(props)
    this.state = { type:'', fats:'', carbs:'',proteins:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
 
  handleSubmit(event){
    const {type, fats, carbs, proteins } = this.state
    event.preventDefault()
    alert(`
      ____Your Details____\n
      Type : ${type}
      Fats : ${fats}
      Carbs : ${carbs}
      Proteins : ${proteins}
    `)
  }
  
  handleChange(event){
    this.setState({
      
      [event.target.name] : event.target.value
    })
  }
  
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
        </div>
        <div>
          <label htmlFor='type'>Type</label>
          <Input
            label={{ basic: true, content: 'kg' }}
            labelPosition='right'
            placeholder='Type (Ex: Italian, Greek, etc.)'
            value={this.state.type}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='fats'>Fats</label>
          <Input
            label={{ basic: true, content: 'kg' }}
            labelPosition='right'
            placeholder='Fats (in grams)'
            value={this.state.fats}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='carbs'>Carbs</label>
          <input
            name='carbs' 
            placeholder='Carbs (in grams)'
            value={this.state.carbs}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='proteins'>Proteins</label>
          <input
            name='proteins' 
            placeholder='Proteins (in grams)'
            value={this.state.proteins}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Find Recipe</button>
        </div>
      </form>
    )
  }
}
  
export default Form