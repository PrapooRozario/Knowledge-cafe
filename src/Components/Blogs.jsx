import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, []);
  return <div></div>;
};

export default Blogs;
