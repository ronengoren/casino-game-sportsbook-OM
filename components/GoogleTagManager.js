import React from "react";
import { WebView } from "react-native-web";

const GoogleTagManager = () => {
  const gtmHTML = `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TXS33NR');</script>
    <!-- End Google Tag Manager -->
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: gtmHTML }}
      style={{ width: 0, height: 0 }} // Hide WebView
      javaScriptEnabled={true}
    />
  );
};

export default GoogleTagManager;