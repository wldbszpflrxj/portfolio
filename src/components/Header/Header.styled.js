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
  padding: 0 5.3rem;
  margin: 0 auto;
  @media (max-width: 989px) {
    padding: 0 30px;
  }
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
    margin-left: 6rem;
  }
  @media (max-width: 989px) {
    & + & {
      margin-left: 2rem;
    }
  }
  @media (max-width: 767px) {
    &:not(:last-child) {
      display: none;
    }
  }
`;
const Logo = styled.a`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  color: #000;
  @media (max-width: 989px) {
    font-size: 28px;
  }
  @media (max-width: 989px) {
    font-size: 22px;
  }
`;
const Link = styled.a`
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  color: #000;
  text-decoration: none;
  & + & {
    margin-left: 1.75rem;
  }
  @media (max-width: 989px) {
    font-size: 16px;
    & + & {
      margin-left: 1rem;
    }
  }
`;

export { HeaderWrapper, Gnb, HeaderInner, Li, Link, Nav, Logo };
