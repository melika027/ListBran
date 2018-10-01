import React, {Component} from 'react';
import styled from "styled-components";
import ElBriefInfo from "./ElBriefInfo";
import ElPersonalInfo from "./ElPersonalInfo";
import {Container} from 'semantic-ui-react'
import ElEducationWrapper from "./ElEducationWrapper";
import ElWorkWrapper from "./ElWorkWrapper";
import ElSkills from "./ElSkills";
import ElAchievments from "./ElAchievments";

const MainContainer = styled.div`
&&& {
.cardWrapper{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
}
.ui.input input{
    background-color:#F1F2F2;
}
.education-header{
    color: #A7A9AC;
    font-size: 20px;
    font-weight: 420px;
    margin-top:20px;
}
.divider{
    margin-bottom: 20px;
}
}

`;

const data1 = {
    name: 'فلان فلانی فلان زاده',
    email: 'testtesttest@testtest.com',
    phoneNumber: '0903 186 3711',
    avatar: 'http://uupload.ir/files/mfmd_avatar.jpg',
    jobTitle: 'Job Title',
    briefText: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n' +
    '                                از صنعت چاپ و با استفاده از طراحان گرافیک است.\n' +
    '                                چاپگرها و متون بلکه روزنامه و مجله در ستون\n' +
    '                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز\n' +
    '                                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
};
const data2 = {
    courseName: 'نام مدرک',
    degree: 'نام رشته تحصیلی',
    degreeDate: '1377/01/01',
    degreeCo: 'اسب مهوران کسرا اندیشه',
    avatar: 'http://uupload.ir/files/mfmd_avatar.jpg'
};
const data3 = {
    jobTitle: 'تیتر شغل',
    startDate: '1377/01/01',
    finishDate: '1380/01/01',
    degreeCo: 'اسب مهوران کسرا اندیشه',
    avatar: 'http://uupload.ir/files/mfmd_avatar.jpg'
};
const data4 = ['tag'
];
const data5=['tag']
;

class HelpDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>
                <Container>
                    <ElBriefInfo data={data1}/>
                    <div style={{"margin-top": "35px", "background-color": "#F2F3F3"}}>
                        <ElPersonalInfo/>
                        <div className="cardWrapper">
                            <ElEducationWrapper data={data2}/>
                            <ElWorkWrapper data={data3}/>
                            <ElSkills data={data4}/>
                            <ElAchievments data={data5}/>
                        </div>
                    </div>
                </Container>
            </MainContainer>
        )
    }
}

export default HelpDoc