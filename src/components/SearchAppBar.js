import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../store";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { isLoggedIn, setIsLoggedIn, handleLogIn, handleLogOut } =
    useContext(AuthContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("q") || "";

  // đồng bộ value của input này với searchParams
  const onChangeSearchValue = (e) => {
    const newSearchValue = e.target.value;
    searchParams.set("q", newSearchValue);
    setSearchParams(searchParams);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Job Routing
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchValue}
                onChange={onChangeSearchValue}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {isLoggedIn ? (
                <>
                  <IconButton size="large" color="inherit" gap={10}>
                    <AccountCircleIcon />
                    tientien
                  </IconButton>
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleLogOut}
                  >
                    <LoginRoundedIcon />
                    Sign Out
                  </IconButton>
                </>
              ) : (
                <IconButton size="large" color="inherit" onClick={handleLogIn}>
                  <LoginRoundedIcon />
                  Sign In
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
