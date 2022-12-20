import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { GetEmployees, SaveEmployeeDetails } from "../api/details";

const Employee = () => {
  const [employees, setemployees] = useState<[] | [{ name: String }]>([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    GetEmployees().then((result) => {
      setemployees(result);
    });
  }, [reload]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    SaveEmployeeDetails(data.get("name"))
      .then((result) => {
        console.log(result);
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Employee Details
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Employee Name"
            name="name"
            autoComplete="name"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Grid item container justifyContent="center">
        {employees.length === 0 ? (
          <Chip label="No Employee Added" style={{ marginTop: "40px" }} />
        ) : (
          <Grid item container justifyContent="center" gap={3}>
            {employees.map((item) => (
              <Grid item>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#2A2A2A",
                  }}
                >
                  {item?.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Employee;
