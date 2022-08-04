import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title !== undefined && <h2 className="title">{title}</h2>}

      <ul>
        {data.map(stat => {
          const { label, percentage, id } = stat;
          return (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
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
