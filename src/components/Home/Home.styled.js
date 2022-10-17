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
  padding: 0 4.42vw;
  > div {
    justify-content: space-around;
    padding: 8.85vw 0;
    background: #fff;
    margin: 0 auto;
    max-width: 1080px;
  }
`;
const LeftBox = styled.div`
  width: 30%;
  text-align: Center;
`;
const ImageWrapper = styled.div`
  line-height: 0;
`;
const RightBox = styled.div`
  h2 {
    font-size: 1.5vw;
  }
  p {
    font-size: 1vw;
  }
`;

const LineSection = styled.section`
  background: #8e93ff;
  position: relative;
  z-index: 10;
  padding: 0 4.42vw;
`;
const LineInner = styled.div`
  padding: 9vw 0;
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
  height: 0.3vw;
  margin: 0 4.5vw;
  top: 0.5vw;
  width: calc(100% - 9vw);
  background-color: #1a1a1a;
`;
const LineSubText = styled.p`
  margin: 9vw 0;
  text-align: right;
  max-width: 1500px;
`;
const BigTitle = styled.h2``;
const BigText = styled.p`
  font-size: 20vw;
  line-height: 0.9;
  font-family: beastly, sans-serif;
  display: block;
`;
const SkillBox = styled.div`
  max-width: 1280px;
  margin: 9vw auto 0;
  > div {
    justify-content: space-between;
    align-items: baseline;
  }
`;
const SkillTitle = styled.p`
  font-size: 1.5vw;
  margin-bottom: 1vw;
  font-weight: bold;
`;
const SkillLi = styled.li`
  font-size: 1.5vw;
  letter-spacing: 0.05em;
  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

const GallerySection = styled.section`
  background-color: #fff;
  position: relative;
  z-index: 10;
  padding: 0 4.42vw;
`;
const GalleryInner = styled.div`
  padding: 10vw 0;
`;
const Gallery = styled.div``;
const GalleryList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 9vw;
`;
const GalleryCard = styled.div`
  border: 1px solid #000;
  padding: 2vw;
  width: 32%;
  margin-bottom: 1vw;
`;
const GalleryTitle = styled.h2`
  font-size: 1.5vw;
  margin: 0 0 10px;
`;
const GalleryDescUl = styled.ul`
  margin-left: 1em;
`;
const GalleryDesc = styled.li`
  font-size: 1vw;
  list-style: outside;
  margin-left: 10px;
`;
const GalleryStack = styled.p`
  margin: 15px 0;
  span {
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    font-size: 0.9vw;
    margin: 0 10px 5px 0;
    letter-spacing: 0;
    display: inline-block;
  }
`;
const GitLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #000;
  margin-right: 15px;
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
