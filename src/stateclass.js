import React,{Component} from 'react';

class StateApp extends Component{

state4 = {name: "studnet001", rollno: '009', age: this.props.age}

render(){
         return (
                <>
                <h1>Student from State Class : {this.state4.name} and age is {this.state4.age}</h1>
                </>


         )

}

}

export default StateApp;