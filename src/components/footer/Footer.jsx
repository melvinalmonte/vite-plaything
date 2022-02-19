import React from "react";
import { ButtonGroup, chakra, IconButton, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/all";

const Footer = () => {
  return (
    <chakra.footer
      bg={useColorModeValue("white", "gray.800")}
      flexShrink={0}
      pl={5}
      pr={5}
      py={{ base: "12", md: "16" }}
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Text>Footer logo</Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Nothing serious, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </chakra.footer>
  );
};

export default Footer;
