import React, {Component} from 'react';
import styled from "styled-components";
import {Container, Divider, Input,Button} from 'semantic-ui-react'
import ElTags from "../ElTags";

const MainContainer = styled.div`
&&& {
padding: 1rem 4rem 1rem 4rem;
.education-header{
    color: #A7A9AC;
    font-size: 20px;
    font-weight: 420;
    margin-top:20px;
    text-align:center;
}
.divider{
    margin-bottom: 20px;
}
.skills{
    display:flex;
    justify-content:center;
    align-items:center;
    float:right;
}
.ui.button{
    margin: 2px;
}
.ui.button:hover{
    margin: 2px;
}
.form{
    margin: 0;
    display: flex;
    border: 1px solid white;
}
.ui.input input {
    width: 12em;
}
.ui.button{
    margin:0;
    height:auto;
}
div.out-style{
    border:none;
}


}
`;

class ElSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.data
        };
        this.addTagHandler = this.addTagHandler.bind(this);
    }

    addTagHandler(e) {
        e.preventDefault();
        let option = e.target.elements.option.value;
        this.setState((prevState) => {
            return {
                tags: prevState.tags.concat(option)
            };
        });
    }


    render() {
        console.log(this.props.data);
        return (
            <Container>
                <MainContainer>
                    <h1 className="education-header">مهارت ها</h1>
                    <Divider className="divider"/>
                    <div className="skills">
                        <ElTags primary style={{border:'none'}} data={this.state.tags}/>
                        <form className="form" onSubmit={this.addTagHandler}>
                            <Input type="text" name="option"/>
                            <Button type="submit">دکمه</Button>
                        </form>
                    </div>
                </MainContainer>
            </Container>
        )
    }
}

export default ElSkills