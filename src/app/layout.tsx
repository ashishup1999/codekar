"use client";
import StyledComponentsRegistry from "@/app/registry";
import "@/app/global.css";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/constants/CommonConstants";
import BasicDetailsContext from "@/context/BasicDetailsContext";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const [comp, setComp] = useState(<></>);

  useEffect(() => {
    let isLoggedIn;
    if (typeof window !== "undefined") {
      isLoggedIn =
        localStorage.getItem("userName") || sessionStorage.getItem("userName");
    }
    if (!PUBLIC_ROUTES.includes(pathName) && !isLoggedIn) {
      router.replace("/login");
    } else {
      setComp(
        <BasicDetailsContext>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </BasicDetailsContext>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <meta name="description" content="Code kar befikar"></meta>
      <head>
        <title>CodeKar</title>
      </head>
      <body>{comp}</body>
    </html>
  );
}
