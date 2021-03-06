import React from 'react';
import Input from './containers/Input';
import DataTable from './components/DataTable';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';

const App = () =>
  <div>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">NM Code Exercise App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
    <Jumbotron>
      <Grid>
        <h1>iTunes Artist Search</h1>
        <p>
          <div>
            <Input />
          </div>
          <div>
            <DataTable />
          </div>
        </p>
      </Grid>
    </Jumbotron>
  </div>;

export default App;


