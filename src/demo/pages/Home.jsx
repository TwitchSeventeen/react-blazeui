import React from 'react';
import {
  Breadcrumbs, Accordion, Container, Grid,
} from '../../lib';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, titleProps) {
    const { index } = titleProps;
    const { activeItem } = this.state;
    const newIndex = activeItem === index ? -1 : index;

    this.setState({ activeItem: newIndex });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Breadcrumbs>
          <Breadcrumbs.Item><a href="/" className="c-link">Home</a></Breadcrumbs.Item>
          <Breadcrumbs.Item><a href="/lorem" className="c-link">lorem</a></Breadcrumbs.Item>
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


        <Grid>
          <Grid.Cell>lorem</Grid.Cell>
          <Grid.Cell>lorem</Grid.Cell>
          <Grid.Cell>lorem</Grid.Cell>
        </Grid>

        <Grid className="demo" small="full" medium="fit" large="full">
          <Grid.Cell>
            <div className="text">first</div>
          </Grid.Cell>
          <Grid.Cell>
            <div className="text">second</div>
          </Grid.Cell>
          <Grid.Cell>
            <div className="text">third</div>
          </Grid.Cell>
        </Grid>

      </Container>
    );
  }
}

export default Home;
