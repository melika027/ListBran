import React, {Component} from 'react';
import { Form, Container } from 'semantic-ui-react'
import styled from 'styled-components';

const CustomFormField = styled(Form.Field)`
&&& {
    input {
      color:red;
    }
  
}
`;

class ElFormField extends Component {
    render() {
        return(
            <div></div>
        );
    }
}

export default ElFormField;