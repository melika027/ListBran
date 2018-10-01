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
    margin-top:30px;
}

.card-style{
   height:150px;
    width:200px;
    background-color:#F1F1F2;
    padding:10px;
}
.degree-diff-border{
    border: 1px solid #C2C6B8;
    height: 125px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top :8px;
    padding-bottom :2px;
}
.degree-diff-header{
    position: absolute;
    top: -10px;
    background-color: #F0F0F1;
    width: 150px;
    text-align: center;
    color: 10px;
    font-size: 12px;
    color: #8E9187;
}
.degree-diff-text{
   
    justify-content: center;
    align-items: center;
    color:#52544E;
    font-size:12px;
    
    margin-top :15px;
    margin-bottom :15px;
}

}


`;

class DiffLevelCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="card">
                    <div className="card-style">
                        <div className="degree-diff-border">
                            <p className="degree-diff-header"> درجه سختی را انتخاب کنید</p>
                            <div className="degree-diff-text">
                                <Lists>
                                    <label>آیتمی از آیتم های زیر</label>
                                    <label>آیتمی از آیتم های زیر</label>
                                    <label>آیتمی از آیتم های زیر</label>
                                    <label>آیتمی از آیتم های زیر</label>
                                </Lists>
                            </div>
                            {/*<p className="exam-time-min">دقیقه</p>*/}
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default DiffLevelCard