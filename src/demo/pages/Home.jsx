import React from 'react';
import styles from './styles.module.css';
import Layout from '../layout/Layout';
import {
  Accordion, Container, Grid, Icon,
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
      <Layout>

        <div className={styles.homeHero}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi et i
        </div>

        <Container>
          <Grid>
            <Grid.Cell width={33} className="text-center">
              <Icon name="globe-europe" size="5x" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi et i
              </p>
            </Grid.Cell>
            <Grid.Cell width={33} className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi et i
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi et i
            </Grid.Cell>
            <Grid.Cell width={33} className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi et i
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi et i
            </Grid.Cell>
          </Grid>
        </Container>


        <Container>

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

        </Container>
      </Layout>
    );
  }
}

export default Home;
