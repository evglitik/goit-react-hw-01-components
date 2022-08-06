import styled from '@emotion/styled';

export const Table = styled.table`
  text-decoration: none;
  border-collapse: collapse;
  width: 872px;
  text-align: center;
  box-shadow: ${p => `${p.theme.shadows.shadow}`};
  border-radius: ${p => `${p.theme.radii.medium}`};
  & th {
    padding: ${p => `${p.theme.space[4]}px`} 0;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.light};
    background-color: ${p => p.theme.colors.tableHead};
    border: ${p => p.theme.borders.normal}
      ${p => p.theme.colors.tableBorderLight};
  }
  & td {
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.darckGrey};

    white-space: pre-wrap;
    padding: ${p => `${p.theme.space[4]}px`} 0;
    vertical-align: middle;
    border: ${p => p.theme.borders.normal}
      ${p => p.theme.colors.tableBorderDarck};
  }
`;

export const TableRows = styled.tr`
    background-color: ${p => {
      return p.index % 2 !== 1
        ? `${p.theme.colors.white}`
        : `${p.theme.colors.tableRows}`;
  }};
`;
