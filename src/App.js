import React from 'react';
import axios from 'axios';
import Form from './Form/form';
import DetailsTable from './Table/detailsTable';

//Functional component
class App extends React.Component{
  state = {
    details: [],
    type: '',
    fats: '',
    carbs: '',
    proteins: ''
  };
  componentDidMount(){
    let data;
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
  render() {
    return (
        <div style={{ margin: '25px', display: 'flex', flexDirection: 'row' }} className="container jumbotron ">
          <Form />
          <DetailsTable parentProps={{ details: this.state.details }} />
        </div>
    );
  }
}

export default App;
