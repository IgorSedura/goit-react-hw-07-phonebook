import PropTypes from 'prop-types';
import { Btn, Ul, Li } from './ConatactBookListStyles';
import { Button } from '@chakra-ui/react';

export const PhonebookList = ({ contacts, removeContact }) => {
  const elemenst = contacts.map(({ id, name, number }) => (
    <Li key={id}>
      {name}: {number}
      <span>
        <Button
          onClick={() => removeContact(id)}
          colorScheme="red"
          variant="outline"
          size="xs"
          marginTop={4}
        >
          Delete
        </Button>
        {/* <Btn onClick={() => removeContact(id)}>Delete</Btn> */}
      </span>
    </Li>
  ));
  return <Ul>{elemenst}</Ul>;
};

PhonebookList.defaultProps = {
  items: [],
};

PhonebookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
