import React, {Component} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import styled from "styled-components";
import {Input} from 'semantic-ui-react'

const Div = styled.div`
.main{
display: grid;
grid-template-columns: 150px 150px 150px;
grid-template-rows: 150px 150px 150px;
justify-content: center;
grid-column-gap: 20px;
grid-row-gap: 30px;
}
.box{
background-color: #f26202;
color: #ffffff;


}
.box-1{
//grid-column-start: 1;
//grid-column-end: 3;
grid-column: 1/3;

}
.box-3{
grid-row-start: 2;
grid-row-end: 4;
}
.res{
width: 100%;
height: 100%;
background-color: #0d71bb;
}
`;
export default class Test extends Component {
    render() {
        return (
            <Div>
                <div>
                    <div className='main'>
                        <div className='box box-1'>1</div>
                        <div className='box'>2</div>
                        <div className='box box-3'>3</div>
                        <div className='box'>4</div>
                        <div className='box'>5</div>
                        <div className='box'>6</div>
                        <div className='box'>7</div>
                    </div>
                    <div className='res'>ddddd</div>
                </div>

            </Div>
        )
    }
}