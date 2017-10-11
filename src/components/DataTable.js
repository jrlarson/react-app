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
  Header: 'iTunes Link',
  accessor: 'artistLinkUrl',
  Cell: row => (
    <div>
      <a href={row.value} target='_blank'>Go</a>
    </div>
  )
}];

const DataTable = ({data, columns = init_columns}) => 
  <ReactTable data={data} columns={columns} defaultPageSize='10'
    className='-striped -highlight' defaultSorted={[
      {
        id: 'artistName',
        desc: false
      }
    ]}
  />

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