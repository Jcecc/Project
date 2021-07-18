import React from 'react';
import axios from 'axios';

  
//Functional component
class App extends React.Component{
  
  state = {
    details : [],
    type :"",
    fats:"",
    carbs:"",
    proteins:"",

  };

  componentDidMount(){
    let data ;
   
    axios
    .get('http://localhost:8000/wel/')
    .then((res) => {
      data = res.data;
      this.setState({
        details : data
      });
    })
    .catch(err => {})
  }

  renderSwitch = (param) => {
    switch(param + 1){
      case 1:
        return "primary";
      case 2:
        return "secondary";
      case 3:
        return "success";
      case 4:
        return "danger";
      case 5:
        return "warning";
      case 6:
        return "info";
      default:
        return "yellow";
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/wel/",{
      name: this.state.type,
      detail: this.state.carbs,
      detail1: this.state.fats,
      detail2: this.state.proteins,
    })
    .then((res) =>{
      this.setState({
        type: "",
        carbs: "",
        proteins: "",
        fats: "",
      });
    })
    .catch((err) =>{});
  };





  render() {
    return (
        <div className="container jumbotron ">
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"
                              id="basic-addon1">
                            {" "}
                            Type{" "}
                        </span>
                    </div>
                    <input type="text" className="form-control" 
                           placeholder="Enter type of recipe you want to make"
                           aria-label="type"
                           aria-describedby="basic-addon1"
                           value={this.state.type} name="type"
                           onChange={this.handleInput} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                           Fats
                        </span>
                    </div>
                    <textarea className="form-control " 
                              aria-label="With textarea"
                              placeholder="Enter how many grams of fat you want" 
                              value={this.state.fats} name="fats" 
                              onChange={this.handleInput}>
                    </textarea>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                           Protein
                        </span>
                    </div>
                    <textarea className="form-control " 
                              aria-label="With textarea"
                              placeholder="Enter how many grams of protein you want" 
                              value={this.state.proteins} name="proteins" 
                              onChange={this.handleInput}>
                    </textarea>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                           Carbs
                        </span>
                    </div>
                    <textarea className="form-control " 
                              aria-label="With textarea"
                              placeholder="Enter how many grams of carbs you want" 
                              value={this.state.carbs} name="carbs" 
                              onChange={this.handleInput}>
                    </textarea>
                </div>

                <button type="submit" className="btn btn-primary mb-5">
                    Submit
                </button>
            </form>

            <hr
                style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000",
                }}
            />

            {this.state.details.map((detail, id) => (
                <div key={id}>
                    <div className="card shadow-lg">
                        <div className={"bg-" + this.renderSwitch(id % 6) + 
                                      " card-header"}>Type {id + 1}</div>
                        <div className="card-body">
                            <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                               " blockquote mb-0"}>
                                <h1> {detail.detail} </h1>
                                <footer className="blockquote-footer">
                                    {" "}
                                    <cite title="Source Title">{detail.name}</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <span className="border border-primary "></span>
                </div>
            ))}
        </div>
    );
}
}


export default App;