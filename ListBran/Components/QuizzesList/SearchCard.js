import React, {Component} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import styled from "styled-components";
import {Input} from 'semantic-ui-react'


const MainContainer = styled.div`
{
@media screen and (max-width:988px) {
  .search-style{
     margin-right:32px;
     width:150px;
}
}
.search-style{
    margin-top :25px;
    background-color:#F2F3F3;
    height:45px;
    width:220px;
    font-size:12px;
    border-radius:6px;
    border: 2px solid #939986;
}
.lab-text{
    position: relative;
    margin-right:40px;
     margin-left:120px;
     margin-bottom:40px;
     margin-top:-27px;
    background-color:#F2F3F3;
    border:0;
    fontSize:10px;
    color :red;
}

}
`;


class SearchCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <Input className="search-style" type='text'  icon='search'
                       iconPosition='left' placeholder='جستجو...'/>
                    {/*<input/>*/}

            </MainContainer>
        )
    }
}

export default SearchCard
