import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { tabsHeader } from "../configs/configs";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { getAllOnuDetails } from "../api/smartolt";

export function MainTabs() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://rednuevaconexion.smartolt.com/api/onu/get_all_onus_details",
          {
            maxBodyLength: Infinity,
            headers: {
              "X-Token": "f34191fa081849129f1566ff553e6149",
            },
            // timeout: 5000, // 5 segundos
          }
        );
        console.log(data);
      } catch (error) {
        return error instanceof Error ? error.message : error;
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid container>
        <Grid
          container
          justifyContent="center"
          maxWidth="lg"
          display="flex"
          gap={3}
        >
          <Card sx={{ minWidth: 275 }} style={{ background: "#358EE1" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ lg: 7, mb: 3 }}
                color="white"
                gutterBottom
              >
                ESPERANDO AUTORIZACIÓN
              </Typography>
              <Typography variant="h5" sx={{ lg: 7, mb: 2 }} color="white">
                0
              </Typography>
              <Divider style={{ border: "1px solid white" }} />
              <Typography color="white" variant="h6" sx={{ lg: 7, mt: 3 }}>
                GPON: 03
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} style={{ background: "#31A933" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ lg: 7, mb: 3 }}
                color="white"
                gutterBottom
              >
                ONLINE
              </Typography>
              <Typography variant="h5" sx={{ lg: 7, mb: 2 }} color="white">
                5401
              </Typography>
              <Divider style={{ border: "1px solid white" }} />
              <Typography color="white" variant="h6" sx={{ lg: 7, mt: 3 }}>
                Total autorizados: 6535
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} style={{ background: "#2C353C" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ lg: 7, mb: 3 }}
                color="white"
                gutterBottom
              >
                TOTAL OFFLINE
              </Typography>
              <Typography variant="h5" sx={{ lg: 7, mb: 2 }} color="white">
                1060
              </Typography>
              <Divider style={{ border: "1px solid white" }} />
              <Stack direction="row" gap={2} justifyContent="center">
                <Typography
                  color="white"
                  variant="subtitle"
                  sx={{ lg: 7, mt: 3 }}
                >
                  PwrFail: 1060
                  <br />
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle"
                  sx={{ lg: 7, mt: 3 }}
                >
                  LoS: 0
                  <br />
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle"
                  sx={{ lg: 7, mt: 3 }}
                >
                  N/A: 74
                  <br />
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} style={{ background: "#F59C1A" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ lg: 7, mb: 3 }}
                color="white"
                gutterBottom
              >
                LOW SIGNAL
              </Typography>
              <Typography variant="h5" sx={{ lg: 7, mb: 2 }} color="white">
                502
              </Typography>
              <Divider style={{ border: "1px solid white" }} />
              <Stack direction="row" gap={2} justifyContent="center">
                <Typography
                  color="white"
                  variant="subtitle"
                  sx={{ lg: 7, mt: 3 }}
                >
                  Warning: 502
                  <br />
                </Typography>
                <Typography
                  color="white"
                  variant="subtitle"
                  sx={{ lg: 7, mt: 3 }}
                  flexGrow={1}
                />
                <Typography
                  color="white"
                  variant="subtitle"
                  sx={{ lg: 7, mt: 3 }}
                >
                  Critical: 207
                  <br />
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {tabsHeader.map((item, index) => (
                  <Tab key={index} label={item} value={String(index)} />
                ))}
              </TabList>
            </Box>
            <TabPanel value="0">Item One</TabPanel>
            <TabPanel value="1">Item Two</TabPanel>
            <TabPanel value="2">Item Three</TabPanel>
            <TabPanel value="3">Item Thre</TabPanel>
            <TabPanel value="4">Item Thr</TabPanel>
            <TabPanel value="5">Item Th</TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </>
  );
}
