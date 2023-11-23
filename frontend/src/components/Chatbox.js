import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      p={3}
      opacity={"0.9"}
      bg="white"
      w="100%"
      maxW={{ base: "100%", md: "68%" }} //
      borderRadius="lg"
      borderWidth="1px"
    >
      {selectedChat ? (
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      ) : (
        <Box flex="1" />
      )}
    </Box>
  );
};

export default Chatbox;
