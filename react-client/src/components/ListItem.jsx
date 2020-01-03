import React from 'react';

const ListItem = (props) => (

  // <div>

  //   { props.item.description }
  // </div>

  <form action="/" method="post">
    <label>
      UserName:
      <input type="text" name="name" placeholder="Enter your name" required/>
    </label><br/><br/>
    <label>
      Email:
      <input type="email" name="email" placeholder="Enter your email" required/>
    </label><br/><br/>
    <label>
      Password:
      <input type="password" name="password" placeholder="Enter your password" required/>
    </label><br/><br/>

    <input type="submit" value="Enter" />
  </form>

)

export default ListItem;