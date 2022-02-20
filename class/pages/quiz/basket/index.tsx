import { useState } from "react";
import { useEffect } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

export default function BasketPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const Incart = JSON.parse(localStorage.getItem("save") || "[]");
    setCart(Incart);
    console.log(Incart);
  }, []);

  return (
    <div>
      {cart.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
