import React, { useState } from "react";
import { Box, Button, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  postDataFailure,
  postDataRequest,
  postDataSucess,
} from "../Redux/action";
import axios from "axios";

const CartForm = () => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");
  const [bucket, setBucket] = useState("Education video");

  const dispatch = useDispatch();

  const addData = () => {
    const payload = {
      name: name,
      video: video,
      bucket: bucket,
    };
    dispatch(postDataRequest());
    return axios
      .post(`https://sdfsfd.onrender.com/users_video`, payload)
      .then((r) => {
        dispatch(postDataSucess(r.data));
        console.log(r.data);
        alert("sucessfully Add data");
      })
      .catch((e) => {
        console.log(e);
        dispatch(postDataFailure());
        alert("plz try again");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    addData().then(() => getData());
  };

  return (
    <Box>
      <form>
        <Stack w="30%" m="auto" mt="20px">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
          <FormLabel>Video URL</FormLabel>
          <Input
            type="url"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            required
          />

          <Button onClick={handleSubmit} colorScheme="blue">
            Create
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CartForm;
