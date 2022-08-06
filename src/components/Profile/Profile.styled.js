import styled from '@emotion/styled';

export const Description = styled.div`
  padding: ${p => `${p.theme.space[4]}px`};
  text-align: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: ${p => `${p.theme.radii.round}`};
  }
`;

export const Name = styled.p`
  margin-top: 15px;
  margin-bottom: 0px;
  color: ${p => `${p.theme.colors.black}`};
  font-size: ${p => `${p.theme.fontSizes.ml}`};
  font-weight: ${p => `${p.theme.fontWeights.bold}`};
  line-height: ${p => `${p.theme.lineHeights.body}`};
`;

export const Tag = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  color: ${p => `${p.theme.colors.grey}`};
  font-size: ${p => `${p.theme.fontSizes.m}`};
  font-weight: ${p => `${p.theme.fontWeights.medium}`};
  line-height: ${p => `${p.theme.lineHeights.body}`};
`;

export const Location = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  color: ${p => `${p.theme.colors.grey}`};
  font-size: ${p => `${p.theme.fontSizes.m}`};
  font-weight: ${p => `${p.theme.fontWeights.medium}`};
  line-height: ${p => `${p.theme.lineHeights.body}`};
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  justify-content: space-evenly;
  color: ${p => `${p.theme.colors.black}`};
  margin-top: 10px;
  li {
    border-top: ${p => `${p.theme.borders.normal}`}
      ${p => `${p.theme.colors.secondary}`};
    background-color: ${p => `${p.theme.colors.background}`};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 2px;

    & span:not(:last-child) {
      color: ${p => `${p.theme.colors.grey}`};
      font-size: ${p => `${p.theme.fontSizes.s}`};
      line-height: ${p => `${p.theme.lineHeights.body}`};
    }
    & span {
      color: ${p => `${p.theme.colors.black}`};
      font-size: ${p => `${p.theme.fontSizes.s}`};
      font-weight: ${p => `${p.theme.fontWeights.bold}`};
      line-height: ${p => `${p.theme.lineHeights.body}`};
    }
  }

  & li:not(:last-child) {
    border-right: ${p => `${p.theme.borders.normal}`}
      ${p => `${p.theme.colors.secondary}`};
  }
`;