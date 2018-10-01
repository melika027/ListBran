import React, { Component } from 'react';
import { Button, Input, Menu, Icon} from 'semantic-ui-react'
import styled from 'styled-components';

const MyButton = styled(Button)`
          &&& {
            padding: 200px;
          }
        `;

const CustomIcon = styled(Icon)`
&&& {
  text-align: center;
  border: 5px solid pink;
  }
`;

class OrganizationList extends Component {
    constructor(props){
        super(props);
        this.state = { activeItem: 'home' };
        this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    }
    render() {
        const { activeItem } = this.state;
        return(
            <div>
                <Menu dir={"ltr"}>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
                <Icon name='plus' size='massive' />
                {/*<MyButton>Hello</MyButton>*/}
            </div>
        )
    }
}


export default OrganizationList;