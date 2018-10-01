import React, {Component} from 'react';
import styled from "styled-components";
import {Image} from 'semantic-ui-react'

const MainContainer = styled.div`
&&& {
.card{
    width:400px;
    flex-direction: row;
    display: flex;
    box-shadow: 0px 0px 35px -5px grey;
    margin-bottom:30px;
}
}
.card-right{
    width:45%;
}
.card-right-text{
    width:100%;
    height:100px;
    background-color:#F1F1F2;
    padding:10px;
}
.right-header{ 
    color:#BCBEC0;
    text-align:center;
    font-size: 15px;
}
.card-header{
    background-color:#A7A9AC;
    height:50px;
    text-align:center;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 18px;
}
.course-date{
    border: 1px solid #D1D3D4;
    height: 40px;
    display: flex;
    justify-content: center;
    position: relative;
}
.course-date-header{
    position: absolute;
    top: -10px;
    background-color: #F0F0F1;
    width: 100px;
    text-align: center;
    color: 10px;
    font-size: 12px;
    color: #D1D3D4;
    width: 65px;
}
.course-date-header-finish{
    padding: 0;
    height: 10px;
    font-weight: 500;
    width: 65px;
    padding: 0;
    position: absolute;
    top: -10px;
    background-color: #F0F0F1;
    text-align: center;
    color: 10px;
    font-size: 12px;
    color: #D1D3D4;
    width: 65px;
}
.course-date-text{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#BCBEC0;
}

.card-left{
    width:55%;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatarImage{    
    border: 2px solid #A6A8AB;
    border-radius:50%; 
    min-width:50px; 
    margin-right:10px;
}
.course-degree-co{
    justify-content: center;
    align-items: center;
    display: flex;
    color:#939598;
    width: 90px;
    height:85px;
    margin-bottom: 0;
    font-size: 15px;
    border-left: 1.5px solid #E6E7E8;}
    display:flex;
}


`;

class ElWorkCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="card">
                    <div className="card-right">
                        <div className="card-header">{this.props.data.jobTitle}</div>
                        <div className="card-right-text">
                            <div className="course-date">
                                <p className="course-date-header" style={{"border-bottom": "none"}}>تاریخ شروع</p>
                                <p className="course-date-text">{this.props.data.startDate}</p>
                            </div>
                            {this.props.data.finishDate === undefined ? <div className="course-date" style={{backgroundColor:'#E6E7E8'}}>
                                <p className="course-date-header-finish">تاریخ پایان</p>
                                <p className="course-date-text">مشغول به کار</p>
                            </div> : <div className="course-date">
                                <p className="course-date-header">تاریخ پایان</p>
                                <p className="course-date-text">{this.props.data.finishDate}</p>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="card-left">
                        <p className="course-degree-co">{this.props.data.degreeCo}</p>
                        <Image size="tiny" src={this.props.data.avatar} className="avatarImage"/>
                    </div>
                </div>
            </MainContainer>
        )
    }
}

export default ElWorkCard