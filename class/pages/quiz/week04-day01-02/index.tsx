import { useRef } from "react";
import { useEffect } from "react";

export default function ChangePage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div>
      비밀번호 : <input type="text" ref={inputRef} />
    </div>
  );
}
