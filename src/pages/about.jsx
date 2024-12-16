import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

import { serverSideTranslations } from "next-i18next/dist/commonjs/serverSideTranslations";
import dynamic from "next/dynamic";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])), // Load the 'common' namespace
  },
});

const AboutMain = dynamic(() => import("../components/about"), { ssr: false });

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"About"} />
      <AboutMain />
    </Wrapper>
  );
};

export default index;
