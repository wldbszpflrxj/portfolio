import React, { useLayoutEffect, useState } from "react";
import * as Styled from "./Header.styled";
import resumUrl from "@/assets/download/MyNameIs_ByeonJiYoon.pdf";
import { ImProfile } from "react-icons/im";
import { SiNotion } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  const [stick, setStick] = useState(false);
  const offset = 75;
  const handleScroll = () => {
    setStick(window.scrollY > offset);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Styled.HeaderWrapper className={stick ? "stick" : ""}>
      <Styled.HeaderInner>
        <Styled.Nav>
          <Styled.Gnb>
            <Styled.Li>
              <Styled.Logo> {"< / >"}</Styled.Logo>
            </Styled.Li>
          </Styled.Gnb>
          <Styled.Gnb>
            {/* <Styled.Li>
              <Styled.Link href="#About">About</Styled.Link>
            </Styled.Li> */}
            <Styled.Li>
              <Styled.Link href="#Portfolio">포트폴리오</Styled.Link>
            </Styled.Li>
            {/* <Styled.Li>
              <Styled.Link href="#Skill">Skill</Styled.Link>
            </Styled.Li> */}
            <Styled.Li>
              <Styled.Link href="#Contact">연락처</Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link
                href={resumUrl}
                target="_blank"
              >
                이력서
              </Styled.Link>
            </Styled.Li>
            {/* <Styled.Li>
              <Styled.Link
                href="https://www.notion.so/yunizzang/fdf3c3e192de48009529aa223b60e4b6"
                target="_blank"
              >
                <SiNotion />
              </Styled.Link>
              <Styled.Link
                href="https://github.com/wldbszpflrxj"
                target="_blank"
              >
                <AiFillGithub />
              </Styled.Link>
            </Styled.Li> */}
          </Styled.Gnb>
        </Styled.Nav>
      </Styled.HeaderInner>
    </Styled.HeaderWrapper>
  );
};

export default Header;
