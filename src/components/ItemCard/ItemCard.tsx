import {
  Heading,
  Box,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

interface ItemCardProps {
  emoji: string;
  title: string;
  description: string;
  height: number | string;
  mobileHeight: number | string;
}

const ItemCard: React.FunctionComponent<ItemCardProps> = ({
  emoji,
  title,
  description,
  height,
  mobileHeight,
}: ItemCardProps) => {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        height={{ base: mobileHeight, sm: height }}
      >
        <Heading size="2xl">{emoji}</Heading>
        <Heading pt={4} fontSize={'xl'} fontFamily={'body'}>
          {title}
        </Heading>
        <Text textAlign={'center'} opacity={0.66} px={3} pt={4}>
          {description}
        </Text>
      </Box>
    </Center>
  );
};

export default ItemCard;
