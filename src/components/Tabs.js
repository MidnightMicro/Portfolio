import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue: number) => {
    setValue(newValue);
  };

  const handleNextTab = () => {
    setValue((prevValue) => (prevValue + 1) % 3); // Modulo 3 to loop back to the first tab after the last tab
  };

  return (
    <Box sx={{ mt: 30, backgroundColor: "white", width: "100%" }}>
      <Typography variant="h1">Projects</Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Task Tracker" {...a11yProps(0)} />
            <Tab label="GroundHog Games" {...a11yProps(1)} />
            <Tab label="Initiative Finder" {...a11yProps(2)} />
          </Tabs>
        </Grid>
      </Grid>
      <CustomTabPanel value={value} index={0}>
        {/* 
        TaskTracker Tab */}
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            height:750,
            maxWidth:'100%',
            flexDirection: "row",
            backgroundColor: "rgba(14,58,87)",
          }}
        >
          <Grid item xs>
            <Box
              component="img"
              sx={{
                p: 1,
                mt:2,
                height:700,
                width: '100%',
                maxWidth:1000,
                borderRadius:5,
              }}
              alt="Picture of Task Tracker"
              src="https://i.imgur.com/soEteaN.png"
            ></Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              p:1,
              borderColor: "white",
              borderRadius: 2,
              color: "white",
            }}
          >
            <Grid item xs={12} sx={{
            display: "flex",
            flexDirection: "column",
            height:'100%',
            maxHeight:700,
            maxWidth:'100%',
            p:1,
            border: 1,
            overflow:'auto',
            borderColor: "white",
            borderRadius: 2,
            color: "white",
          }}> 
            <Typography variant="h6" sx={{ textAlign: "justify" }}>
              Task Tracker was designed with cos-players in mind. For Dragon Con
              2023 in Atlanta, I sought to create a cosplay out of foam - not
              knowing what all was needed. I created this tracker so that it
              serve the practical usage of allow me to keep track of what pieces
              were needed to be completed, as well as a better idea of how much
              material I would need to finish each piece and how long the user
              would have by providing a due date.
              <br></br>
              <br></br>
              The tracker costs of 6 fields/boxes created using React
              and Material UI. As the user creates tasks, the title and tasks
              are populated in the middle box. In this box, the user is able to
              edit, delete, or mark the task complete. The right most box, shows
              the materials needed for the title in which it pertains to, the
              user can also edit this information in this box.
            </Typography>
            </Grid>
<Grid
  item
  xs
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Align content in the center
    border: 1,
    borderColor: "white",
    borderRadius: 2,
    backgroundColor: "rgba(14,58,87)",
    margin: 0,
    padding: 2, // Add padding to the container
  }}
>
  <Button
    sx={{ fontSize: 40, color: "white", backgroundColor: "transparent", border: "none", cursor: "pointer" }}
    onClick={() => window.open("https://task-tracker-64zj.onrender.com/", "_blank")}
  >
    Try it Out!
  </Button>
</Grid>
            <Grid
              item
              xs
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                backgroundColor: "white",
              }}
            >
              <Button
                variant="text"
                size="small"
                style={{ display: "flex", flexDirection: "column", width: 100 }}
                href="https://github.com/MidnightMicro/TaskTracker"
              >
                <img
                  height={80}
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                  alt="GitHub"
                />
                <label>GitHub</label>
              </Button>
              <Grid item xs sx={{ color: "black" }}>
                <Button
                  onClick={handleNextTab}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "lightblue",
                      border: 1,
                      mt: 1,
                      p: 3,
                      textTransform: "none",
                    }}
                    variant="h3"
                  >
                    View Next Project
                    <ArrowCircleRightOutlinedIcon fontSize="extralarge" />
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10}></Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* GroundHog Games Tab */}
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            height:750,
            maxwidth:'100%',
            flexDirection: "row",
            backgroundColor: "rgba(14,58,87)",
          }}
        >
          <Grid item xs>
            <Box
              component="img"
              sx={{
                p: 1,
                mt:2,
                height:'100%',
                maxHeight:700,
                width:'100%',
                maxWidth:900,
                borderRadius: 5,
              }}
              alt="Picture of GroundHog Games"
              src="https://i.imgur.com/cnxZ12h.png"
            ></Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
            flexDirection: "column",
            p:1,
            overflow:'auto',
            borderColor: "white",
            borderRadius: 2,
            color: "white",
            }}
          >
            <Grid item xs={12} sx={{
            display: "flex",
            flexDirection: "column",
            height:'100%',
            maxHeight:700,
            maxWidth:'100%',
            p:1,
      
            border: 1,
            overflow:'auto',
            borderColor: "white",
            borderRadius: 2,
            color: "white",
          }}> 
            <Typography variant="h6" sx={{ textAlign: "justify" }}>
              The objective of GroundHog Games was to display the information,
              release dates and a collection of videos of games coming out in
              the near future. We accomplished this by using APIs, thanks to GiantBomb and Gamespot to collect this information and display it in a
              simple way. We fetched information from various APIs and how to filter the
              information provided in the JSON files.
              <br></br>
              <br></br>
              From the home page, when the user entered the title of a game
              coming out soon, that search is sent to the API and the request is
              made to obtain information about it from the webAPI we used,
              GiantBomb. A picture of this game, as well as a brief summary, and
              videos of that game are rendered below, as well as a link to get
              more information. When the upcoming release button is pressed, the
              user is taken a new page -where a list of the next 10 games to
              release are displayed.
            </Typography>
            </Grid>
            <Grid
              item
              xs
              sx={{
                border: 1,
                borderColor: "white",
                borderRadius: 2,
                backgroundColor: "rgba(14,58,87)",
                
              }}
            >
                <Button
    sx={{ fontSize: 40, color: "white", backgroundColor: "transparent", border: "none", cursor: "pointer" }}
    onClick={() => window.open("https://lelarry26.github.io/DCProject-1/index.html", "_blank")}
  >
    Try it Out!
  </Button>
              
            </Grid>
            <Grid
              container
              xs
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                backgroundColor: "white",
              }}
            >
              <Button
                variant="text"
                size="small"
                style={{ display: "flex", flexDirection: "column", width: 100 }}
                href="https://github.com/lelarry26/DCProject-1"
              >
                <img
                  height={80}
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                  alt="GitHub"
                />
                <label>GitHub</label>
              </Button>
              <Grid item xs sx={{ color: "black" }}>
                <Button
                  onClick={handleNextTab}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "lightblue",
                      border: 1,
                      mt: 1,
                      p: 3,
                      textTransform: "none",
                    }}
                    variant="h3"
                  >
                    View Next Project
                    <ArrowCircleRightOutlinedIcon fontSize="extralarge" />
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Initiative Track Tab */}
      <Grid
          container
          xs={12}
          sx={{
            height:750,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "rgba(14,58,87)",
          }}
        >
          <Grid item xs>
            <Box
              component="img"
              sx={{
                p: 1,
                mt:5,
                height: 600,
                maxHeight: 700,
                width: 1000,
                maxWidth:1200,
                borderRadius: 10,
              }}
              alt="Picture of Initiative Tracker"
              src="../Images/initfinder.png"
            ></Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              p:1,
              borderColor: "white",
              color: "white",
            }}
          >

            <Grid item xs={12} sx={{
            display: "flex",
            flexDirection: "column",
            height:'100%',
            maxHeight:600,
            maxWidth:'100%',
            p:1,
            border: 1,
            overflow:'auto',
            borderColor: "white",
            borderRadius: 2,
            color: "white",
          }}> 
            <Typography variant="h6" sx={{ textAlign: "justify",overflow:'auto'}}>
              Initiative Finder was created for the TableTop Role-Playing Game called Pathfinder. Our objective for this project was to enable a Game Master to be able to create/edit and delete characters and monsters for an encounter in the game. With that in mind, there is also functionality that enables the users to track the units various statistics, as well as bonuses or other various upgrades or negative effects currently on that particular character. 
              <br></br>
              <br></br>
              As this was our Capstone project, I worked on the front-end aspects of the project using React, Material UI, while also providing support on the backend (Firebase, Javascript) as needed. In creating this app, it gives the Game Master as well as the players (work in progress) to see all the essential information from one screen.
            </Typography>
            </Grid>
            <Grid
              item
              xs
              sx={{
                display: "flex",
    flexDirection: "column",
    alignItems: "center", // Align content in the center
    border: 1,
    borderColor: "white",
    borderRadius: 2,
    backgroundColor: "rgba(14,58,87)",
    margin: 0,
    padding: 2, // Add padding to the container
  }}
            >
                <Button
                disabled
    sx={{ fontSize: 40, color: "white", backgroundColor: "transparent", border: "none", cursor: "pointer" }}
    onClick={() => window.open("https://task-tracker-64zj.onrender.com/", "_blank")}
  >
    <Typography sx={{color:'grey',fontSize:30}}>Currently in progress</Typography>
  </Button>
</Grid>
            <Grid
              container
              xs
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                backgroundColor: "white",
              }}
            >

              <Button
                variant="text"
                size="small"
                style={{ display: "flex", flexDirection: "column", width: 100 }}
                href="https://github.com/Nic-Horton/initiative-finder"
              >
                <img
                  height={80}
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                  alt="GitHub"
                />
                <label>GitHub</label>
              </Button>
              <Grid item xs sx={{ color: "black" }}>
                <Button
                  onClick={handleNextTab}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "lightblue",
                      border: 1,
                      mt: 1,
                      p: 1,
                      textTransform: "none",
                    }}
                    variant="h3"
                  >
                    Back to first project
                    <ArrowCircleRightOutlinedIcon fontSize="extralarge" />
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>

  );
}
