// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';

import { Filter } from './Filter/Filter';
import { FormAddContact } from './FormAddConatact/FormAddContact';
import { PhonebookList } from './ContactBookList/ContactBookList';
import { Container } from './ConatactsStyles';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { setFilter } from 'redux/filterSlise';
import { InputLeftElement, InputGroup, Input } from '@chakra-ui/react';

import { getFilterContacts } from 'redux/selector';
import { addContact, removeContact } from 'redux/contactsSlise';
import { Search2Icon } from '@chakra-ui/icons';
// import { fetchContacts } from 'redux/contacts-operations';
// import toast, { Toaster } from 'react-hot-toast';

export const Contacts = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      {/* <Toaster /> */}
      <FormAddContact onSubmit={onAddContact} />
      <Filter />
      <Container>
        <InputGroup>
          <InputLeftElement children={<Search2Icon color="teal" />} />
          <Input
            variant="filled"
            width={250}
            onChange={onSetFilter}
            value={filter}
            type="text"
            boxShadow="md"
          />
        </InputGroup>
      </Container>

      <PhonebookList contacts={contacts} removeContact={onRemoveContact} />
    </Container>
  );
};
