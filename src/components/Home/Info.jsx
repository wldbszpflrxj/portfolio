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
            <p>
              안녕하세요, <br />
              웹에이전시 스타트업에 웹퍼블리셔로 7년간 근무하면서 다양한
              솔루션과 템플릿 엔진 기반으로 <br />약 300개 이상의 웹사이트를
              제작하고 운영 및 유지보수하였습니다. <br />
              작은 규모의 회사에 개발팀의 첫 번째 팀원으로 입사하여 프로젝트
              단가가 20배 이상으로 상승하고 <br />
              10명 이상 규모의 개발팀으로 성장할 때까지 필요한 조직 운영과
              역량을 책임졌던 경험이 있습니다. <br />
              반복적인 업무를 최소화하고 비효율적인 프로세스를 개선하기 위해
              팀의 코딩 가이드를 설정해 <br />
              내부 CMS 스킨을 제작하였고 모든 자료를 매뉴얼로 제작하여 문서화로
              만든 경험이 있습니다.
            </p>
            <p>
              프론트엔드(React) 개발자로 성장하기 위해 팀을 이루어 기업에서
              제공한 <br />
              다양한 실무 과제를 진행하는 프로젝트에 참여하여 다양한
              라이브러리를 접하고 <br />
              현업에서 요구하는 기술에 대한 이해와 학습을 진행하였습니다.
            </p>
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
