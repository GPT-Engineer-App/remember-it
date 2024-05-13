import React, { useState } from "react";
import { Container, VStack, Input, Button, Box, Text, useToast } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddNote = () => {
    if (input.trim() === "") {
      toast({
        title: "Empty note",
        description: "You can't add an empty note.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput("");
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} w="100%">
        <Input placeholder="Type your note here..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddNote()} />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddNote}>
          Add Note
        </Button>
        <VStack spacing={4} w="100%">
          {notes.map((note, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
              <Text>{note}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
