import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
  Image,
  Fade,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import logo from "../../styles/images/eagle.png";

const NavBar = () => {
  const mobileNav = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <React.Fragment>
      <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a display="flex" alignItems="center">
              <Image
                boxSize={"50px"}
                borderRadius={"full"}
                objectFit={"cover"}
                src={logo}
                alt={"Big blue chicken logo"}
              />
              <VisuallyHidden>Company logo</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              alignSelf={"center"}
              fontSize="xl"
              fontWeight="medium"
              ml="2"
            >
              Eaglets
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={4}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Text>Bob</Text>
              <Button borderRadius={"full"}>Logout</Button>
              <IconButton
                icon={<CgDarkMode />}
                aria-label={"color-mode"}
                onClick={toggleColorMode}
              />
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <Fade in={mobileNav.isOpen} reverse={!mobileNav.isOpen}>
                <VStack
                  bg={bg}
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Text>Bob</Text>
                  <Button borderRadius={"full"} w="full">
                    Logout
                  </Button>
                  <IconButton
                    icon={<CgDarkMode />}
                    aria-label={"color-mode"}
                    onClick={toggleColorMode}
                  />
                </VStack>
              </Fade>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default NavBar;
