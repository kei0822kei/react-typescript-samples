import { Box } from "@mui/material";
import BasicGraph from "../components/visjs/BasicGraph";

export default function Visjs() {

  return (
    <>
      <h2>Basic Graph</h2>
      <Box
        sx={{
          width: "100%",
          height: 800,
          backgroundColor: '#f5ebf7',
          boxShadow: 2,
        }}
      >
        <BasicGraph />
      </Box>
    </>
  );

};
