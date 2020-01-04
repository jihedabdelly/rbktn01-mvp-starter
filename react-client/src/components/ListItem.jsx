 import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      email:"",
      password:""
    }

    this.changeText=this.changeText.bind(this);
    this.submitForm=this.submitForm.bind(this);

  }

  changeText(e){
    this.setState({
      input: e.target.value
    })
  }

  submitForm(e){
    e.preventDefault()
    let data = this.state.input

  }

render() {
  return (

    // <div>

    //   { props.item.description }
    // </div>

    <form action="/input" method="post">
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
      <label>
        Password Again:
        <input type="password" name="password" placeholder="Enter your password again" required/>
      </label><br/><br/>

      <input type="submit" value="Enter" />
    </form>

  )
}
}

export default ListItem;