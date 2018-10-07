import React from 'react'; // mandatory
import ReactDOM from 'react-dom';  //mandatory

class HelloUser extends React.Component {   
  constructor(props) {
    super(props)

    this.state = {               //1. this.state (username) 
      username: 'tylermcginnis'     //defaut username to be disp
    }

    this.handleChange = this.handleChange.bind(this)  //5.to use it ouside constructor
  }
  handleChange(e) {           //6.called outside constructor with arg(e)
    this.setState({
      username: e.target.value        //7.target value=what val user enters, hence above username will get changed to target value
    })
  }
  render() {
    return (
      <div>
        Hello {this.state.username} <br /> 
        Change Name:
        <input         //2.input box 
          type="text"  
          value={this.state.username}     //3.default to be disp after hello
          onChange={this.handleChange} //4.onchange calls handle change
        />
      </div>
    )
  }
}
ReactDOM.render(<HelloUser />, document.getElementById('root'));//mandatory
