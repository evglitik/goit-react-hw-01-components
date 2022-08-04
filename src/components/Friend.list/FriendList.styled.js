import styled from '@emotion/styled';

export const FriendContainer = styled.ul`
  padding: ${p => `${p.theme.space[2]}px`};
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => `${p.theme.space[4]}px`};
`;

export const FriendCard = styled.li`
  padding: ${p => `${p.theme.space[3]}px`};
  liststyle: none;
  display: flex;
  align-items: center;
  gap: ${p => `${p.theme.space[3]}px`};
  width: 195px;
  box-shadow: ${p => `${p.theme.shadows.shadow}`};
  border-radius: ${p => `${p.theme.radii.normal}`};
  span {
    background-color: ${p => {
      return p.isOnline
        ? `${p.theme.colors.online}`
        : `${p.theme.colors.ofline}`;
    }};
    width: 8px;
    height: 8px;
    border-radius: ${p => `${p.theme.radii.round}`};
  }
  img {
    border-radius: ${p => `${p.theme.radii.normal}`};
  }
`;
