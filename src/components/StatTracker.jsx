import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    inningsPitched: '',
    strikeouts: '',
    walks: '',
    earnedRunAverage: '',
    earnedRuns: '',
  });

  const [gameInfo, setGameInfo] = useState({
    team: '',
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      inningsPitched: '',
      strikeouts: '',
      walks: '',
      earnedRunAverage: '',
      earnedRuns: '',
    });
    setGameInfo({
      team: '',
      opponent: '',
      date: '',
    });
  };

  // Function to calculate averages
  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averagesHS = {
    inningsPitched: calculateAverages('inningsPitched'),
    strikeouts: calculateAverages('strikeouts'),
    walks: calculateAverages('walks'),
    earnedRunAverage: calculateAverages('earnedRunAverage'),
    earnedRuns: calculateAverages('earnedRuns'),
  };

  const averagesTexasHardwork = {
    inningsPitched: calculateAverages('inningsPitched'),
    strikeouts: calculateAverages('strikeouts'),
    walks: calculateAverages('walks'),
    earnedRunAverage: calculateAverages('earnedRunAverage'),
    earnedRuns: calculateAverages('earnedRuns'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#B0E0E6" fontFamily="'Pacifico', cursive">
        Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#B0E0E6"
          borderWidth="4px"
        >
          <Text 
            color="#F8F8F8" 
            fontWeight="bold" 
            fontFamily="'Roboto+Condensed', system-ui" 
            fontSize="md"
            textAlign="center" 
          >
            Churchill HS Stats
          </Text>
          <Text color="#F8F8F8">Innings Pitched: {averagesHS.inningsPitched}</Text>
          <Text color="#F8F8F8">Strikeouts: {averagesHS.strikeouts}</Text>
          <Text color="#F8F8F8">Walks: {averagesHS.walks}</Text>
          <Text color="#F8F8F8">Earned Run Average: {averagesHS.earnedRunAverage}</Text>
          <Text color="#F8F8F8">Earned Runs: {averagesHS.earnedRuns}</Text>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#B0E0E6"
          borderWidth="4px"
        >
          <Text 
            color="#F8F8F8" 
            fontWeight="bold" 
            fontFamily="'Roboto+Condensed', system-ui"  
            fontSize="md"
            textAlign="center" 
          >
            SA Dream Stats
          </Text>
          <Text color="#F8F8F8">Innings Pitched: {averagesTexasHardwork.inningsPitched}</Text>
          <Text color="#F8F8F8">Strikeouts: {averagesTexasHardwork.strikeouts}</Text>
          <Text color="#F8F8F8">Walks: {averagesTexasHardwork.walks}</Text>
          <Text color="#F8F8F8">Earned Run Average: {averagesTexasHardwork.earnedRunAverage}</Text>
          <Text color="#F8F8F8">Earned Runs: {averagesTexasHardwork.earnedRuns}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#F8F8F8"
        borderRadius="12px"
        borderColor="#38393d"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Pacifico', cursive" mb={4}>
          Player Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No games added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontWeight="bold" fontFamily="'Pacifico', cursive">
                  Game {index + 1} - Corinne Bouvier:
                </Text>
                <Text color="#000000">Team: {game.team}</Text>
                <Text color="#000000">Opponent: {game.opponent}</Text>
                <Text color="#000000">Date: {game.date}</Text>
                <Text color="#000000">Innings Pitched: {game.inningsPitched}</Text>
                <Text color="#000000">Strikeouts: {game.strikeouts}</Text>
                <Text color="#000000">Walks: {game.walks}</Text>
                <Text color="#000000">Earned Run Average: {game.earnedRunAverage}</Text>
                <Text color="#000000">Earned Runs: {game.earnedRuns}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#B0E0E6"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Team
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.team}
              name="team"
              onChange={handleGameInfoChange}
              placeholder="Enter team name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Opponent
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Date
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
              placeholder="Enter game date"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Innings Pitched
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.inningsPitched}
              name="inningsPitched"
              onChange={handleInputChange}
              placeholder="Enter innings pitched"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Strikeouts
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.strikeouts}
              name="strikeouts"
              onChange={handleInputChange}
              placeholder="Enter strikeouts"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Walks
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.walks}
              name="walks"
              onChange={handleInputChange}
              placeholder="Enter walks"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Earned Run Average
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.earnedRunAverage}
              name="earnedRunAverage"
              onChange={handleInputChange}
              placeholder="Enter earned run average"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="lg">
              Earned Runs
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.earnedRuns}
              name="earnedRuns"
              onChange={handleInputChange}
              placeholder="Enter earned runs"
            />
          </FormControl>
          <Button
            onClick={handleAddGame}
            mt={4}
            bgColor="#B0E0E6"
            color="#B22222"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Pacifico', cursive"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#B0E0E6"
            borderWidth="3px"
            _hover={{ borderColor: '#F8F8F8' }}
          >
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;
