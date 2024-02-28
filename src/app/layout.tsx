// layout.tsx
import React from "react";
import Head from "next/head"; // Importing Head for managing document head
import "./globals.css"; // Importing global styles

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other meta tags and head elements as needed */}
        <title>Your Website Title</title>
        {/* Add your website title here */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
