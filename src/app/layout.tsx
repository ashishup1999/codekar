"use client";
import "@/app/global.css";
import StyledComponentsRegistry from "@/app/registry";
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
      <link rel="icon" type="image/x-icon" href={COMMON_IMAGES.logoWhite.src}></link>
      <head>
        <title>CodeKar</title>
      </head>
      <body>
        <BasicDetailsContext>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </BasicDetailsContext>
      </body>
    </html>
  );
}
