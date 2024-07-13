import React from 'react'
import './History.css'

import { Button, Box, Typography, List, ListItem } from "@mui/material";
const History = ({history , clearHistory }) => {
    
  return (
    <Box className="hist" sx={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        History
      </Typography>
      <List>
        {history.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <Button variant="contained" color="error" onClick={clearHistory}>
        Clear History
      </Button>
    </Box>
  );
}

export default History