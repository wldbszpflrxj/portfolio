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
`;
const FooterBigBox = styled.div`
  width: 100%;
`;
const FooterTitle = styled.div`
  color: #fff;
`;
const FooterInfo = styled.div`
  padding: 40px 0;
  position: absolute;
  right: 10vw;
  bottom: 5.42vw;
`;
const FooterButton = styled.a`
  color: #fff;
  font-size: 1.3vw;
  letter-spacing: 0.05em;
  border-bottom: 0.15vw solid #fff;
  display: table;
  margin-bottom: 1vw;
  line-height: 1;
  text-decoration: none;
`;

export {
  FooterBigBox,
  FooterButton,
  FooterInfo,
  FooterInner,
  FooterTitle,
  FooterWrapper,
};
