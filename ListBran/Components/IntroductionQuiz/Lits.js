import React, {ClassType as props, Component, IntrinsicElements as Styled} from 'react'
import {Form, Checkbox, Label} from 'semantic-ui-react'
import styled from "styled-components";


const MainContainer = styled.div`
table{
    border: 0px solid green;
    border-collapse: collapse;
    text-align:left;
}

td{
  border-left: solid 1px #D2D6C7 ;
  
} 

.td-label{
 border-left: solid 0px blue ;
}

.td-input{
margin-left:11px;
margin-top:7px;
}
.lab-style{
margin : 0px;
font-size :12px;
}


          
}`;


export default class RadioList extends Component {

    render() {
        // if (this.props.children.length > 1) {
        return (
            <MainContainer>
                        <table>
                            <tbody>
                            {this.props.children.map((item) => (
                                <tr>
                                    <td>
                                        <div className="td-input">
                                            <input type="radio" name="meli"/>
                                        </div>
                                    </td>
                                    <td className="td-label">
                                        <Label className="lab-style">
                                            {item.props.children}
                                        </Label>
                                    </td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
            </MainContainer>
        )

    }


}