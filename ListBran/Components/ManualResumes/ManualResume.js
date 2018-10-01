import React, {Component} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import styled from "styled-components";
import {Input} from 'semantic-ui-react'


const MainContainer = styled.div`
{

&&& {
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
}
`;


class ManualResume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="file"  onClick={fileEvent($event)}  id="embedpollfileinput" />

        <label form="embedpollfileinput" class="ui huge red   right floated button">
            <i class="ui upload icon"/>
            Upload image
        </label>

        <input type="file" change="fileEvent($event)" className="inputfile" id="embedpollfileinput" />
            </div>

    )
    }
}

export default ManualResume