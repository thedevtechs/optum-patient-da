import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/fontawesome.min.css';

import '../public/css/style.scss';
import '../public/css/components/auxiliary.styles.scss';
import '../public/css/components/go-to-top.styles.css';
import '../public/css/components/button.styles.scss';
import '../public/css/components/buttons-directory.styles.scss';
import '../public/css/components/cta-footer.styles.scss';
import '../public/css/components/cta-provider.styles.scss';
import '../public/css/components/divider-arrow-down.styles.scss';
import '../public/css/components/document-gallery-item.styles.scss';
import '../public/css/components/document-gallery.styles.scss';
import '../public/css/components/faq-accordion.styles.scss';
import '../public/css/components/footer.styles.scss';
import '../public/css/components/header.styles.scss';
import '../public/css/components/homepage-gallery.styles.scss';
import '../public/css/components/image-with-paragraphs.style.scss';
import '../public/css/components/interior-50-50.styles.scss';
import '../public/css/components/locations-row.styles.scss';
import '../public/css/components/navigation.styles.scss';
import '../public/css/components/provider-gallery.styles.scss';
import '../public/css/components/text-section-button.styles.scss';
import '../public/css/components/UAT-form.styles.scss';
import '../public/css/components/members-resources.styles.scss';
import '../public/css/components/circular-cards-home.styles.scss';
import '../public/css/components/middle-marquee.styles.scss';
import '../public/css/components/marquee-blog.styles.scss';
import '../public/css/components/blog.styles.scss';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import FullScreenLoader from '../components/Layouts/FullScreenLoader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <FullScreenLoader></FullScreenLoader>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp
