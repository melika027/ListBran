import React, {Component} from 'react';
import styled from "styled-components";
import {Divider, Input} from 'semantic-ui-react'

const MainContainer = styled.div`
&&& {
width:100%;
padding: 1rem 4rem 1rem 4rem;
.input-header{
    color:#A7A9AC;
    text-align:center;
    font-size:20px;
    font-weight:420;
}
.input-area{
    display: flex;
    justify-content: space-between;
}
.ui.input input {
    background-color:white;
    border:none;
    border-bottom: 1px solid #D1D3D4;
    border-radius: 0;
    width:230px;
}
.ui.label{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#F1F2F2;
}
    
}
`;

class ElPersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <h1 className="input-header">اطلاعات شخصی</h1>
                <Divider/>
                <div className="input-area">
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                </div>
                <div className="input-area">
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                </div>
                <div className="input-area">
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                    <Input label="نام:" placeholder="تایپ کنید..."/>
                </div>
            </MainContainer>
        )
    }
}

export default ElPersonalInfo