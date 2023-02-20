import propTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <StyledFilter>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleFilterChange: propTypes.func.isRequired,
};
