import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            config_message: "↓↓↓ここに表示されます↓↓↓", 
            message: "", 
            option1: "man", 
            option2: "15" 
        };
    }

    handClickConcider = async (sendedMessage) => {
      this.setState({message: "考え中..."})
      try {
        const response = await fetch('http://127.0.0.1:5000/concider', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ option1: this.state.option1, option2: this.state.option2 }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            this.setState({ message: data.message});
        } else {
            console.error('Server responded with an error.');
            this.setState({ message: "エラーが発生しました。" });
        }
      } catch (error) {
        console.error('Failed to fetch:', error);
        this.setState({ message: "通信エラーが発生しました。" });
      }
    }

    handClickReset = () => {
        this.setState({ message: "", option1: "", option2: "" });
    }

    handleOption1Change = (e) => {
        this.setState({ option1: e.target.value });
    };

    handleOption2Change = (e) => {
        this.setState({ option2: e.target.value });
    };

    render() {
        return (
            <div>
                <h1>良い訳生成</h1>
                <p>
                    <input 
                        type="radio" 
                        name="option1" 
                        value="man" 
                        checked={this.state.option1 === "man"} 
                        onChange={this.handleOption1Change} 
                    /> 男性
                    <input 
                        type="radio" 
                        name="option1" 
                        value="woman" 
                        checked={this.state.option1 === "woman"} 
                        onChange={this.handleOption1Change} 
                    /> 女性
                </p>
                <p>
                    <input 
                        type="radio" 
                        name="option2" 
                        value="15" 
                        checked={this.state.option2 === "15"} // 文字列として比較
                        onChange={this.handleOption2Change} 
                    /> 15ふん
                    <input 
                        type="radio" 
                        name="option2" 
                        value="30" 
                        checked={this.state.option2 === "30"} // 文字列として比較
                        onChange={this.handleOption2Change} 
                    /> 30ふん
                    <input 
                        type="radio" 
                        name="option2" 
                        value="60" 
                        checked={this.state.option2 === "60"} // 文字列として比較
                        onChange={this.handleOption2Change} 
                    /> 60ふん
                </p>
                <button onClick={() => { this.handClickConcider("生成されました。") }}>考える</button>
                <button onClick={this.handClickReset}>リセット</button>
                <h2>{this.state.config_message}</h2>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default App;
