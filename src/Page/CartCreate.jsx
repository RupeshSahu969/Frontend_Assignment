import {
  Box,
  FormLabel,
  Heading,
  SimpleGrid,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData, getData } from "../Redux/action";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button, Divider, Input } from "antd";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  EditIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../Redux/action";

import EditCart from "./EditCart";
const CartCreate = () => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");
  const [bucket, setBucket] = useState("Education video");
  const card = useSelector((state) => state.card);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (card.length == 0) {
      dispatch(getData());
    }
  }, []);

  const hendleDelete = (id) => {
    dispatch(deleteData(id));
    alert("Data Delete");
  };

  const hendleEdit = (id) => {
    dispatch(UpdateData(id));
    alert("Edit");
  };

  console.log(card);
  return (
    <Box>
      {card?.length > 0 &&
        card.map((item) => {
          return (
            <Card maxW="sm" w="50%" m="auto" mb="20px">
              <CardBody>
                <iframe src={item.video} target="_blank" />
                <Stack mt="6" spacing="3">
                  <Heading size="md"> {item.name} </Heading>
                </Stack>
                <Box>
                  {/* <Button>
                    <EditIcon  />
                  </Button> */}
                  <Button>
                    <EditCart element={item} />
                  </Button>

                  <Button>
                    <DeleteIcon
                      onClick={() => hendleDelete(item.id)}
                    ></DeleteIcon>
                  </Button>
                </Box>
              </CardBody>
            </Card>
          );
        })}
    </Box>
  );
};

export default CartCreate;
