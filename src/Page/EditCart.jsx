import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { UpdateData } from "../Redux/action";

const EditCart = ({ element }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(element);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");
  let dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(UpdateData(formData));

    alert("Update");
    onClose();
  };

  return (
    <Box>
      <Button onClick={onOpen} size={"sm"} title={"Edit"}>
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} width={"800px"}>
        <ModalOverlay />
        <ModalContent width={"800px"}>
          <form>
            <ModalHeader>Edit</ModalHeader>
            <ModalCloseButton />
            <Container maxW="xl">
              <Stack spacing={3}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  defaultValue={formData.name}
                  onChange={(e) => setFormData(e.target.value)}
                  size="lg"
                />

                <FormLabel>Video:</FormLabel>
                <Input
                  type="url"
                  defaultValue={formData.video}
                  onChange={(e) => setFormData(e.target.value)}
                  size="lg"
                />

                <ModalFooter>
                  <Button
                    spinnerPlacement="end"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    mt={"-5px"}
                    onClick={handleOnSubmit}
                  >
                    Update
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Stack>
            </Container>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditCart;
