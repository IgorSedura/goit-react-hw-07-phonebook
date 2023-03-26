import { Text, Container } from './FilterStyles';
import { Heading } from '@chakra-ui/react';

export const Filter = () => {
  return (
    <Container>
      <Heading as="h2" size="xl">
        Contacts
      </Heading>
      <Text>Find constacts by name</Text>
    </Container>
  );
};
