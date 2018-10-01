import {Component} from "react";
import {Button, Icon} from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
&&& {    
.card {
    flex-direction: row;
    box-shadow: 0px 0px 25px -5px grey;
    margin-bottom:30px;
    width:1000px;
}
   
   
.card-style{
    background-color:#F1F1F2;
    padding:10px;
    
      }

.exam-relate-header{
    color: #898989;
    margin-top :9px;
    text-align: center;
    font-size:22px;
}



.title-item-text{
   position: relative;
   display: inline;
   margin-top : 17px;
    display: flex;
    text-align: center;
    color:#52544E;
    font-size:22px;
    margin-left:30px;
}


.wrapper-button{
    border:3px solid #D1D3D4;
    border-radius:8px;
  //  box-shadow:  inset 1px 2px 70px -8px rgba(115,124,128,1);
  padding-bottom:5px;
}

.card-exam{
    position: relative;
    height:15 px;
    width:230px;
    background-color:#F1F1F2;
    border-radius:5px;
    box-shadow: 0px 0px 28px -3px rgba(166,171,173,1);
    text-align: right;
    display: inline-block;
    margin-right:30px;
    margin-bottom:30px;
    padding:20px;
 
    
}

}

`;

class RelatedQuizzes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>

                <div className="card">
                    <div className="card-style">
                        <p className="exam-relate-header"> امتحان های مربوطه </p>
                        <div className="title-item-text">

                            <div className="card-exam">
                                <a href='#'> {this.props.data.itemTitle}</a>
                            </div>
                            <div className="card-exam">
                                <a href='#'> {this.props.data.itemTitle}</a>
                            </div>
                            <div className="card-exam">
                                <a href='#'> {this.props.data.itemTitle}</a>
                            </div>
                            <div className="card-exam">
                                <a href='#'> ت {this.props.data.itemTitle}</a>
                            </div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Button className="wrapper-button">
                                <p style={{color:' #898989' ,fontSize:'14px'}}>
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

export default RelatedQuizzes