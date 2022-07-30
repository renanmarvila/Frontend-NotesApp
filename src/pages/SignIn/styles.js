import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-weight: 700;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GREY_100};
  }

  > h2 {
    font-weight: 500;
    margin: 48px 0;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GREY_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 124px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: grayscale(1);
`
