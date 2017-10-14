import { DataTable } from '../DataTable';
import React from 'react';
import { render } from 'enzyme';
import { mapStateToProps } from '../DataTable';

const initialize_columns = [{
  Header: 'Artist Name',
  accessor: 'artistName', // String-based value accessors!
  Cell: row => (
    <div data={row.value}>{row.value}</div>
  )
}, {
  Header: 'Genre',
  accessor: 'primaryGenreName'
}, {
  Header: 'iTunes Link',
  accessor: 'artistLinkUrl',
  Cell: row => (
    <div>
      <a href={row.value} target='_blank' className='item-link'>Go</a>
    </div>
  )
}];

const initial_data = [
  {
    wrapperType:'artist',
    artistType:'Artist',
    artistName:'Brooks de Wetter-Smith',
    artistLinkUrl:'https://itunes.apple.com/us/artist/brooks-de-wetter-smith/id166008982?uo=4',
    artistId:166008982,
    amgArtistId:1290411,
    primaryGenreName:'Classical',
    primaryGenreId:5
  },
  {
    wrapperType:'artist',
    artistType:'Artist',
    artistName:'Wetter',
    artistLinkUrl:'https://itunes.apple.com/us/artist/wetter/id405254940?uo=4',
    artistId:405254940,
    amgArtistId:3337309,
    primaryGenreName:'K-Pop',
    primaryGenreId:51
  }
];


// eslint-disable-next-line
test('DataTable component renders a Table ', () => {
  const tableProps = {
    data: initial_data,
    columns: initialize_columns,
  }

  const table = render( <DataTable {...tableProps} />);
  expect(table.find('.item-link').length).toEqual(2);
  expect(table.find('[data=Wetter]').length).toEqual(1);
});

// eslint-disable-next-line
test('mapStateToProps: should return defaults  if values not available in state ', () => {
 
  const expectedDefaults = { data:[
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
  ]
  };
    
  expect(mapStateToProps({})).toEqual(expectedDefaults);
});
