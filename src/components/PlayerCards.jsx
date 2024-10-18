/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
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
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
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
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Pacifico', cursive">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="xl" fontWeight="medium" textAlign="center">
          {bio}
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
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier is a power hitter, boasting a batting average of .450, making her a formidable presence at the plate."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier is known for her lightning-fast base running, often stealing bases with ease."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier has a remarkable softball IQ, enabling her to read pitchers and make smart decisions on the base paths."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier excels in the outfield, averaging over 2 putouts per game."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier has shown impressive defensive skills, regularly making crucial plays to stop runs."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier possesses exceptional fielding skills, often making accurate throws to prevent runners from advancing."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier is known for her clutch performances, driving in an average of 3 RBIs in crucial games."
    },
    {
      frontImg: "corinne-1.PNG",
      name: "Corinne Bouvier",
      bio: "Corinne Bouvier has developed a reliable slap hit, adding versatility to her offensive game."
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
        Click on a card to see player card info
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
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;