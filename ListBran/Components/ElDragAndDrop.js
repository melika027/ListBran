import React, {Component, Fragment} from "react";

import ReactDropzone from "react-dropzone";
import {Grid, Button, Icon, Container} from 'semantic-ui-react'
import styled from 'styled-components';
import Highlight from 'react-highlight';
import '../semantic/dist/semantic.min.css';
import '../../node_modules/highlight.js/styles/arta.css';

const MyGrid = styled(Grid)`
&&& {
  direction: ltr;
}
`;
const Myicon = styled(Icon)`
&&& {
   color: #BBBDC0;
   position:relative;
   bottom:5px;
}
`;
const Mybutt = styled(Button)`
&&& {
  height:10px;
  margin-bottom:120px;
  margin-left:70px;
  background-color:#ffffff;
  border:1px solid #F1F2F2;
  
  :hover{
   height:10px;
    margin-left:70px;
     margin-bottom:120px;
     background-color:#ffffff;
  border:1px solid #BBBDC0;
  }
  span{
   color: #BBBDC0;
   position:relative;
   bottom:5px;
  }
}

`;
const Mydropzone = styled(ReactDropzone)`
&&& {
  border: 2px dashed #D0D0D1;
  width:250px;
  height:160px;
  
  h1 {
 margin-top:40px;
  padding-left:40px;
  padding: 0 50px;
    color: #BBBDC0;
  }
}
`;

const Myhighlight = styled(Highlight)`
&&& {
  direction: ltr;
  float:left;
}
`;
export default class Draganddrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
        };
    }

    onPreviewDrop = (files) => {
        this.setState({
            files: this.state.files.concat(files),
        });
    };

    render() {
        const previewStyle = {
            display: 'inline',
            width: 100,
            height: 100

        };

        return (
            <div>
                <div>
                    <Mydropzone
                        accept="image/*"
                        onDrop={this.onPreviewDrop}
                    >
                        <h1>بکشید و رها کنید</h1>
                        <Mybutt icon>
                            <Myicon name='image outline'/> <span>آپلود</span>
                        </Mybutt>
                    </Mydropzone>
                </div>
                {this.state.files.length > 0 &&
                <Fragment>
                    <h3>Previews</h3>
                    {this.state.files.map((file) => (
                        <img
                            alt="Preview"
                            key={file.preview}
                            src={file.preview}
                            style={previewStyle}
                        />
                    ))}
                </Fragment>
                }
            </div>
        );
    }
}

// const container = document.createElement("div");
// document.body.appendChild(container);
// render(<Draganddrop />, container);
