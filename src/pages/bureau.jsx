import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

import { serverSideTranslations } from "next-i18next/dist/commonjs/serverSideTranslations";
import dynamic from "next/dynamic";

const BlogMain = dynamic(() => import("../components/blog"), { ssr: false });

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])), // Load the 'common' namespace
  },
});

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Nos Bureau"} />
      <BlogMain />
    </Wrapper>
  );
};

export default index;
