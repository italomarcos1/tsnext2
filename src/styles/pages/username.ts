import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 137px;
    height: 137px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-bottom: 20px;
  }

  h1 {
    color: #fff;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    font-weight: normal;
  }
`;
