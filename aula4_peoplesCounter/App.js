import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0
    };


    this.somar = this.somar.bind(this);
    this.sub = this.sub.bind(this);
  }
  
  somar(){
    this.setState({
        number : this.state.number + 1

    });
  }

  sub(){
    this.state.number > 0 ? this.setState({ number : this.state.number - 1}) :  ''
  }


  render(){
    return(
      <View style={{ marginTop: 20 }}>

        <h2 style={{marginLeft: '20%'}}>Contador de Pessoas</h2>
        <h1 style={{marginLeft: '', fontSize: 100, marginLeft: '43%'}}>{this.state.number}</h1>
        
        <Button title="+" onPress={this.somar} color='green'/>
        <Button title="-" onPress={this.sub} color='red'/>

      </View>
    )
  }
}


export default App;