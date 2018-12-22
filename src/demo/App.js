import React from 'react';
import Example from '../lib';
import { SecondExample } from '../lib';
import { Alert, Breadcrumbs, Accordion } from '../lib';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { activeItem: 0 }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event, titleProps) {
    const { index } = titleProps;
    const { activeItem } = this.state;
    const newIndex = activeItem === index ? -1 : index;

    this.setState({ activeItem: newIndex });
  }

  render ()
  {
    const {activeItem} = this.state;
    return (
        <div>
          <Example/>
          <SecondExample/>

          <Breadcrumbs>
            <Breadcrumbs.Item><a className="c-link">Home</a></Breadcrumbs.Item>
            <Breadcrumbs.Item><a className="c-link">lorem</a></Breadcrumbs.Item>
            <Breadcrumbs.Item active>ipsum</Breadcrumbs.Item>
          </Breadcrumbs>


          <Accordion>
            <Accordion.Title active={activeItem === 0} index={0} onClick={this.handleClick}>
              Heading one
            </Accordion.Title>
            <Accordion.Content>
              This is the body
            </Accordion.Content>

            <Accordion.Title active={activeItem === 1} index={1} onClick={this.handleClick}>
              Heading two
            </Accordion.Title>
            <Accordion.Content>
              This is the second body
            </Accordion.Content>
          </Accordion>

        </div>
    );
  }
}

export default App;
