import React, { useEffect, useRef } from "react";
import * as Styled from "./Title.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ text }) => {
  const titleRef = useRef(null);
  useEffect(() => {
    const target = titleRef.current;
    const ctx = gsap.context(() => {
      gsap.to(target.children, {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.07,
        },
        duration: 0.75,
        scrollTrigger: {
          trigger: target,
          start: "top center",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Styled.BigTitle>
      <Styled.BigText ref={titleRef}>
        {text
          .split("")
          .map((T, idx) =>
            T === "/" ? <br key={idx} /> : <span key={idx}>{T}</span>
          )}
      </Styled.BigText>
    </Styled.BigTitle>
  );
};

export default Title;
