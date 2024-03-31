"use client";
import "@/app/global.css";
import StyledComponentsRegistry from "@/app/registry";
import Loader from "@/components/Loader";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import BasicDetailsContext from "@/context/BasicDetailsContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="description" content="Code kar befikar"></meta>
      <link
        rel="icon"
        type="image/x-icon"
        href={COMMON_IMAGES.logoWhitePng.src}
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={COMMON_IMAGES.logoWhite.src}
      ></link>
      <link rel="icon" sizes="32x32" href={COMMON_IMAGES.logoWhite.src}></link>
      <head>
        <title>CodeKar</title>
      </head>
      <body>
        <BasicDetailsContext>
          <StyledComponentsRegistry>
            <Loader />
            {children}
          </StyledComponentsRegistry>
        </BasicDetailsContext>
      </body>
    </html>
  );
}
