import React, { useEffect, useRef } from "react";
import * as Styled from "./Home.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";
import { AiOutlineLink } from "react-icons/ai";
import { projectList1, projectList2 } from "./projectList";

gsap.registerPlugin(ScrollTrigger);
const Project = () => {
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

  const Stacks = ({ stacks }) => {
    return stacks.map((stack) => <span key={stack}>{stack}</span>);
  };

  const Desc = ({ desc }) => {
    return desc.map((desc, idx) => (
      <Styled.GalleryDesc key={idx}>{desc}</Styled.GalleryDesc>
    ));
  };

  return (
    <Styled.GallerySection id="Portfolio">
      <Styled.GalleryInner>
        <Title text="show/project" />
        <Styled.GalleryList>
          {projectList1.map((list, idx) => (
            <Styled.GalleryCard key={idx}>
              <Styled.GalleryTitle>{list.title}</Styled.GalleryTitle>
              <Styled.GalleryDescUl>
                <Desc desc={list.desc} />
              </Styled.GalleryDescUl>
              <Styled.GalleryStack>
                <Stacks stacks={list.stack} />
              </Styled.GalleryStack>
              {list.homepage && (
                <Styled.GitLink href={list.homepage} target="_blank">
                  <AiOutlineLink />
                  홈페이지
                </Styled.GitLink>
              )}
              {list.git && (
                <Styled.GitLink href={list.git} target="_blank">
                  <AiOutlineLink />
                  깃허브
                </Styled.GitLink>
              )}
            </Styled.GalleryCard>
          ))}
        </Styled.GalleryList>
        <Title text="side/project" />
        <Styled.GalleryList>
          {projectList2.map((list, idx) => (
            <Styled.GalleryCard key={idx}>
              <Styled.GalleryTitle>{list.title}</Styled.GalleryTitle>
              <Styled.GalleryDescUl>
                <Desc desc={list.desc} />
              </Styled.GalleryDescUl>
              <Styled.GalleryStack>
                <Stacks stacks={list.stack} />
              </Styled.GalleryStack>
              {list.homepage && (
                <Styled.GitLink href={list.homepage} target="_blank">
                  <AiOutlineLink />
                  홈페이지
                </Styled.GitLink>
              )}
              {list.git && (
                <Styled.GitLink href={list.git} target="_blank">
                  <AiOutlineLink />
                  깃허브
                </Styled.GitLink>
              )}
            </Styled.GalleryCard>
          ))}
        </Styled.GalleryList>
      </Styled.GalleryInner>
    </Styled.GallerySection>
  );
};

export default Project;
