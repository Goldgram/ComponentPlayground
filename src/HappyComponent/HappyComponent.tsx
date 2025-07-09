import React from "react";

interface HappyComponentProps {
  title: string;
}

export const HappyComponent = ({ title }: HappyComponentProps) => {
  const [count, setCount] = React.useState(1);

  const doubleCount = () => {
    setCount((current) => current + current);
  };

  return (
    <div className="p-4 bg-red-100">
      <p className="undeline pb-1">HappyComponent</p>
      <p className="pb-1">Title: {title}</p>
      <p className="pb-1">Count: {count}</p>
      <button
        className="bg-green-300 px-4 py-1 rounded cursor-pointer"
        onClick={doubleCount}
      >
        Double now
      </button>
    </div>
  );
};
