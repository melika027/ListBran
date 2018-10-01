import React, {Component} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import styled from "styled-components";
import Icon from "antd/es/icon";


const MainContainer = styled.div`
&&& {

@media screen and (max-width:770px){
  .drop-text{
   display:none;
}
}
@media screen and (max-width:988px) {
  .drop-text{
    margin-left:60px;
}
}
  
}

.drop-text{
    height:42px;
    width:165px;
    position: relative;  
    border: 2px solid #BCBEC0;
    background-color: #F2F3F3;
    color:#898E7D;
}
.m{
    color:red;
    text-align: center;
    font-size:16px;
    padding-bottom: 25px;
    
}
}

`;
const options = [
    {key: 1, text: 'Choice 1', value: 1},
    {key: 2, text: 'Choice 2', value: 2},
    {key: 3, text: 'Choice 3', value: 3},
];


class DropCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <div className="m">
                    <Dropdown  text='آبشاری' pointing iconPosition='left'  className="drop-text"
                               icon='angle down' options={options}  >
                    </Dropdown>
                </div>

            </MainContainer>


        )
    }
}

export default DropCard