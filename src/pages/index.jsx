import { Wrapper } from "../layout";
import SEO from "../components/seo";
import HomeFourMain from "../components/homes/home-4";
import { serverSideTranslations } from "next-i18next/dist/commonjs/serverSideTranslations";


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])), // Load the 'common' namespace
  },
});

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Default"} />
      <HomeFourMain />
    </Wrapper>
  );
}
