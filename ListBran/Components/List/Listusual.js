import React, {ClassType as props, Component, IntrinsicElements as Styled} from 'react'
import {Form, Checkbox, Label} from 'semantic-ui-react'
import styled from "styled-components";


const MainContainer = styled.div`

table{
    border: 0px solid green;
    border-collapse: collapse;
    text-align:left;
}



.td-label{
 border-left: solid 0px blue ;
}

.td-input{
margin-left:11px;
margin-top:7px;
}
       
}`;


export default class Listusual extends Component {
    constructor(props) {
        super(props);
        this.state = {

            outStyle: {},
            inStyle: {},
            labStyle: {},
            className: ''
        };
    }


    componentDidMount() {
        if (this.props.primary) {
            this.setState({

                outStyle: {
                    "display": "inline-block",
                    "background-color": "#F1F1F2",
                    "border-radius": "9px",
                    "border": " 0px solid black",
                    "padding-top": "8px",
                    "padding-left": "5px",
                    "padding-right": "9px",
                    "padding-bottom": "11px",
                    "margin-top": "15px",
                    "margin-right": "75px",
                    "margin-left": "33em",

                    "font-size": "1px",
                    "color": "#73756D"
                },
                inStyle: {
                    "display": "inline-block",
                    "color": "#787A71",
                    "border": "0px solid yellow",
                    "margin-top": "0px",
                    "margin-left": "50px",
                    "margin-right": "1px",
                    "padding-top": "3px",
                    "padding-right": "5px",
                    "padding-left": "55px",
                    "padding-bottom": "5px",
                },
                labStyle: {
                    "color": "#959B88",
                    "font-size": "15px",
                    "margin": "0",
                },
                tdStyle: {
                    " border-right": "solid 1px red",
                },

                className: 'primary'
            });
        }
        else if (this.props.basic) {
            this.setState({
                outStyle: {
                    "display": "inline-block",

                    "border-radius": "9px",
                    "border": "solid 2px #D1D3D4",
                    "padding-top": "8px",
                    "padding-left": "5px",
                    "padding-right": "9px",
                    "padding-bottom": "11px",
                    "margin-top": "15px",
                    "margin-right": "75px",
                    "margin-left": "33em",

                    "font-size": "4px",
                    "color": "#73756D"
                },
                inStyle: {
                    "display": "flex-grouped",

                    "border": "0px solid yellow",
                    "margin-top": "0px",
                    "margin-left": "50px",
                    "margin-right": "1px",
                    "padding-top": "3px",
                    "padding-right": "5px",
                    "padding-left": "55px",
                    "padding-bottom": "5px",
                },
                labStyle: {
                    "color": "#959B88",
                    "font-size": "15px",
                    "margin": "0",
                    "background-color": "white",
                },
                tdStyle: {
                    " border-right": "solid 1px #D2D6C7",
                },

                className: 'basic',
            });
        }

        else {
            this.setState({
                outStyle: {
                    "display": "inline-block",
                    "background-color": "#F1F1F2",
                    "border-radius": "9px",
                    "border": "solid 0px #D1D3D4",
                    "padding-top": "8px",
                    "padding-left": "20px",
                    "padding-right": "9px",
                    "padding-bottom": "11px",
                    "margin-top": "15px",
                    "margin-right": "75px",
                    "margin-left": "33em",

                    "font-size": "1px",
                    "color": "#73756D"
                },
                inStyle: {
                    "display": "inline-block",
                    "color": "#82847B",

                    "border": "2px solid #C3C6B8",
                    "box-shadow": "1px 4px  11px 1px #C3C6B8",

                    "margin-bottom": "12px",
                    "margin-top": "0px",
                    "margin-left": "100px",
                    "margin-right": "20px",
                    "padding-top": "3px",
                    "padding-right": "5px",
                    "padding-left": "55px",
                    "padding-bottom": "5px",

                },
                labStyle: {
                    "color": "#959B88",
                    "font-size": "15px",
                    "margin": "0",
                },
                tdStyle: {
                    " border-right": "solid 0px #D2D6C7",
                },
                className: 'secondary'
            });
        }
    }

    render() {
        // if (this.props.children.length > 1) {
        return (
            <MainContainer>
                <div style={this.state.outStyle}>
                    <h3>سر تیتر لیست</h3>
                    <div style={this.state.inStyle} className={this.state.className}>
                        <table>
                            <tbody>
                            {this.props.children.map((item) => (
                                <tr>
                                    <td className="td-label">
                                        <div  style={this.state.tdStyle}>
                                            <Label style={this.state.labStyle}>
                                                {item.props.children}
                                            </Label>
                                        </div>

                                    </td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainContainer>
        )

    }
}