import React from "react";
import {
  OptionButton,
  OptionIcon,
  OptionWrapper,
} from "@/components/OptionCards.styles";
import { useRouter } from "next/navigation";

const OptionCards = ({
  imgSrc,
  imgAlt,
  toRoute,
  themeColor,
  buttonTitle,
}: {
  imgSrc: string;
  imgAlt: string;
  toRoute: string;
  themeColor: string;
  buttonTitle: string;
}) => {
  const router = useRouter();
  const onClickNavigation = () => {
    router.push(toRoute);
  };

  return (
    <OptionWrapper>
      <OptionIcon src={imgSrc} alt={imgAlt} />
      <OptionButton bgcolor={themeColor} onClick={onClickNavigation}>
        {buttonTitle}
      </OptionButton>
    </OptionWrapper>
  );
};

export default OptionCards;
