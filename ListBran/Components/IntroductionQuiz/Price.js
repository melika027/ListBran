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
    margin-top:30px;

}

.card-style{
   height:150px;
    width:200px;
    background-color:#F1F1F2;
    padding:10px;
}
.exam-price-border{
    border: 1px solid #C2C6B8;
    height: 65px;
    display: flex;
    justify-content: center;
    position: relative;
    
     margin-top:10px;
}
.exam-price-header{
    position: absolute;
    top: -10px;
    background-color: #F0F0F1;
    width: 100px;
    text-align: center;
    font-size: 12px;
    color: #8E9187;
}
.exam-price-text{
    margin-top : 17px;
    display: flex;
    text-align: center;
    color:#52544E;
    font-size:22px;
}
.wrapper-button{
    border:0px solid #D1D3D4;
    border-radius:8px;
    box-shadow:inset 1px 1px 91px 5px rgba(222,215,222,1);
    margin-bottom:10px;
}

.toman-style{
    margin-top : 23px;
    color:#52544E;
    font-size:12px;
    color: #CACEC0;
}
}

`;

class Price extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="card">
                    <div className="card-style">
                        <div className="exam-price-border">
                            <p className="exam-price-header"> قیمت </p>
                            {/*<p className="course-date-text"> دقیقه {this.props.data.time}</p>*/}
                            <p className="exam-price-text">  {this.props.data.price}</p>
                            <p className="toman-style">  تومان </p>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <Button className="wrapper-button">
                                <p style={{color:' #898989' ,fontSize:'14px'}} >
                                دکمه
                                </p>
                            </Button>
                        </div>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default Price