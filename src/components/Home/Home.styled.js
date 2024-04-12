import styled from "@emotion/styled";

const IntroSection = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  > div {
    justify-content: center;
    height: 100vh;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  flex: 1 1 0;
`;
const IntroTitleWrapper = styled.div`
  p {
    font-size: 26vw;
  }
`;

const InfoSection = styled.section`
  margin-top: 80vh;
  position: relative;
  z-index: 10;
  padding: 0 5.3rem;
  > div {
    justify-content: space-around;
    padding: 10rem 7.1rem;
    background: #fff;
    margin: 0 auto;
    max-width: 1600px;
  }
  @media (max-width: 989px) {
    padding: 0 30px;
    > div {
      padding: 80px 30px;
    }
  }
`;
const LeftBox = styled.div`
  width: 30%;
  text-align: Center;
  @media (max-width: 989px) {
    width: 20%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  line-height: 0;
`;
const RightBox = styled.div`
  h2 {
    font-size: 3vw;
    line-height: 1.4;
  }
  p {
    font-size: 1.5vw;
    margin: 0.1em 0;
  }
  @media (max-width: 989px) {
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const LineSection = styled.section`
  margin-top: 100vh;
  background: #fff;
  position: relative;
  z-index: 10;
  padding: 0 5.3rem;
  @media (max-width: 989px) {
    padding: 0 30px;
  }
`;
const LineInner = styled.div`
  padding: 10rem 0 0;
  @media (max-width: 989px) {
    padding: 5rem 0 0;
  }
`;
const Line = styled.div`
  font-size: 10vw;
  line-height: 1.2;
  > span {
    white-space: nowrap;
    display: block;
  }
`;
const BoldLine = styled.span`
  height: 0.3rem;
  margin: 0 5.3rem;
  top: 0.6rem;
  width: calc(100% - 10rem);
  background-color: #1a1a1a;
  @media (max-width: 989px) {
    padding: 0 30px;
  }
`;
const LineSubText = styled.p`
  margin: 10rem 0;
  text-align: right;
  max-width: 1500px;
`;
const BigTitle = styled.h2`
  margin: 0;
`
const BigText = styled.p`
  font-size: 20vw;
  line-height: 0.9;
  font-family: beastly, sans-serif;
  display: block;
`;
const SkillBox = styled.div`
  max-width: 1280px;
  margin: 10rem auto 0;
  > div {
    justify-content: space-between;
    align-items: baseline;
  }
  @media (max-width: 989px) {
    margin: 5rem auto 0;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
    > div {
      flex-direction: column;
    }
  }
`;
const SkillTitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.1rem;
  font-weight: bold;
`;
const SkillLi = styled.li`
  font-size: 1.8rem;
  letter-spacing: 0.05em;
  svg {
    margin-right: 0.6rem;
    vertical-align: middle;
  }
  @media (max-width: 989px) {
    font-size: 1.4rem;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const GallerySection = styled.section`
  background-color: #fff;
  position: relative;
  z-index: 10;
  padding: 0 5.3rem;
  @media (max-width: 989px) {
    padding: 0 30px;
  }
`;
const GalleryInner = styled.div`
  padding: 10vw 0;
  @media (max-width: 989px) {
    padding: 80px 0;
  }
`;
const Gallery = styled.div``;
const GalleryList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 5rem;
    @media (max-width: 989px) {
        margin-top: 4rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
        margin-top: 30px;
        grid-template-columns: repeat(1, 1fr);
    }
`;
const GalleryCard = styled.div`
  border: 1px solid #000;
  padding: 2.3rem;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;
const GalleryTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 0.6rem;
  @media (max-width: 989px) {
    font-size: 1.4rem;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
const GalleryDescUl = styled.ul`
  margin-left: 1em;
`;
const GalleryDesc = styled.li`
  font-size: 1.1rem;
  list-style: outside;
  margin-left: 0.6rem;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const GalleryStack = styled.p`
  margin: 0.9rem 0;
  span {
    padding: 5px 0.6rem;
    border-radius: 0.6rem;
    background-color: #000;
    color: #fff;
    font-size: 0.9rem;
    margin: 0 0.6rem 5px 0;
    letter-spacing: 0;
    display: inline-block;
  }
  @media (max-width: 767px) {
    span {
      font-size: 13px;
    }
  }
`;
const GitLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #000;
  margin-right: 0.9rem;
  svg {
    margin-right: 2px;
    vertical-align: middle;
  }
`;

export {
  BigText,
  BigTitle,
  Flex,
  Gallery,
  GalleryCard,
  GalleryInner,
  GalleryList,
  GalleryDescUl,
  GallerySection,
  InfoSection,
  IntroSection,
  IntroTitleWrapper,
  LeftBox,
  Line,
  LineInner,
  LineSection,
  LineSubText,
  RightBox,
  SkillBox,
  SkillLi,
  SkillTitle,
  BoldLine,
  ImageWrapper,
  GalleryDesc,
  GalleryStack,
  GalleryTitle,
  GitLink,
};
