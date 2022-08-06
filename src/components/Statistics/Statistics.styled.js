import styled from '@emotion/styled';

export const StatisticTitle = styled.h2`
  color: ${p => `${p.theme.colors.grey}`};
  font-size: ${p => `${p.theme.fontSizes.ml}`};
  font-weight: ${p => `${p.theme.fontWeights.medium}`};
  line-height: ${p => `${p.theme.lineHeights.body}`};
  text-transform: uppercase;
  padding: ${p => `${p.theme.space[5]}px`} 0;
  margin: 0;
  text-align: center;
`;

export const StatisticItem = styled.li`
  padding: ${p => `${p.theme.space[4]}px`};
  padding-top: ${p => `${p.theme.space[3]}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[3]}px`};
  background-color: ${p => {
    const value = p.children[0].props.children;

    switch (value) {
      case '.docx':
        return `${p.theme.colors.docx}`;

      case '.pdf':
        return `${p.theme.colors.pdf}`;

      case '.mp3':
        return `${p.theme.colors.mp3}`;

      case '.psd':
        return `${p.theme.colors.psd}`;

      default:
        return `${p.theme.colors.secondary}`;
    }
  }};
  & span {
    color: ${p => `${p.theme.colors.light}`};
    font-size: ${p => `${p.theme.fontSizes.m}`};
    line-height: ${p => `${p.theme.lineHeights.body}`};
    font-weight: ${p => `${p.theme.fontWeights.medium}`};
  }
  & span:not(:last-child) {
    color: ${p => `${p.theme.colors.light}`};
    font-size: ${p => `${p.theme.fontSizes.s}`};
    line-height: ${p => `${p.theme.lineHeights.body}`};
    font-weight: ${p => `${p.theme.fontWeights.normal}`};
  }
`;