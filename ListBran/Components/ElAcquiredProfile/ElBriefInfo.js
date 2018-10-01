import React, {Component} from 'react';
import styled from "styled-components";
import {Button, Container, Icon, Image, Label} from 'semantic-ui-react'


const MainContainer = styled.div`
&&& {
display:flex;
justify-content: space-evenly;
.profile-name{
    color: #6D6E71;
    font-size: 30px;
    text-align: center;
    font-weight: 500;
}
.profile-language{
    width:200px;
    height: 220px;
    box-shadow: 0px 0px 65px -11px rgba(150,144,150,1);
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:10px;
    flex-direction:column;
    position: relative;
    margin-top: 22px;
}
.language-title{
    color:#939598;
    font-size:25px;
    margin:0;
}
.language-labels{
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 10px;
}
.language-label{
    width:75px;
    height:40px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: solid 1px #D1D3D4;
    background-color: white;
    border-radius: 3px;
    color:#A7A9AC;
    font-weight: 400;
}
.language-button{
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0;
    color: #A7A9AC;
    width: 100%;
    height: 35px;
}
table, td, th {
    background-color:#BCBEC0;
    color:white;
    padding:4px;
    font-size:12px;
    text-align:center;
    border: 1px solid white;
    border-collapse: collapse;
}
.table-dif{
    background-color:#D1D3D4;
}
.brief-info{
    margin-right: 35px;
}
.brief-text{
    position: relative;
    text-align:justify;
    width:400px;
    padding:15px;
    border: 1px solid #BABCBE;
    color:#808285;
    font-weight:500;
    margin-bottom: 20px;
}
.edit-icon{
    position: absolute;
    left: -17px;
    bottom: -17px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: white!important;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatar-image{
    border: 6px solid #547CBB;
    border-radius: 50%;
    min-width: 50px;
    margin-bottom:10px;
    width:160px;
    height:160px;
}
.profile-avatar{
    margin-right: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 22px;
}
.job-title{
    box-shadow: 0px 0px 65px -11px rgba(150,144,150,1);
    width: 250px;
    height: 47px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:8px;
}
.job-title-text{
    color: #A7A9AC;
    margin-top:5px;
    font-weight:400;
}
.profile-labels{
    display:flex;
    justify-content:space-evenly;       
}
.profile-label{
    height:45px;
    border: 1px solid #BABCBE;    
    border-radius: 2px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
}
.label-icon{
    position:absolute;
    left: 0;
    transform: scaleX(-1);
    color:gray;
    border-left: 1px solid #58595B;
    margin-left: 12px;
    padding-left: 30px;
}
.profile-email{
    direction: ltr;
    margin-left: 40px;
    margin-top:4px;
    font-size: 13px;
    margin: 0px 10px 0 55px;
}
.profile-phoneNo{
    direction: ltr;
    margin-left: 40px;
    margin-top:4px;
}
.profile-label-number{
    width:155px;
    height:45px;
    border: 1px solid #BABCBE;    
    border-radius: 2px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:13px;
}
  }
`;

class ElBriefInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showExactLanguage: true
        };
        this.isExactLanguage = this.isExactLanguage.bind(this);
    }

    isExactLanguage() {
        if (this.state.showExactLanguage === false) {
            this.setState({showExactLanguage: true})
        }
        else if (this.state.showExactLanguage === true) {
            this.setState({showExactLanguage: false})
        }
    }


    render() {
        return (
            <Container>
                <MainContainer>
                    <div className="profile-language"
                         style={this.state.showExactLanguage ? {height: "160px"} : {height: "220px"}}>
                        <p className="language-title">زبان ها</p>
                        <div className="language-labels">
                            <Label as='a' className="language-label">ENG</Label>
                            <Label as='a' className="language-label">FA</Label>
                        </div>
                        <table style={this.state.showExactLanguage ? {display: "none"} : {display: "table"}}>
                            <tr>
                                <td rowSpan="2">زبان مادری</td>
                                <td>مبتدی</td>
                                <td className="table-dif">مکالمه</td>
                            </tr>
                            <tr>
                                <td>پیشرفته</td>
                                <td className="table-dif">نوشتاری</td>
                            </tr>
                        </table>
                        <Button className="language-button" onClick={this.isExactLanguage}>
                            {this.state.showExactLanguage ?<p>دقیقتر</p>:<p>بستن</p>}
                        </Button>
                    </div>
                    <div className="brief-info">
                        <h1 className="profile-name">{this.props.data.name}</h1>
                        <div>
                            <p className="brief-text">
                                {this.props.data.briefText}
                                <a href='#'><Icon className="edit-icon" name="pencil alternate"/></a>
                            </p>
                            <div className="profile-labels">
                                <div className="profile-label">
                                    <Icon size="large" className="label-icon" name="envelope"/>
                                    <p className="profile-email">{this.props.data.email}</p>
                                </div>
                                <div className="profile-label-number">
                                    <Icon size="large" className="label-icon" name="phone"/>
                                    <p className="profile-phoneNo">{this.props.data.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-avatar">
                        <Image size="small" src={this.props.data.avatar} className="avatar-image"/>
                        <div className="job-title">
                            <p className="job-title-text">{this.props.data.jobTitle}</p>
                        </div>
                    </div>
                </MainContainer>
            </Container>
        )
    }
}

export default ElBriefInfo