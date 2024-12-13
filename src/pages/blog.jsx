import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import BlogMain from '../components/blog';
import { serverSideTranslations } from 'next-i18next/dist/commonjs/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])), // Load the 'common' namespace
  },
});
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog'} />
      <BlogMain/>
    </Wrapper>
  );
};

export default index;