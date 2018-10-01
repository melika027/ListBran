import React, { Component } from 'react';
import { Button, Form, Checkbox, Container, FormField} from 'semantic-ui-react'
import styled from 'styled-components';

const CustomForm = styled(Form)`
&&& {
  //margin-top: 50px;
  border: 1px solid black;
}
`;

const CustomFormField = styled(FormField)`
 &&& { 
    //width: 220px;
    //label {
    //  border: 1px solid pink;
    //  padding: 5px;
    //  position: absolute;
    //  top: -5px;
    //  left: 48%;
    //  background: #fff;
    //}
 }
`;

class ElForm extends Component {
    render() {
        return(
            <Container>
                <Form>
                    <Form.Field>
                            <label className="name">نام</label>
                            <input placeholder='ممد' />
                    </Form.Field>
                    <Form.Field>
                            <label className="family">نام خانوادگی</label>
                            <input placeholder='Last Name' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default ElForm;