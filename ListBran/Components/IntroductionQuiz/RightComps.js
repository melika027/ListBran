import React, {Component} from 'react';
import styled from "styled-components";
import {Button, Divider} from 'semantic-ui-react'
import RequirementCard from "./RequirementCard";
import DiffLevelCard from "./DiffLevelCard";



class RightComps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                    <div>
                        {/*<h1 className="education-header">اطلاعات شخصی</h1>*/}
                        <DiffLevelCard data={this.props.data}/>
                        <RequirementCard data={this.props.data}/>
                        {/*<div style={{textAlign:'center'}}>*/}
                            {/*<Button className="wrapper-button">دکمه</Button>*/}
                        {/*</div>*/}
                    </div>

        )
    }
}

export default RightComps