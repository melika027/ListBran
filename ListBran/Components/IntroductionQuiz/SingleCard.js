import {Component} from "react";
import {Button} from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
&&& {


.card{
    flex-direction: row;
    box-shadow: 0px 0px 25px -5px grey;
    margin-bottom:20px;
    margin-top:30px;
}

.card-style{
    height:335px;
    width:450px;
    background-color:#F1F1F2;
    padding:10px;
}

.card-text{
    padding :10px;
    display: flex;
    color:#52544E;
    font-size:12px;
}
}

`;

class SingleCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>

                <div className="card">
                    <div className="card-style">
                        <div className="card-text">
                            <p>

                                استفاده از طراحان گرافیک است. چاپگرھا و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردھای متنوع با ھدف بھبود ابزارھای کاربردی می باشد.
                                کتابھای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
                                فراوان جامعه و متخصصان را می طلبد تا با نرم افزارھا شناخت بیشتری را
                                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرھنگ پیشرو در
                                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                                دشواری موجود در ارائه راھکارھا و شرایط سخت تایپ به پایان رسد
                                وزمان مورد نیاز شامل حروفچینی دستاوردھای اصلی و جوابگوی
                                سوالات پیوسته اھل دنیای موجود طراحی اساسا مورد استفاده قرار

                            </p>
                        </div>

                    </div>
                </div>

            </MainContainer>
        )
    }
}

export default SingleCard