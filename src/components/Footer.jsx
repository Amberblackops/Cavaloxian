import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Grid, Stack } from "@mui/material";
import { AiFillLinkedin } from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {FaTelegram} from "react-icons/fa"
import {FaDiscord} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import {ImInstagram} from "react-icons/im"

import {AiFillYoutube} from "react-icons/ai"
import "../css/Footer.css";




export default function Footer() {
  return (
    <div className="foot"
    
    >
      <CssBaseline />
 
      <Box
        component="footer"
        sx={{
          backgroundColor: "black",

          py: 10,
          px: 10,
          mt: "auto",
        
        }}
      >
        <Container maxWidth="sm">
          
        
            <Stack
             style={{marginRight:"100rem"}}
              justifyContent="flex-start"
              direction="row"
              // alignItems="center"
            >
              
          
              
            </Stack>




          <div  >
            <Stack  className="pl"
              justifyContent="flex-end"
              direction="row"
              alignItems="center"
              spacing={6}
            >
              <p >Buy </p>
              <p>|</p>
              <p>About </p>
              <p>|</p>
              <p >Term </p>
              <p>|</p>
              <p>Contact </p>
            </Stack>
            <Stack
              justifyContent="flex-end"
              direction="row"
              alignItems="center"
            >
              <a href="https://www.linkedin.com/signup">
                <FaTelegram size={60} color="white"/> 
              </a>
              <a href="https://www.linkedin.com/signup">
                <FaDiscord size={60}  color="white"/>
              </a>
              <a href="https://www.linkedin.com/signup">
                <SiGmail size={60}color="white" />
              </a>
              <a href="https://www.linkedin.com/signup">
                <AiFillLinkedin size={60} color="white"/>
              </a>
              <a href="https://www.linkedin.com/signup">
                <AiOutlineFacebook size={60} color="white"/>
              </a>
              <a href="https://www.linkedin.com/signup">
                <AiOutlineTwitter size={60} color="white" />
              </a>
              <a href="https://www.linkedin.com/signup">
                <AiFillYoutube size={60} color="white" />
              </a>
              <a href="https://www.linkedin.com/signup">
                <ImInstagram size={60} color="white" />
              </a>
            </Stack>
          </div>
        </Container>
      </Box>
    </div>
  );
}