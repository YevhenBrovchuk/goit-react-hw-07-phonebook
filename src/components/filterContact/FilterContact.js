import { Div, Input } from './FilterContact.styled';
import { useDispatch } from 'react-redux';
import { applyFilter } from 'redux/filterSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();

  const changedFilter = e => {
    dispatch(applyFilter(e.target.value));
  };
  return (
    <Div>
      Find contacts by name
      <Input type="text" onChange={changedFilter} placeholder="Filter"></Input>
    </Div>
  );
};
