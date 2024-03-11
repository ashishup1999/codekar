"use client";
import StyledComponentsRegistry from "@/app/registry";
import "@/app/global.css";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/constants/CommonConstants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  let isLoggedIn;
  if (typeof window !== "undefined") {
    isLoggedIn =
      localStorage.getItem("userName") || sessionStorage.getItem("userName");
  }
  if (!PUBLIC_ROUTES.includes(pathName) && !isLoggedIn) {
    router.replace("/login");
    return <></>;
  }
  return (
    <html lang="en">
      <meta name="description" content="Code kar befikar"></meta>
      <head>
        <title>CodeKar</title>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
