import {
  Box,
  Center,
  Container,
  Flex,
  Stack,
  Text,
  Button,
  useToast,
  Divider,
  Heading,
  Link
} from '@chakra-ui/react';
import ReactGA from "react-ga4";
import ReactPlayer from "react-player/lazy";
import Nav from '../../components/Nav/Nav';
import MovingTitle from '../../components/MovingTitle/MovingTitle';
import ItemCard from '../../components/ItemCard/ItemCard';
const Home = () => {
  const toast = useToast();

  const onClickOpenApp = () => {
    toast({
      title: `🦄 Soon!`,
      description:
        'Hey, we will launch the DEX soon, meanwhile be sure to join our Discord!',
      status: 'info',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <Nav />
      <MovingTitle />
      <Stack
        pb={20}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Text
          opacity={0.66}
          size="lg"
          textAlign="center"
          px={{ base: 10, md: 60 }}
          lineHeight={1.6}
        >
          EvoVerses is a crosschain DeFi game. We will be available at the
          beginning in several chains, like Polygon and Harmony ONE. EvoVerses
          DAO has an objective: build an entire DeFi ecosystem and we are
          starting by building a Pokemon-like DEX game. Sounds good? Join us
          now!
        </Text>
        <Flex
          flexDir={{ base: 'column', sm: 'row' }}
          rowGap={{ base: 4, sm: 0 }}
          columnGap={{ base: 0, sm: 4 }}
          pt={4}
        >
          <Button
            variant={'solid'}
            bg="#959595"
            color="white"
            size={'md'}
            borderRadius={20}
            px={5}
            onClick={onClickOpenApp}
          >
            Open App
          </Button>
          <Link href='https://discord.gg/evoverses' _hover={{textDecoration: "none"}}>
            <Button
              variant={'solid'}
              colorScheme={'evoOrange'}
              size={'md'}
              borderRadius={20}
              px={5}
              color="white"
            >
              Join 🌀 Discord
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        pt={10}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="3xl">⚖️</Heading>
        <Heading size="xl" pt={6} textAlign="center">
          Fair finance for everyone
        </Heading>
        <Text px={{ base: 10, md: 60 }} textAlign="center" opacity={0.66}>
          EvoVerses DAO is owned and controlled by our community of 🌀 token
          holders.
        </Text>
        <Text px={{ base: 10, md: 60 }} textAlign="center" opacity={0.66}>
          Yes, we are a DAO with community votes and multisig wallet, as every
          project should be!
        </Text>
      </Stack>
      <Stack
        pt={10}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading
          size="xl"
          color="rgb(114, 5, 209)"
          textAlign="center"
          px={{ base: 10 }}
        >
          Which DeFi and GameFi projects are we developing?
        </Heading>
      </Stack>
      <Stack
        pt={10}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="lg" textAlign="center" px={{ base: 10 }}>
          1. Our Decentralized Game-Exchange: 🌀{' '}
          <p style={{ color: 'rgb(222, 150, 26)' }}>EvoDEX</p>
        </Heading>
        <Text px={{ base: 20, md: 60 }} textAlign="center" opacity={0.66}>
          A Pokemon-like game, but with its own Exchange, with community
          governance and multisig wallet
        </Text>
        <Flex columnGap={6} flexWrap="wrap" justifyContent="center" alignItems="center" px={4}>
            <ItemCard emoji="🏛️" title="Secure" description="Forked from UniSwap code, audited by the most popular companies"/>
            <ItemCard emoji="💸" title="Fun and Original" description="A real game but with a complete DeFi integration, your in-game assets now are useful in your real life!"/>
            <ItemCard emoji="🗣️" title="Decentralized Governance" description="🌀 holders decide EvoVerses DAO's future via on-chain voting."/>
        </Flex>
      </Stack>
      <Stack
        pt={20}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="lg" textAlign="center" px={{ base: 10 }}>
          2. Our Play-to-Earn Pokemon-like Game: 🦄{' '}
          <p style={{ color: 'rgb(222, 150, 26)' }}>EvoVerses</p>
        </Heading>
        <Text px={{ base: 20, md: 60 }} textAlign="center" opacity={0.66}>
          Note: This one will launch after the EvoDEX. Check our Discord for the
          latest updates!
        </Text>
        <Box width="100%" px={4} pt={4}>
        <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=tw7QJRhkwRs" height='auto' controls={false} muted={true} loop={true} playing={true} />
        </Box>
        <Text px={{ base: 20, md: 60 }} textAlign="center" fontSize="sm" opacity={0.66} fontStyle="italic" pt={2}>
        A little sneak peak of what is coming to EvoVerses, if you want more... you know, come to pur Telegram Channel 😏
        </Text>
      </Stack>
      <Stack
        pt={24}
        pb={40}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="lg" textAlign="center" px={{ base: 10 }}>
         And much more to come!
        </Heading>
        <Text px={{ base: 20, md: 60 }} textAlign="center" opacity={0.66} fontSize="sm" fontStyle="italic" pt={2}>
        And the best part? Every service is connected to each other, building a huge and profitable ecosystem!
        </Text>
        <Heading size="lg" pt={6} pb={2}>Are you ready?</Heading>
        <Link href='https://discord.gg/evoverses' _hover={{textDecoration: "none"}}>
            <Button
              variant={'solid'}
              colorScheme={'evoOrange'}
              size={'md'}
              borderRadius={20}
              px={5}
              color="white"
            >
              Join 🌀 Discord
            </Button>
          </Link>
      </Stack>
    </>
  );
};

export default Home;
