import React, {Component} from 'react';
import {Card, Dropdown, Grid, Divider, Button, Input, TextArea} from 'semantic-ui-react'
import styled from 'styled-components';
import Highlight from 'react-highlight';
import '../../semantic/dist/semantic.min.css';
import '../../../node_modules/highlight.js/styles/arta.css';
import './HelpDoc.css';
import ElDragAndDrop from '../ElDragAndDrop'

const MyGrid = styled(Grid)`
&&& {
  direction: ltr;
}
`;


class ElHelpDoc extends Component {
    render() {
        return (
            <div>
                <MyGrid container style={{marginTop: 30}}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Dropdown text='main' icon="angle down">
                                    <Dropdown.Menu option>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Dropdown text='main' icon="angle down">
    <Dropdown.Menu option>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
        <Dropdown.Divider/>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
        <Dropdown.Divider/>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
    </Dropdown.Menu>
</Dropdown>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Dropdown className="primary" text='primary' icon="angle down">
                                    <Dropdown.Menu option>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Grid.Column>


                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Dropdown className="primary" text='primary' icon="angle down">
    <Dropdown.Menu option>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
        <Dropdown.Divider/>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
        <Dropdown.Divider/>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
    </Dropdown.Menu>
</Dropdown>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Dropdown className="secondary" text='secondary' icon="angle down">
                                    <Dropdown.Menu option>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Dropdown className="secondary" text='secondary' icon="angle down">
    <Dropdown.Menu option>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
        <Dropdown.Divider/>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
        <Dropdown.Divider/>
        <Dropdown.Item text='یکی از چند آیتم این منو آبشاری'/>
    </Dropdown.Menu>
</Dropdown>`
                                }
                            </Highlight>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Button basic>دکمه</Button>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Button basic>دکمه</Button>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Button primary>دکمه</Button>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Button primary>دکمه</Button>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Button secondary>دکمه</Button>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Button secondary>دکمه</Button>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Button>دکمه</Button>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Button>دکمه</Button>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Input placeholder="basic"/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Input  placeholder="basic" />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Input className="primary" placeholder="primary"/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `      <Input className="primary" placeholder="primary" />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Input className="secondary" placeholder="secondary"/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `        <Input className="secondary" placeholder="secondary" />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Input icon='search' placeholder='Search...'/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Input  icon='search'  placeholder='Search...' />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Input className="primary" icon='search' placeholder='Search...'/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Input className="primary" icon='search' placeholder='Search...' />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <Input className="secondary" icon='search' placeholder='Search...'/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<Input className="secondary" icon='search' placeholder='Search...' />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <TextArea placeholder='جستجو ...'/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<TextArea placeholder='جستجو ...'  />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <TextArea className="secondary" placeholder='جستجو...'/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<TextArea className="secondary" placeholder='جستجو...'  />`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="left-side">
                                <ElDragAndDrop/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Highlight language="javascript">
                                {
                                    `<ElDragAndDrop/>`
                                }
                            </Highlight>
                        </Grid.Column>
                    </Grid.Row>
                </MyGrid>
            </div>
        )
    }
}
export default ElHelpDoc;