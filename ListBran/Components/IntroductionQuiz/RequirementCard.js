import {Component} from "react";
import {Button} from "semantic-ui-react";
import React from "react";
import styled from "styled-components";
import Lists from "./Lits";


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
.req-border{
    border: 1px solid #C2C6B8;
    height: 125px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top :8px;
    padding-bottom :2px;
}
.req-header{
    position: absolute;
    top: -10px;
    background-color: #F0F0F1;
    width: 150px;
    text-align: center;
    color: 10px;
    font-size: 12px;
    color: #8E9187;
}
.req-text{
   
    justify-content: center;
    align-items: center;
    color:#52544E;
    font-size:12px;
   
    margin-top :20px;
}

}


`;

class RequirementCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="card">
                    <div className="card-style">
                        <div className="req-border">
                            <p className="req-header"> نیازهای این امتحان</p>
                            <p className="req-text">
                                آیتمی از آیتم های زیر<br/>
                                آیتمی از آیتم های زیر<br/>
                                آیتمی از آیتم های زیر<br/>
                                آیتمی از آیتم های زیر<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default RequirementCard