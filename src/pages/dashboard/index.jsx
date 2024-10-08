import { useState } from "react";
import { Box } from "@mui/material";
import NavButtons from "./components/ui/NavButtons";
import Configuration from "./subpages/Configuration";
import Overview from "./subpages/Overview"; 
import Measurements from "./subpages/Measurements";
import Header from "../../components/ui/Header";

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Overview');

  const renderPage = () => {
    switch (activePage) {
      case 'Overview':
        return <Overview />;
      case 'Measurements':
        return <Measurements />;
      case 'Configuration':
        return <Configuration />;
      default:
        return <Overview />;
    }
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: '20px', left: '20px', right: '20px' }}>
        <Header title="DASHBOARD" subtitle="Comprehensive Monitoring of Energy Metrics and Historical Performance" />
        <NavButtons setActivePage={setActivePage} />
      </Box>
      <Box sx={{ marginTop: '100px', textAlign: 'center', minHeight: '100%' }}>
        {renderPage()}
      </Box>
    </Box>
  );
};

export default Dashboard;