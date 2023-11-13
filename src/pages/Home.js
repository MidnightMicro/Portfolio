import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
import BasicTabTabs from "../components/Tabs";
import { useRef } from "react";
import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageTwoToneIcon from '@mui/icons-material/ContactPageTwoTone';

const drawerWidth = 240;

function Home() {
  const scollToRef = useRef();

  const ButtonMailto = ({ mailto, label, style }) => {
    return (
      <Link
        href={mailto}
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
        style={style}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <Grid container spacing={2} textAlign="center"></Grid>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundImage: `url('https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/12.jpg?3')`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(1.5px)",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          zIndex: 1,
        }}
      >
        <Grid
          container
          textAlign="center"
          sx={{
            border: 3,
            borderRadius: 8,
            p: 3,
            mt: 40,
            mx: "auto",

            justifyContent: "center",
            width: 700,
            backgroundColor: "rgba(0,0,0,.6)",
            color: "white",
          }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Typography variant="h1">Derek Szeto</Typography>
            <Typography variant="h4">Full-Stack Developer</Typography>
            {/* <Typography>or click below to be routed!</Typography> */}
          </Grid>
        </Grid>
        <Grid
          textAlign="center"
          sx={{
            border: 3,
            borderRadius: 2,
            p: 3,
            mr: "auto",
            ml: "auto",
            mt: 8,
            width: 800,
            background: "linear-gradient(to top, darkblue, rgba(2, 78, 165))",
            border: "5px solid rgba(217,212,215)",
            color: "white",
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems:"center",
            }}
          >
            <Grid item xs>
              <IconButton
                label="Email"
                onClick={() =>
                  window.open("mailto:szeto.d71@gmail.com", "_blank")
                }
              >
                <MailIcon
                  sx={{ color: "white", fontSize: "6rem" }}
                  fontSize="large"
                />
              </IconButton>
            </Grid>
            <Grid item xs>
            <IconButton
                label="Email"
                onClick={() =>
                  window.open("https://docs.google.com/document/d/e/2PACX-1vTWLHuccKGtci3R7lCTu_2ioxWlUn7-zR-rA3Qw1GPaQBsw2TC73HLeQ-6MaACSfng-8zvFZyFlAklI/pub", "_blank")
                }
              >
                <ContactPageTwoToneIcon
                  sx={{ color: "white", fontSize: "6rem" }}
                  fontSize="large"
                />
              </IconButton>
            </Grid>
            <Grid item xs>
              <IconButton
                label="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/derek-szeto-876422179/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon
                  sx={{ color: "white", fontSize: "6rem" }}
                  fontSize="large"
                />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Button
                variant="text"
                size="small"
                href="https://github.com/Nic-Horton/initiative-finder"
              >
                <img
                  height={80}
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                  alt="GitHub"
                  style={{ filter: "brightness(100) saturate(100%)" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        textAlign="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 2,
          p: 2,
          mx: "auto",
          mt: 40,
          width: 800,
          background: "linear-gradient(to top, darkblue, rgba(2, 78, 165,0.8))",
          border: "5px solid rgba(217,212,215)",
          color: "white",
        }}
      >
        <Typography variant="h2" sx={{ m: "auto", p: 2 }}>
          About me
        </Typography>
        <Typography>
          Hello! My name is Derek Szeto. I love sci-fi, fantasy and video games
          (as you may have gathered from the sample of projects I have listed!).
          I have worked in the health care field for more than 5 years. I've
          always had a strong interest in computers and coding. With finishing
          my Digital Crafts program, I am looking forward to what is to come in
          the future!
        </Typography>
      </Grid>

      <Grid
        container
        sx={{
          background: "linear-gradient(to top, darkblue, rgba(2, 78, 165,0.8))",
          color: "white",
          justifyContent: "center",
          border: "5px solid rgba(217,212,215)",
          borderRadius:4,
          mt:15,
          mx:'auto',
          width:1000,
        }}
      >
        <Grid
          container
          sx={{ maxWidth: 1000, p: 4 }}
          className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="w-full flex justify-center items-center flex-col mb-7"
          >
            <Typography
              variant="h3"
              sx={{ color: "white", mb: 5 }}
              className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center"
            >
              Skills
            </Typography>
          </Grid>

          <Grid
            container
            xs={12}
            sx={{ display: "flex", flexDirection: "row" }}
            spacing={4}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          >
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                  textAlign: "center", // Center the text
                  height: "100%", // Set a consistent height for all items
                }}
              >
                <Typography variant="h6" className="my-4">
                  HTML
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  CSS
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  JAVASCRIPT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  REACT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  GITHUB
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            xs
            spacing={4}
            columns={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 2,
              alignItems: "center",
            }}
          >
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  SQL
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  Node.js
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  API
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper
                sx={{
                  color: "yellow",
                  backgroundColor: "rgba(2,70,162)",
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  },
                  duration: "500ms",
                  padding: 2,
                }}
              >
                <Typography variant="h6" className="my-4">
                  Material UI
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <BasicTabTabs />


    </>
  );
}

export default Home;
