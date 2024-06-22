import React from 'react';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {config_message: "↓↓↓ここに表示されます↓↓↓", message: "生成された文章"};
  }
  
  
  handClickConcider(sendedMessage){
    this.setState({message: sendedMessage});
  }


  handClickReset(){
    this.setState({message: "生成された文章"})
  }
  
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => {this.handClickConcider("生成されました。")}}>考える</button>
        <button onClick={() => {this.handClickReset()}}>リセット</button>
        <h2>{this.state.config_message}</h2>
        <p>{this.state.message}</p>
      </div>
    );
  };
}


export default App;