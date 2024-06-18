import styled from 'styled-components';

interface IComponentProps {
  $visible: boolean;
}

const StyledContainer = styled.div<IComponentProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[1]};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgrounds.hint};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  padding: ${({ theme }) => theme.spaces[1]};
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: ${({ theme }) => theme.durations.normal} ease;
`;

export default StyledContainer;
