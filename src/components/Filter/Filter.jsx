import PropTypes from 'prop-types';
import filter from '../../constants/filter';
import { Select, Option } from './Filter.styled';

const Filter = ({ filterState, onChange }) => {
  return (
    <Select
      name='filter'
      value={filterState}
      onChange={(e) => onChange(e.target.value)}
    >
      {filter.map((el) => {
        return (
          <Option value={el.type} key={el.text}>
            {el.text}
          </Option>
        );
      })}
    </Select>
  );
};

export default Filter;

Filter.propTypes = {
  filterState: PropTypes.string,
  onChange: PropTypes.func,
};
