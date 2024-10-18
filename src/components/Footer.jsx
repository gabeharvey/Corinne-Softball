import { Link } from 'react-router-dom';
import { IconButton, Flex, Box, Image } from '@chakra-ui/react'; 
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import XLogo from '/x-logo-white.png';

function Footer() {
  return (
    <Box>
      <footer className="footer">
        <div className="footer-content">
          <Flex
            justify="space-between"
            direction={['column', 'row']}
            alignItems="center"
            gap="1rem"
            mt="1"
          >
            <div className="footer-logo">©2024 Corinne Bouvier</div>
            <Flex alignItems="center" justifyContent="center" flexDirection={['row', 'row']} gap="1rem">
              <IconButton
                as={Link}
                to="https://facebook.com"
                aria-label="Facebook"
                icon={<FaFacebookF />}
                variant="ghost"
                color="#F5F5F5"
                fontSize="24px"
                _hover={{ color: 'blue.500' }}
                _active={{ bg: 'transparent' }}
              />
              <IconButton
                as={Link}
                to="https://www.instagram.com"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="#F5F5F5"
                fontSize="24px"
                _hover={{ color: 'pink.500' }}
                _active={{ bg: 'transparent' }}
              />
              <IconButton
                as={Link}
                to="https://snapchat.com"
                aria-label="Snapchat"
                icon={<FaSnapchatGhost />}
                variant="ghost"
                color="#F5F5F5"
                fontSize="24px"
                _hover={{ color: 'yellow' }}
                _active={{ bg: 'transparent' }}
              />
              <IconButton
                as={Link}
                to="https://x.com"
                aria-label="X"
                icon={<Image src={XLogo} alt="X Logo" boxSize="24px" />}
                variant="ghost"
                color="#F5F5F5"
                _hover={{ color: '#F5F5F5' }}
                _active={{ bg: 'transparent' }}
              />
              <IconButton
                as={Link}
                to="https://www.youtube.com"
                aria-label="YouTube"
                icon={<FaYoutube />}
                variant="ghost"
                color="#F5F5F5"
                fontSize="24px"
                _hover={{ color: 'red.500' }}
                _active={{ bg: 'transparent' }}
              />
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <div>
                <a href="https://athletexelite.com" target="_blank" rel="noopener noreferrer" className="tilt-prism-footer">
                  Athlete X Elite
                </a>
              </div>
            </Flex>
          </Flex>
        </div>
      </footer>
    </Box>
  );
}

export default Footer;