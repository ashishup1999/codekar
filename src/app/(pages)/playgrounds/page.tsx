"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import Plus from "@/components/Plus";
import { usePathname } from "next/navigation";
import { HEADER_TO_GRADIENT } from "@/constants/CommonConstants";
import usePg from "@/hooks/usePg";
import { PgDiv, PgWrapper } from "./page.styles";
import PGCard from "@/components/PgCard";

const Playgrounds = () => {
  const pathName = usePathname();
  const secName = pathName.split("/")[1];
  const { pgs } = usePg();

  return (
    <PgWrapper>
      <Plus grad={HEADER_TO_GRADIENT[secName]} />
      <PgDiv>
        {pgs.map((obj) => (
          <PGCard key={obj?.id} {...obj} />
        ))}
      </PgDiv>
    </PgWrapper>
  );
};

export default Playgrounds;
