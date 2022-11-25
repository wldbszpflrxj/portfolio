import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  height: 100vh;
`;
const FooterInner = styled.div`
  background-color: #202020;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 9;
  position: relative;
  padding: 0 4.42vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  flex: 1 1 0;
  @media (max-width: 989px) {
    padding: 0 30px;
  }
`;
const FooterBigBox = styled.div`
  width: 100%;
`;
const FooterTitle = styled.div`
  color: #fff;
`;
const FooterInfo = styled.div`
  padding: 2.5rem 0;
  position: absolute;
  right: 5.3rem;
  bottom: 6.5rem;
  @media (max-width: 989px) {
    padding: 1.5rem 0;
    right: 30px;
  }
  @media (max-width: 767px) {
    position: static;
  }
`;
const FooterButton = styled.a`
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #fff;
  display: table;
  margin-bottom: 1.1rem;
  line-height: 1;
  text-decoration: none;
  @media (max-width: 989px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export {
  FooterBigBox,
  FooterButton,
  FooterInfo,
  FooterInner,
  FooterTitle,
  FooterWrapper,
};
