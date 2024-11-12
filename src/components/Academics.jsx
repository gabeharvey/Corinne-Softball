import { Box, VStack, Heading, Flex, Link, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Academics() {
  const academicAchievements = [
    "Graduated with Honors from Churchill HS",
    "Dean's List for 6 semesters",
    "Recipient of the Academic Excellence Scholarship",
    "Completed a major in Computer Science with a focus on AI",
    "Co-Founder of the Women in Tech Club at Churchill HS",
    "Volunteered as a mentor for aspiring computer scientists"
  ];

  return (
    <VStack
      spacing={10}
      mt={12}
      align="center"
      p={{ base: 5, md: 10 }}
      minH="100vh"
      bgImage="url('/background-image.png')" 
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#B0E0E6" fontFamily="'Pacifico', cursive" mb="5">
        Academics
      </Heading>

      {/* New box for Corinne's photo */}
      <MotionBox
        w={{ base: '80%', md: '300px' }} // Adjusted the box size
        h="auto"
        m="5"
        bgColor="#FFFFFF"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#B0E0E6"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={0} // Removed padding to ensure the image takes up the full space
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Image 
          src="/corinne-8.PNG" 
          alt="Corinne's Student Photo"
          borderRadius="12px"
          w="100%" // Made the image fill the box
          h="100%" // Made the image fill the box
          objectFit="cover" // Ensures the image covers the box area
        />
      </MotionBox>

      <Flex direction="column" alignItems="center" width="100%">
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="120px"
          m="5"
          bgColor="#FFFFFF"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#B0E0E6"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Link
            fontFamily="'Pacifico', cursive"
            fontWeight="bold"
            href="/path-to-transcripts"
            isExternal
            color="black"
            fontSize="lg"
            p={3}
            _hover={{ color: '#B0E0E6', textDecoration: 'underline' }}
            textAlign="center" // Ensures the text is centered
            width="100%" // Ensures the text spans the width of the box
            display="flex"
            justifyContent="center" // Centers the text horizontally
            alignItems="center" // Centers the text vertically
          >
            View Transcripts
          </Link>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="auto"
          m="5"
          bgColor="#FFFFFF"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#B0E0E6"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"  
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Text fontWeight="bold" fontSize="lg" color="black" mb="2" textAlign="center">
            Academic Achievements
          </Text>
          <VStack spacing={2} align="start" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">
            {academicAchievements.map((achievement, index) => (
              <Text key={index} color="black">
                - {achievement}
              </Text>
            ))}
          </VStack>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Academics;
