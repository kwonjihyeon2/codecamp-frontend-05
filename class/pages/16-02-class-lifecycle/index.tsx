import { Component } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("render된 후! 처음 한번만 그려짐, 다시 렌더될 때는 update");
    //input태그 선택 후 포커스 깜빡거리게..
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐 - rerender는 여기서");
  }

  componentWillUnmount() {
    console.log("이 대화방에서 나가가겠습니다.");
    //나가기 전 마지막 기능들(채팅방 ? backend로 해당 채팅방에서 나간다는 동작을 알림)
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log("카운터를 클릭하셨습니다.");
  };

  onclickMove = () => {
    Router.push("/16-01-class-counter");
  };

  // 기능을 보여줄 공간
  render() {
    return (
      <div>
        <div>현재 카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        <button onClick={this.onclickMove}>나가기</button>
      </div>
    );
  }
}
