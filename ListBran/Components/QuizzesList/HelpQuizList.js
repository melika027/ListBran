import styled from "styled-components";
import {Component} from "react";
import {Button, Container} from "semantic-ui-react";
import React from "react";
import DropCard from "./DropCard";
import SingleCardQuiz from "./SingleCardQuiz";
import SearchCard from "./SearchCard";
import RadioList from "../IntroductionQuiz/Lits";

// language=LESS
const MainContainer = styled.div`{

&&& {
  width:100%;
  padding: 1rem 14rem 1rem 11rem;
}
@media screen and (max-width:988px) {

}
  .cardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around ;
  }

  .cardWrapper2 {
    //grid-column-gap:400px;
    //grid-template-columns: 150px 150px 150px;
    //grid-row-gap: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around ;
  }

  .wrapper-button {
    border: 2px solid #BCBEC0;
    margin-top: 25px;
  }



}
`;
const data1 = [
    {
        name: 'نام کوییز',
        date: '1377/04/18',
        numb: '1 از3 تلاش',
    },
    {
        name: 'نام کوییز',
        date: '1377/04/18',
        numb: '1 از3 تلاش',
    },
    {
        name: 'نام کوییز',
        date: '1377/04/18',
        numb: '1 از3 تلاش'
    },
    {
        name: 'نام کوییز',
        date: '1377/04/18',
        numb: '1 از3 تلاش'
    },
    {
        name: 'نام کوییز',
        date: '1377/04/18',
        numb: '1 از3 تلاش'
    },
    {
        name: 'نام کوییز',
        date: '1377/04/18',
        numb: '1 از3 تلاش'
    }
];

class HelpQuizList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <MainContainer>
                <Container>
                    <div style={{"margin-top": "35px", "background-color": "#F2F3F3", "padding": "20px"}}>
                        {/*<h1 className="prime-header">تیتر این امتحان</h1>*/}
                        <div className="cardWrapper">
                            <SearchCard/>
                            <DropCard/>
                        </div>
                        <div className="cardWrapper2">
                            {data1.map((tem) => (
                                    <SingleCardQuiz data={tem}/>
                                )
                            )}
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <Button className="wrapper-button">
                                <p style={{color: ' #898989', fontSize: '14px'}}>
                                    دکمه
                                </p>
                            </Button>
                        </div>
                    </div>
                </Container>
            </MainContainer>
        )
    }
}

export default HelpQuizList;
