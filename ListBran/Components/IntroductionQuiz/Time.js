import {Component} from "react";
import {Button} from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
&&& {
.card{
    height:150px;
    width:200px;
    flex-direction: row;
    box-shadow: 0px 0px 25px -5px grey;
    margin-bottom:30px;
}

.card-style{
   height:150px;
    width:200px;
    background-color:#F1F1F2;
    padding:10px;
 
}
.exam-time-border{
    border: 1px solid #C2C6B8;
    height: 125px;
    display: flex;
    justify-content: center;
    position: relative;
       margin-top:10px;
  
}
.exam-time-header{
    position: absolute;
    top: -10px;
    background-color: #F0F0F1;
    width: 100px;
    text-align: center;
    color: 10px;
    font-size: 12px;
    color: #8E9187;
}
.exam-time-text{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#52544E;
    font-size:22px;
}
.exam-time-min{
    position: absolute;
    top: 60px;
    width: 50px;
    text-align: center;
    font-size: 12px;
    color: #CACEC0;
}

}


`;

class Time extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="card">
                    <div className="card-style">
                        <div className="exam-time-border">
                            <p className="exam-time-header"> زمان امتحان </p>
                            <p className="exam-time-text">{this.props.data.time}</p><br/>
                            <p className="exam-time-min">دقیقه</p>
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default Time