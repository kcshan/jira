import React from "react";
import { useArray, useMount } from "./utils";

export const TSReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 30 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {
    //期待这里报错
    //console.log(value.notExist);
    //期待这里报错'age' is missing
    //add({ name: 'david' });
    //期待这里报错：Argument of type 'string' is not assignable to
    //removeIndex('123');
  });

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => (
        <div key={index}>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
