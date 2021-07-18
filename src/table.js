import React, {Component} from 'react';
import './style.css';
class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: [
                {id: 1, type: 'Italian', fat: 20, carbs: 10, protein: 36},
                {id: 2, type: 'Greek', fat: 18, carbs: 36, protein: 26},
                {id: 3, type: 'Mexican', fat: 12, carbs: 20, protein: 17},
                {id: 4, type: 'Chinese', fat: 36, carbs: 36, protein: 14},



            ]
            
        }
    }
    renderTableData(){
        return this.state.students.map((student, index) =>{
            const{id, type, fat, carbs, protein} = student
            return(
                <tr key = {id}>
                    <td>{id}</td>
                    <td>{type}</td>
                    <td>{fat}</td>
                    <td>{carbs}</td>
                    <td>{protein}</td>
                </tr>
            )
        }
        
        )
    }
    renderTableHeader(){
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        }
        )
    }

    render(){
        return(
            <div>
                <h1 id='title'>Enter your ideal recipe</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }


}

export default Table;

