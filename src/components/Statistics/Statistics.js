import PropTypes from 'prop-types';
import { Box } from 'Box';
import { StatisticTitle, StatisticItem  } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Box boxShadow="shadow" borderRadius="normal" as="section">
      {title !== undefined && <StatisticTitle>{title}</StatisticTitle>}

      <Box display="grid" gridTemplateColumns="5fr 5fr 5fr 5fr 5fr" as="ul">
        {data.map(stat => {
          const { label, percentage, id } = stat;
          return (
            <StatisticItem key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </StatisticItem>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }).isRequired
  ).isRequired
};
