import React, { useEffect, useRef } from "react";
import * as Styled from "./Home.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";
import {
  SiAdobe,
  SiCss3,
  SiEclipseide,
  SiFastapi,
  SiHandlebarsdotjs,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiReact,
  SiReacttable,
  SiRedux,
  SiSass,
  SiSlides,
  SiSubversion,
  SiThymeleaf,
  SiTypescript,
  SiVisualstudiocode,
  SiWordpress,
} from "react-icons/si";
import { GiZeppelin } from "react-icons/gi";
import { AiFillGithub, AiFillShop, AiFillWechat } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);
const Skill = () => {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <Styled.LineSection id="Skill">
      <Styled.LineInner>
        <Title text="my/skills" />
        <Styled.SkillBox ref={fadeRef}>
          <Styled.Flex>
            <div>
              <Styled.SkillTitle>스킬</Styled.SkillTitle>
              <ul>
                <Styled.SkillLi>
                  <SiJavascript />
                  Javascript
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiTypescript />
                  Typescript
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiJquery />
                  Jquery
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiCss3 />
                  css
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiSass />
                  scss
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiWordpress />
                  Wordpress
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <AiFillShop />
                  Godo, Cafe24
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiThymeleaf />
                  Thymeleaf template
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiHandlebarsdotjs />
                  Handlebas template
                </Styled.SkillLi>
              </ul>
            </div>
            <div>
              <Styled.SkillTitle>프론트엔드</Styled.SkillTitle>
              <ul>
                <Styled.SkillLi>
                  <SiReact />
                  React.js
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiNextdotjs />
                  Next.js
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiRedux />
                  Redux
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiReacttable />
                  React-Query
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiFastapi />
                  MSW
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiSlides />
                  React-slick
                </Styled.SkillLi>
              </ul>
            </div>
            <div>
              <Styled.SkillTitle>업무 툴</Styled.SkillTitle>
              <ul>
                <Styled.SkillLi>
                  <AiFillGithub />
                  Git{" "}
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiSubversion />
                  Svn{" "}
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiAdobe />
                  Adobe All{" "}
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiVisualstudiocode />
                  Vscode{" "}
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiEclipseide />
                  Eclips
                </Styled.SkillLi>
              </ul>
            </div>
            <div>
              <Styled.SkillTitle>협업 툴</Styled.SkillTitle>
              <ul>
                <Styled.SkillLi>
                  <GiZeppelin />
                  Zeplin
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <AiFillWechat />
                  Jandi
                </Styled.SkillLi>
              </ul>
            </div>
          </Styled.Flex>
        </Styled.SkillBox>
      </Styled.LineInner>
    </Styled.LineSection>
  );
};

export default Skill;
