import { useEffect, useRef } from "react";
import { useState } from "react";

export default function ImageLoadPage() {
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //로드되면서 자동으로 이미지 읽어오도록
    const img = new Image();
    img.src =
      "https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp";
    img.onload = () => {
      setImgTag(img);
      //태그 컨트롤하기 위해 ref 이용
    };
  }, []);

  const onClickImagePreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  const onClickImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      ===== 이미지 프리 로드
      <div ref={divRef}></div>
      <button onClick={onClickImagePreLoad}>이미지 프리 로드</button>
      <br />
      ===== 이미지 일반 로드
      {loaded && (
        <img src="https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp" />
      )}
      <button onClick={onClickImageLoad}>이미지 일반 로드</button>
    </div>
  );
}
