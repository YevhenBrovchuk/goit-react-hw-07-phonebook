import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchAllContacts } from 'redux/operations';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { Loader } from 'components/loader/Loader';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts && (
        <ul>
          {filterContacts.map(({ id, name, number }) => (
            <li key={nanoid()}>
              {name}: {number}
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
