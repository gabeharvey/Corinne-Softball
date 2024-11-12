/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio, funFact, cardNumber, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="420px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            borderColor="#B0E0E6"
            borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Text
              bg="rgba(0, 0, 0, 0)"
              w="100%"
              color="#B22222"
              fontSize="2xl"
              fontFamily="'Pacifico', cursive"
              textAlign="center"
              p={2}
              borderBottomRadius="12px"
            >
              {name}
            </Text>
          </Box>
        </Box>

        {/* Back Side with Holographic Gradient Effect */}
          <Box
            bgGradient="radial-gradient(circle, rgba(230, 230, 255, 0.9) 30%, rgba(230, 230, 255, 0.6) 70%, rgba(230, 230, 255, 0.2) 100%)"
            position="absolute"
            style={{ backfaceVisibility: 'hidden' }}
            w="100%"
            h="100%"
            borderRadius="12px"
            borderColor="#B0E0E6"
            borderWidth="3px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            transform="rotateY(180deg)"
            p={5}
          >
          {/* Team Logo */}
          <Box mb={2}>
            <img src="texas-logo.png" alt="Team Logo" style={{ width: '100px', height: 'auto' }} />
          </Box>

          {/* Player Stats with Shadow */}
          <Text
            mt={2}
            color="#F8F8F8"
            fontFamily="'Roboto Condensed', system-ui"
            fontWeight="bold"
            fontSize="md"
            textAlign="center"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
          >
            Batting Average: .450
          </Text>
          <Text
            color="#F8F8F8"
            fontFamily="'Roboto Condensed', system-ui"
            fontWeight="bold"
            fontSize="md"
            textAlign="center"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
          >
            Home Runs: 15
          </Text>
          <Text
            mt={4}
            color="#F8F8F8"
            fontFamily="'Roboto Condensed', system-ui"
            fontWeight="bold"
            fontSize="md"
            textAlign="center"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
          >
            Card #{cardNumber}
          </Text>
          <Text
            mt={4}
            color="#F8F8F8"
            fontFamily="'Pacifico', cursive"
            fontWeight="bold"
            fontSize="md"
            textAlign="center"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
          >
            {bio}
          </Text>
          <Text
            mt={2}
            color="#F8F8F8"
            fontFamily="'Roboto Condensed', system-ui"
            fontWeight="bold"
            fontSize="md"
            textAlign="center"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
          >
            Fun Fact: {funFact}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "corinne-10.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier is a power hitter, boasting a batting average of .450, making her a formidable presence at the plate.",
      funFact: "Enjoys hiking in the mountains.",
      cardNumber: 1,
    },
    {
      frontImg: "corinne-11.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier is known for her lightning-fast base running, often stealing bases with ease.",
      funFact: "Loves photography.",
      cardNumber: 2,
    },
    {
      frontImg: "corinne-12.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier has a remarkable softball IQ, enabling her to read pitchers and make smart decisions on the base paths.",
      funFact: "Fan of cooking shows.",
      cardNumber: 3,
    },
    {
      frontImg: "corinne-13.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier excels in the outfield, averaging over 2 putouts per game.",
      funFact: "Avid reader of mystery novels.",
      cardNumber: 4,
    },
    {
      frontImg: "corinne-14.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier has shown impressive defensive skills, regularly making crucial plays to stop runs.",
      funFact: "Volunteers at animal shelters.",
      cardNumber: 5,
    },
    {
      frontImg: "corinne-15.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier possesses exceptional fielding skills, often making accurate throws to prevent runners from advancing.",
      funFact: "Loves to travel and explore new places.",
      cardNumber: 6,
    },
    {
      frontImg: "corinne-16.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier is known for her clutch performances, driving in an average of 3 RBIs in crucial games.",
      funFact: "Enjoys painting landscapes.",
      cardNumber: 7,
    },
    {
      frontImg: "corinne-19.PNG",
      name: "Corinne Bouvier #37",
      bio: "Corinne Bouvier has developed a reliable slap hit, adding versatility to her offensive game.",
      funFact: "Passionate about fitness.",
      cardNumber: 8,
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text fontSize="4xl" fontWeight="medium" color="#B0E0E6" fontFamily="'Pacifico', cursive">
        Player Cards
      </Text>
      <Text fontSize="xl" fontWeight="medium" color="#ebebeb" fontFamily="'Pacifico', cursive">
        Click on a card to see more info
      </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }}
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card
            key={index}
            frontImg={player.frontImg}
            name={player.name}
            bio={player.bio}
            funFact={player.funFact}
            cardNumber={player.cardNumber}
            flipSound={flipSound}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
