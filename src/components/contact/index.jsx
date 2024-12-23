import React, { useEffect } from "react";
import { FooterThree, HeaderFour, HeaderSix, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ContactArea from "./contact-area";





const Contact = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={"Contact"} />
      <ContactArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Contact;
