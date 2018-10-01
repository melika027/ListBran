import React, {Component} from 'react';
import styled from "styled-components";
import {Button, Divider} from 'semantic-ui-react'

import Time from "./Time";
import Price from "./Price";



const data2 = {
    price: '30.000',
};

const data3 = {
    time :'12:00'
};

class LeftComps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

                    <div>
                        <Price data={data2}/>
                        <Time data={data3}/>
                    </div>

        )
    }
}

export default LeftComps;