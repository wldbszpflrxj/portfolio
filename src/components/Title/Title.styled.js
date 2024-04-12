import styled from "@emotion/styled";

const BigTitle = styled.h2`
    margin: 0;
    div + & {
      margin-top: 5rem;
    }
    @media (max-width: 767px) {
      div + & {
          margin-top: 3rem;
      }
    }
`
const BigText = styled.p`
  font-size: 16vw;
  line-height: 0.9;
  font-family: beastly, sans-serif;
  display: block;
  > span {
    display: inline-block;
    transform: translateY(100%);
    opacity: 0;
  }
`;

export { BigText, BigTitle };
