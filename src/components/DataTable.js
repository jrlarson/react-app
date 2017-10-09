import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ReactTable from 'react-table'
import 'react-table/react-table.css'

const init_columns = [{
  Header: 'Artist Name',
  accessor: 'artistName' // String-based value accessors!
}, {
  Header: 'Genre',
  accessor: 'primaryGenreName'
}, {
  Header: 'iTunes URL',
  accessor: 'artistLinkUrl' 
}];

const DataTable = ({data, columns = init_columns}) => <ReactTable data={data} columns={columns} />

function mapStateToProps(state) {
  return {
    data: state.data
  };
}
  
DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
}

export default connect(mapStateToProps)(DataTable);