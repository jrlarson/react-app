import _ from 'lodash';
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
      <a href={row.value} target='_blank' >Go</a>
    </div>
  )
}];

const initial_data = [
  {
    wrapperType: 'artist',
    artistType: 'Artist',
    artistName: '__',
    artistLinkUrl: '#',
    artistId: 0,
    amgArtistId: 0,
    primaryGenreName: '__',
    primaryGenreId: 0
  }
];

export const DataTable = ({data, columns = init_columns}) => 
  <ReactTable data={data} columns={columns} defaultPageSize='10'
    className='-striped -highlight' defaultSorted={[
      {
        id: 'artistName',
        desc: false
      }
    ]}
  />

export const mapStateToProps = (state) => {
  return {
    data: _.get(state, 'data', initial_data)
  };
}
  
DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
}

export default connect(mapStateToProps)(DataTable);