import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.5s ease;
  &.stick {
    background-color: #fff;
  }
`;
const HeaderInner = styled.div`
  padding: 0 4.42vw;
  margin: 0 auto;
`;
const Nav = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  flex: 1 1 0;
`;
const Gnb = styled.ul`
  display: flex;
`;
const Li = styled.li`
  list-style: none;
  & + & {
    margin-left: 5vw;
  }
`;
const Logo = styled.a`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.05rem;
  color: #000;
`;
const Link = styled.a`
  font-size: 20px;
  letter-spacing: 0.05rem;
  color: #000;
  text-decoration: none;
  & + & {
    margin-left: 1.5vw;
  }
`;

export { HeaderWrapper, Gnb, HeaderInner, Li, Link, Nav, Logo };
