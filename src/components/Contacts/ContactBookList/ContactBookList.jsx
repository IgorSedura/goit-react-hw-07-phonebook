import PropTypes from 'prop-types';
import { Ul, Li, Div } from './ConatactBookListStyles';
import { Button } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
export const PhonebookList = ({ contacts, removeContact }) => {
  const elemenst = contacts.map(({ id, name, number }) => (
    <Li key={id}>
      <p>
        <Avatar
          marginTop={5}
          marginRight={1}
          size="sm"
          bg="gray.300"
          name={name}
          src="https://bit.ly/broken-link"
        />
      </p>
      {name} : {number}
      <Button
        onClick={() => removeContact(id)}
        colorScheme="red"
        variant="outline"
        size="xs"
        marginTop={4}
      >
        Delete
      </Button>
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
