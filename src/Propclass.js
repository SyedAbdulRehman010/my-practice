import React, {Component} from "react";

export class Students extends Component
{
 render(){
        return(
           <>
           <h1>Student Name: {this.props.name}</h1>
           <h1>Student class: {this.props.class}</h1>

           </>

        )



 }


}