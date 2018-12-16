import React from 'react';
import Example from '../lib';
import { SecondExample } from '../lib';
import { Alert } from '../lib';

function App () {
  return (
      <div>
        <Example/>
        <SecondExample/>
        <Alert dismissable>lorem</Alert>
        <Alert dismissable type="brand">lorem</Alert>
        <Alert dismissable type="info">lorem</Alert>
        <Alert dismissable type="warning">lorem</Alert>
        <Alert dismissable type="success">lorem</Alert>
        <Alert dismissable type="error">lorem</Alert>
      </div>
  );
}

export default App;
