import React, { useEffect } from "react";
import {
  FooterThree,
  Header,
  HeaderFour,
  HeaderSix,
  HeaderThree,
  Wrapper,
} from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import BlogArea from "./blog-area";
import { useTranslation } from "react-i18next";

const Blog = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={t("offices.title")} />
      <BlogArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Blog;
