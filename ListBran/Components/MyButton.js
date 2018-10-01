import React, { Component } from 'react';
import { Button} from 'semantic-ui-react'
import styled from 'styled-components';

const MyButton = styled(Button)`
        &&& {
            padding : 100px;
            color: blue;
        }
    `;

export default MyButton;