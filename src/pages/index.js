import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Agency Alpha Page"
          description="A react landing page build with Next JS"
        />
        <Banner />
        <Support />
        <PremiumFeature />
        <AppFeature />
        <Dashboard />
        <Pricing />
        <Testimonials />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
