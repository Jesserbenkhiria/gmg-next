import React, { useEffect } from "react";
import { FooterThree, Header, HeaderFour, HeaderSix, HeaderThree, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import BlogArea from "./blog-area";

const Blog = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour/>
      <Breadcrumb title={"Blog & Article"} />
      <BlogArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Blog;
