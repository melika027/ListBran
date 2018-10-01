import {Component} from "react";
import {Button} from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
&&& {
.card{
    height:200px;
    width:230px;
    margin-top:20px;
}

.card-style{
    height:200px;
    width:230px;
    background-color:white;
    padding:5px;
}

.exam-name-text{
    margin-top:55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#52544E;
    font-size:25px;
}

.exam-try {
    position: relative;
    margin-top:-20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #CACEC0;
}
.exam-date{
    position: relative;
    margin-top:55px;
    margin-right:95px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #52544E;
}
@media only screen and (max-width:500px;){
.card-style{
    height:500px;
    width:200px;
    background-color:red;
    padding:5px;
}
}
}

`;

class SingleCardQuiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="card">
                    <div className="card-style">
                        {/*<p className="course-date-text"> دقیقه {this.props.data.time}</p>*/}
                        <p className="exam-name-text"> {this.props.data.name}</p>
                        <p className="exam-try">{this.props.data.numb}</p>
                        <p className="exam-date">{this.props.data.date}</p>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default SingleCardQuiz