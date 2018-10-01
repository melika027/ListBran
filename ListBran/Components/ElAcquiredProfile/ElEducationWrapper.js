import React, {Component} from 'react';
import styled from "styled-components";
import {Button, Divider} from 'semantic-ui-react'
import ElEducationCard from "./ElEducationCard";

const MainContainer = styled.div`
&&& {
.cardWrapper{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
}
.ui.input input{
    background-color:#F1F2F2;
}
.education-header{
    color: #A7A9AC;
    font-size: 20px;
    font-weight: 420;
    margin-top:20px;
}
.divider{
    margin-bottom: 20px;
}
.wrapper-button{
    border: 1px solid #BCBEC0;
}
}

`;

class ElEducationWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="cardWrapper">
                    <div>
                        <h1 className="education-header">اطلاعات شخصی</h1>
                        <Divider className="divider"/>
                        <ElEducationCard data={this.props.data}/>
                        <ElEducationCard data={this.props.data}/>
                        <div style={{textAlign:'center'}}>
                            <Button className="wrapper-button">دکمه</Button>
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default ElEducationWrapper