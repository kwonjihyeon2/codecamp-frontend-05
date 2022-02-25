import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PreloadPage() {
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp";
    //<img />와 동일
    img.onload = () => {
      setImgTag(img);
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
      ================== 이미지 프리 로드 ==================
      <div ref={divRef}></div>
      <button onClick={onClickImagePreLoad}>이미지 프리 로드</button>
      ================== 이미지 일반 로드 ==================
      {loaded && (
        <img src="https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp" />
      )}
      <button onClick={onClickImageLoad}>이미지 일반 로드</button>
    </div>
  );
}
