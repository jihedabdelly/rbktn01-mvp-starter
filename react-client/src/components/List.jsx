import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h1>Register {console.log(props.items)}</h1>

    {/* There are { props.items.length } items. */}
    {<ListItem />}
  </div>
)

export default List;