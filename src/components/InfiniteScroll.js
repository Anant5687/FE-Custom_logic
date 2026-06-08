import { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const ref = useRef();
  const [divs, setDivs] = useState([1, 2]);

  useEffect(() => {
    const container = ref.current;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setDivs((pre) => [...pre, pre.length + 1]);
      }
    };

    if (container) container.addEventListener("scroll", handleScroll);

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        border: "1px solid black",
        padding: "4px",
        height: "80vh",
        overflowY: "auto",
      }}
    >
      {divs?.map((ele) => (
        <div
          key={ele}
          style={{ border: "1px solid red", marginTop: "4px", height: "70vh" }}
        ></div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
