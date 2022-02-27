export default function PromiseAllPage() {
  const onClickPromise = async () => {
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 5000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 5000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 5000);
    });
    console.log(result3);
  };

  const onClickPromiseAll = async () => {
    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 5000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 5000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 5000);
    //   }),
    // ]);

    const classmates = ["철수", "영희", "훈이"];
    const results = await Promise.all(
      classmates.map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("철수");
            }, 3000);
          })
      )
    );
    console.log(results);
  };

  return (
    <div>
      <button onClick={onClickPromise}>시작하기</button>
      <button onClick={onClickPromiseAll}>promiseAll 시작하기</button>
    </div>
  );
}
