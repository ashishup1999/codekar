"use client";
import "@/app/global.css";
import StyledComponentsRegistry from "@/app/registry";
import Loader from "@/components/Loader";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { Sansita } from "next/font/google";
import BasicDetailsContext from "@/context/BasicDetailsContext";
import SizeProvider from "@/context/SizeProvider";

export const sansitaFont = Sansita({ weight: "400", preload: false });

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
        href={COMMON_IMAGES.logoWhite.src}
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={COMMON_IMAGES.logoWhitePng.src}
      ></link>
      <link
        rel="shortcut icon"
        href={COMMON_IMAGES.logoWhitePng.src}
        type="image/x-icon"
      ></link>
      <head>
        <title>Codepulse</title>
      </head>
      <body className={sansitaFont.className}>
        <SizeProvider>
          <BasicDetailsContext>
            <StyledComponentsRegistry>
              <Loader />
              {children}
            </StyledComponentsRegistry>
          </BasicDetailsContext>
        </SizeProvider>
      </body>
    </html>
  );
}
