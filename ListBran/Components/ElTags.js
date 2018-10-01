import React, {Component} from 'react';
import {Label} from 'semantic-ui-react'

class ElTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outStyle: {},
            inStyle: {},
            className: ''
        };
    }

    componentDidMount() {
        if (this.props.primary) {
            this.setState({
                outStyle: {
                    "display": "inline-block",
                    "background-color": "#F1F1F2",
                    "border-radius": "5px",
                    "font-size": "25px"
                },
                inStyle: { "color": "red"},
                className: 'primary'
            });
        }
        else if (this.props.secondary) {
            this.setState({
                outStyle: {},
                inStyle: {
                    "display": "inline-block",
                    "color": "#D1D3D4",
                    "margin": "0px 5px 0px 5px",
                    "font-size": "25px"
                },
                className: 'secondary'
            });
        }
        else {
            this.setState({
                outStyle: {
                    "display": "inline-block",
                    "border": "solid 1px #D1D3D4",
                    "border-radius": "5px",
                    "font-size": "25px"
                },
                inStyle: {"border": "none", "display": "inline-block", "color": "red"},
                className: 'basic'
            });
        }
    }

    render() {
        if (this.props.children.length > 1) {
            return (
                <div style={this.state.outStyle}>
                    {this.props.children.map((item) => (
                        <div style={this.state.inStyle}>
                            <Label className={this.state.className} as="a">
                                {item.props.children}
                            </Label>
                            {this.props.children.indexOf(item) !== this.props.children.length - 1 ? '  ' + '،' : ''}
                        </div>
                    ))
                    }
                </div>
            )
        }
        else {
            return (
                <div>
                    <Label className={this.state.className}>{this.props.children.props.children}</Label>
                </div>
            )
        }
    }
}

export default ElTags;