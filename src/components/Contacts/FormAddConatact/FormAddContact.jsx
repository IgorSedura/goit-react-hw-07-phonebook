import { useState } from 'react';
import PropTypes from 'prop-types';
import { initialState } from './initialState';
import { Container, Label, Btn } from './FormAddConatctStyles';
import {
  InputLeftElement,
  InputGroup,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { PhoneIcon, EditIcon, AddIcon } from '@chakra-ui/icons';

export const FormAddContact = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <div>
          <Label>Name</Label>
          <InputGroup>
            <Input
              variant="filled"
              width={250}
              value={name}
              onChange={handleChange}
              placeholder="Введіть ім'я"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              boxShadow="md"
            />
            <InputLeftElement children={<EditIcon color="teal" />} />
          </InputGroup>
        </div>
        <div>
          <Label>Number</Label>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="teal" />}
            />
            <Input
              variant="filled"
              width={250}
              value={number}
              onChange={handleChange}
              placeholder="Введіть номер"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              boxShadow="md"
            />
          </InputGroup>
          {/* <Label>Number</Label>
          <Input
            value={number}
            onChange={handleChange}
            placeholder="Введіть номер"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /> */}
        </div>
        <div>
          <Button
            colorScheme="teal"
            variant="outline"
            leftIcon={<AddIcon />}
            marginTop="5"
            boxShadow="md"
            type="submit"
          >
            Add to contact
          </Button>
        </div>
      </Container>
    </form>
  );
};

FormAddContact.defaultProps = {
  onSubmit: () => {},
};

FormAddContact.propTypes = {
  onSubmit: PropTypes.func,
};
