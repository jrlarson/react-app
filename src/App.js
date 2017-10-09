import React from 'react';
import PropTypes from 'prop-types';
import Input from './containers/Input';
import DataTable from './components/DataTable'

const App = () =>
  <div>
    <h1>React App sample</h1>
    <div>
      <Input />
    </div>
    <div>
      <DataTable />
    </div>
  </div>;

export default App;
