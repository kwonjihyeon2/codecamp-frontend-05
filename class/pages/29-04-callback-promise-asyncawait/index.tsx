import axios from "axios";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    // axios.get("http://numbersapi.com/random?min=1&max=200") 현재방식

    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      //callback함수(res : 매개변수)
      const num = res.target.response.split(" ")[0];

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();

      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log("최종결과값 !!!");
          console.log(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    console.log("1번");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("2번");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("3번");
        const userId = res.data.UserId;
        // prettier-ignore
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`)
      })
      .then((res) => {
        console.log("4번");
        console.log(res);
      });
    console.log("5번!!!!! 마지마아아아악!!!!");
  };

  const onClickAsyncawait = async () => {
    // prettier-ignore
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200")
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    // prettier-ignore
    const res3 = await axios.get(`http://koreanjson.com/posts?userId=${userId}`)
    console.log(res3);
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickAsyncawait}>AsyncAwait 요청하기</button>
    </div>
  );
}
