import { Heading, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect, useState } from 'react';

const EMOJIS: string[] = ['🏛️', '👾', '🌀', '🦄', '🧬'];
const MOVING_SPEED = 1000;

const MovingTitle: React.VoidFunctionComponent = () => {
  const [currentEmoji, setCurrentEmoji] = useState<number>(0);

  useEffect(() => {
    const _tmp = setInterval(() => {
      setCurrentEmoji(currentEmoji + 1 >= EMOJIS.length ? 0 : currentEmoji + 1);
    }, MOVING_SPEED);

    return () => {
      if (_tmp) clearInterval(_tmp);
    };
  }, []);
  return (
    <Stack
      pt={14}
      pb={6}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Heading size="4xl" as="h2" textAlign="center">
        {EMOJIS[currentEmoji]}
      </Heading>
      <Heading size="xl" as="h1" textAlign="center" pt={4} px={10}>
        DeFi + Crypto Game to grow your crypto assets
      </Heading>
    </Stack>
  );
};

export default MovingTitle;
