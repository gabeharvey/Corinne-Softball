/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#B0E0E6"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#B0E0E6"
        bgImage="linear-gradient(-45deg, #B0E0E6 25%, transparent 25%, transparent 50%, #B0E0E6 50%, #B0E0E6 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#000000" fontFamily="'Pacifico', cursive">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#000000" fontFamily="'Roboto+Condensed', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function SoftballFilm() {
  const videos = [
    {
      videoSrc: "corinne-vid-1.MOV",
      title: "Corinne Doubles",
      description: "SA Dream 14U vs RIPTIDE",
    },
    {
      videoSrc: "corinne-vid-2.MOV",
      title: "Corinne Swipes Second",
      description: "SA Dream 14U vs RIPTIDE",
    },
    {
      videoSrc: "corinne-vid-3.MOV",
      title: "Corinne Home Run",
      description: "SA Dream 14U vs Texas United",
    },
    {
      videoSrc: "corinne-vid-4.MOV",
      title: "Corinne Triples",
      description: "SA Dream 14U vs Alaquinez Athletics",
    },
    {
      videoSrc: "corinne-vid-5.MOV",
      title: "Corinne Batting",
      description: "Power at the Plate",
    },
    {
      videoSrc: "../video6.mp4",
      title: "Corinne Training",
      description: "Corinne Gym Habits",
    },
    {
      videoSrc: "../video7.mp4",
      title: "Corinne All-Star Game",
      description: "All-Star Highlights",
    },
    {
      videoSrc: "../video8.mp4",
      title: "Corinne High School Highlights",
      description: "Elite High School Plays",
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
        Softball Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default SoftballFilm;