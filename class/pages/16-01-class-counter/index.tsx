import { Component } from "react";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log("카운터를 클릭하셨습니다.");
  };

  // 기능을 보여줄 공간
  render() {
    return (
      <div>
        <div>현재 카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
      </div>
    );
  }
}
