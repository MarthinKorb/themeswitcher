import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.secundary};
  border-bottom: 5px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const animate = keyframes`
  from {
      opacity: 0;
      transform: translateY(1000px);
    }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  margin-top: 150px;
  height: 300px;
  width: 300px;
  background: ${props => props.theme.colors.secundary};
  border: 10px solid ${props => props.theme.colors.third};
  border-radius: 30%;

  animation: ${animate} 750ms;
`;




