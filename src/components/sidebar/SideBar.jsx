import {
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";

const NavItem = (props) => {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: useColorModeValue("gray.600", "gray.300"),
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const SidebarContent = (props) => {
  const integrations = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      //   top="0"
      left="0"
      //   zIndex={"sticky"}
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem onClick={() => console.log("Home")} icon={MdHome}>
          Home
        </NavItem>
        <NavItem onClick={() => console.log("Articles")} icon={FaRss}>
          Articles
        </NavItem>
        <NavItem onClick={() => console.log("Collections")} icon={HiCollection}>
          Collections
        </NavItem>
        <NavItem
          onClick={() => console.log("Checklists")}
          icon={FaClipboardCheck}
        >
          Checklists
        </NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem onClick={() => console.log("Shopify")} pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem onClick={() => console.log("Slack")} pl="12" py="2">
            Slack
          </NavItem>
          <NavItem onClick={() => console.log("Zapier")} pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse>
        <NavItem onClick={() => console.log("Changelog")} icon={AiFillGift}>
          Changelog
        </NavItem>
        <NavItem onClick={() => console.log("Settings")} icon={BsGearFill}>
          Settings
        </NavItem>
      </Flex>
    </Box>
  );
};

const SideBar = ({ children }) => {
  const sidebar = useDisclosure();
  return (
    <Box as="section">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderColor={useColorModeValue("inherit", "gray.700")}
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
        </Flex>

        <Box as="main" p="4">
          <Box maxHeight={"61vh"} overflow={"auto"} as={"div"}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
