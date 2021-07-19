import React from 'react';
// import axios from 'axios';
import { Input, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Form extends React.Component{
    state = {
      details : [],
      type :"",
      fats:"",
      carbs:"",
      proteins:"",
  
    };
    render() {
        const handleInput = (e) => {
          this.setState({
            [e.target.name]: e.target.value,
          });
        };
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   axios
        //   .post("http://localhost:8000/wel/",{
        //     name: this.state.type,
        //     detail: this.state.carbs,
        //     detail1: this.state.fats,
        //     detail2: this.state.proteins,
        //   })
        //   .then((res) =>{
        //     this.setState({
        //       type: "",
        //       carbs: "",
        //       proteins: "",
        //       fats: "",
        //     });
        //   })
        //   .catch((err) =>{});
        // };
        return (
            <form
                style={{ width: '40vw', paddingTop: '25px', marginLeft: '5vh', marginRight: '5vw', border: '1px solid lightgray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onSubmit={this.handleSubmit}
            >
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"
                              id="basic-addon1">
                            {" "}
                            Type{" "}
                        </span>
                    </div>
                    <Input
                      placeholder='Type (Ex: Italian, Greek, etc.)'
                      value={this.state.type}
                      onChange={handleInput}
                      style={{ width: '25vw', margin: '15px' }}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                           Fats
                        </span>
                    </div>
                    <Input
                      label={{ basic: true, content: 'g' }}
                      labelPosition='right'
                      placeholder='Desired fat content'
                      value={this.state.fats}
                      onChange={handleInput}
                      style={{ width: '25vw', margin: '15px' }}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                           Protein
                        </span>
                    </div>
                    <Input
                      label={{ basic: true, content: 'g' }}
                      labelPosition='right'
                      placeholder='Desired protein content'
                      value={this.state.proteins}
                      onChange={handleInput}
                      style={{ width: '25vw', margin: '15px' }}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                           Carbs
                        </span>
                    </div>
                    <Input
                      label={{ basic: true, content: 'g' }}
                      labelPosition='right'
                      placeholder='Desired carb content'
                      value={this.state.carbs}
                      onChange={handleInput}
                      style={{ width: '25vw', margin: '15px' }}
                    />
                </div>
                <Button primary style={{ margin: '15px' }}>Submit</Button>
            </form>
        )
    }
}

export default Form;
