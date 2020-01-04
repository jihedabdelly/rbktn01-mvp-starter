import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>

  <div id="one">
    <h1 >Register {console.log(props.items)}</h1>

    {/* There are { props.items.length } items. */}
    {<ListItem />}
  </div>
  <div id="two">
    <h1>Register with social account</h1>
    <img src="https://www.fourjay.org/fpng/f/36-368190_facebook-icon-png-transparent-png.png" /><br></br>
    <img src="https://p7.hiclipart.com/preview/344/344/59/google-logo-g-suite-google.jpg" /><br></br>
    <img src="https://i7.pngguru.com/preview/708/311/673/icon-logo-clip-art-twitter-logo-png.jpg" />

  </div>

  </div>
)

export default List;