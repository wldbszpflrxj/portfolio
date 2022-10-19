import React, { useEffect, useRef } from "react";
import * as Styled from "./Home.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";
import profile from "@/assets/images/profile.png";

gsap.registerPlugin(ScrollTrigger);
const Info = () => {
  const fadeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeBox = fadeRef.current;
      gsap.fromTo(
        fadeBox,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: fadeBox,
            start: "top center",
          },
        }
      );

      gsap.utils.toArray(".lineEffect").forEach((section, index) => {
        const [x, xEnd] = index % 2 ? ["100%", "-100%"] : ["-100%", "100%"];
        gsap.fromTo(
          section,
          { x },
          { x: xEnd, scrollTrigger: { trigger: section, scrub: 0.5 } }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Styled.IntroSection>
        <Styled.Flex>
          <Styled.IntroTitleWrapper>
            <Title text="Hello" />
          </Styled.IntroTitleWrapper>
        </Styled.Flex>
      </Styled.IntroSection>
      <Styled.InfoSection ref={fadeRef} id="About">
        <Styled.Flex>
          <Styled.LeftBox>
            <Styled.ImageWrapper>
              <img src={profile} alt="프로필 사진" />
            </Styled.ImageWrapper>
          </Styled.LeftBox>
          <Styled.RightBox>
            <h2>
              꾸준히 성장하고 싶은 <br />
              프론트엔드 개발자 변지윤입니다.
            </h2>
            <p>
              빠르고 정확하게 이해할 수 있는 코드를 작성하기 위해 노력합니다.
            </p>
            <p>재사용성과 유지보수를 고려하는 코드 설계를 위해 고민합니다.</p>
            <p>
              문서화를 통해 업무 효율을 높이고 생산적으로 일하는 것을
              좋아합니다.
            </p>
            <p>지식과 코드를 공유하고 커뮤니케이션 하는 것을 좋아합니다.</p>
          </Styled.RightBox>
        </Styled.Flex>
      </Styled.InfoSection>
      <Styled.LineSection>
        <Styled.LineInner>
          <Styled.Line>
            <span className="lineEffect">Front end — Developer</span>
            <Styled.BoldLine></Styled.BoldLine>
            <span className="lineEffect">Front end — Developer</span>
          </Styled.Line>
        </Styled.LineInner>
      </Styled.LineSection>
    </>
  );
};

export default Info;
