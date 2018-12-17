import React from 'react';
import Example from '../lib';
import { SecondExample } from '../lib';
import { Alert, Breadcrumbs } from '../lib';

function App () {
  return (
      <div>
        <Example/>
        <SecondExample/>

        <Breadcrumbs>
          <Breadcrumbs.Item><a className="c-link">Home</a></Breadcrumbs.Item>
          <Breadcrumbs.Item><a className="c-link">lorem</a></Breadcrumbs.Item>
          <Breadcrumbs.Item active>ipsum</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
  );
}

export default App;
