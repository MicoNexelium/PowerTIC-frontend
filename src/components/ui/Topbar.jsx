import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme"; // Assuming tokens is part of your theme setup
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Get the custom color tokens based on the current theme mode
  const colorMode = useContext(ColorModeContext); // Access color mode toggle function

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        backgroundColor: theme.palette.background.paper,
        width: "100%",
      }}
    >
      {/* Left Section: Logo and Menu Toggle */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Logo */}
        <img
          src="/assets/logoipsum-288.svg"
          alt="Logo"
          style={{ width: "150px", height: "40px", cursor: "pointer" }}
        />
        {/* Menu Toggle Button */}
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Center: Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: colors.primary[400], // Using custom color tokens
          borderRadius: "8px",
          padding: "0.5rem",
          width: "300px",
        }}
      >
        <SearchIcon style={{ marginRight: "8px" }} />
        <InputBase
          sx={{ flex: 1, color: colors.grey[100] }} // Use custom token for text color
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
      </Box>

      {/* Right Section: Contrast Toggle, Notifications, and Settings */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Dark/Light Mode Toggle */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Notifications and Settings */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;