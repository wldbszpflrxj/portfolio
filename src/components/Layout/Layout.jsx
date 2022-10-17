import React from "react";
import * as Styled from "./Layout.styled";
const Layout = ({ children }) => {
  return <Styled.Main>{children}</Styled.Main>;
};

export default Layout;
