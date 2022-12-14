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
              <ul>
                <Styled.SkillLi>
                  <SiJavascript />
                  Javascript
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiJquery />
                  Jquery
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiCss3 />
                  css / scss
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiReact />
                  React.js
                </Styled.SkillLi>
              </ul>
            </div>
            <div>
              <ul>
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
              </ul>
            </div>
            <div>
              <ul>
                <Styled.SkillLi>
                  <AiFillGithub />
                  Git
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiSubversion />
                  SVN
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <SiAdobe />
                  Adobe All
                </Styled.SkillLi>
                <Styled.SkillLi>
                  <GiZeppelin />
                  Zeplin
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
