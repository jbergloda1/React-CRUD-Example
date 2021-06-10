import React from "react";
// import "./style.css";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    textBox: '',
    click: (e) => {
      console.log(this.setState({ textBox: e.target.value }));
    },
  };
handleChange(e){
    let value = e.target.value;
    this.setState({ textBox: value});
}
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

class Red extends React.Component {
  render() {
    return (
      <div className="red">
        <label>{this.context.textBox}</label>

        <Blue />
      </div>
    );
  }
}
Red.contextType = AppContext;

const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
      {(context) => (
        <>
          <input
            onChange = {() => context.textBox}
            type="text"
          ></input>
          <button  onClick={context.click}>click</button>
        </>
      )}
    </AppContext.Consumer>
    <Green />
  </div>
);

class Green extends React.Component {
  render() {
    return (
      <div className="green">
        <AppContext.Consumer>
          {(context) => context.textBox}
        </AppContext.Consumer>
      </div>
    );
  }
}

const App1 = () => (
  <AppProvider>
    <Red />
  </AppProvider>
);
export default App1;
