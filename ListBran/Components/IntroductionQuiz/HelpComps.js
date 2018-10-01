import styled from "styled-components";
import {Component} from "react";
import {Container} from "semantic-ui-react";
import React from "react";

import RightComps from "./RightComps";
import RelatedQuizzes from "./RelatedQuizzes";
import LeftComps from "./LeftComps";
import SingleCard from "./SingleCard";

const MainContainer = styled.div`
&&& {
width:100%;
padding: 1rem 4rem 1rem 4rem;
}
.cardWrapper{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
}
.prime-header{
    color:#A7A9AC;
    text-align:center;
    font-size:25px;
    font-weight:420;


}
`;
const data1= {
itemTitle: 'تیتر این آیتم'
};


class HelpComps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MainContainer>
                <div className="cardWrapper">
                <Container>

                    <div style={{"margin-top": "35px", "background-color": "#F2F3F3"}}><br/>
                        <h1 className="prime-header">تیتر این امتحان</h1>
                        <div className="cardWrapper">
                            <RightComps/>
                            <SingleCard/>
                            <LeftComps/>
                            <RelatedQuizzes data={data1}/>
                        </div>
                    </div>
                </Container>
                </div>
            </MainContainer>
        )
    }
}

export default HelpComps;
