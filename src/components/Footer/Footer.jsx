import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import Title from "../Title/Title";
import * as Styled from "./Footer.styled";
import resumUrl from "@/assets/download/MyNameIs_ByeonJiYoon.pdf";

const Footer = () => {
  return (
    <Styled.FooterWrapper id="Contact">
      <Styled.FooterInner>
        <Styled.FooterBigBox>
          <Styled.FooterTitle>
            <Title text="Let's/meet" />
          </Styled.FooterTitle>
          <Styled.FooterInfo>
            <Styled.FooterButton href="tel:01073245836">
              Call me. <span>010.7324.5836</span>
            </Styled.FooterButton>
            <Styled.FooterButton href="mailto:wldbszp@gmail.com">
              Email me. <span>wldbszp@gmail.com</span>
            </Styled.FooterButton>
            <Styled.FooterButton href={resumUrl} target="_blank">
              이력서 <AiOutlineLink />
            </Styled.FooterButton>
          </Styled.FooterInfo>
        </Styled.FooterBigBox>
      </Styled.FooterInner>
    </Styled.FooterWrapper>
  );
};

export default Footer;
