import { HStack, Tag } from '@chakra-ui/react';
import React from 'react';

function TagsComponents() {
  return (
    <div>
      <HStack spacing={4}>
        {['sm', 'md', 'lg'].map((size) => (
          <Tag size={size} key={size} variant="solid" colorScheme="teal">
            Teal
          </Tag>
        ))}
      </HStack>
    </div>
  );
}

export default TagsComponents;
