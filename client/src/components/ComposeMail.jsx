import React, { useState } from "react";
import {
  Box,
  Dialog,
  InputBase,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material/";
import { Close, DeleteOutline } from "@mui/icons-material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
  width: "90%",
  height: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  BoxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f2f6fc;
  & > p {
    font-size: 14px;
    font-weight: 500;
  }
`;
const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`;

const RecipientWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  & > div {
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 10px;
  }
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmails);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);
  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      from: "yash.narvekar01@gmail.com",
      subject: data.subject,
      body: data.body,
      data: new Date(),
      image: "",
      name: "Yash Narvekar",
      starred: false,
      type: "drafts",
    };

    saveDraftService.call(payload);

    if (!saveDraftService.error) {
      setOpenDialog(false);
      setData({});
    } else {
    }
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "yash.narvekar01@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }

    const payload = {
      to: data.to,
      from: "yash.narvekar01@gmail.com",
      subject: data.subject,
      body: data.body,
      data: new Date(),
      image: "",
      name: "Yash Narvekar",
      starred: false,
      type: "sent",
    };

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
    } else {
    }
    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <RecipientWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </RecipientWrapper>
      <TextField
        multiline
        rows={16}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        onChange={(e) => onValueChange(e)}
        name="body"
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
