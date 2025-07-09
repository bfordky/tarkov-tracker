// ===== Imports =====
import React from 'react';
import {
  Tabs, Tab, Box, Typography,
} from '@mui/material';
import TraderTabs from './TraderTabs';
import QuestItemTraderTabs from './QuestItemTraderTabs';
import BarterTradeTabs from './BarterTradeTabs';
import HideoutZonesTabs from './HideoutZonesTabs';
import GunsmithQuestsPanel from './GunsmithQuestsPanel';

// ===== a11yProps Helper =====
// Accessibility props for tabs
function a11yProps(index: number) {
  return {
    id: `main-tab-${index}`,
    'aria-controls': `main-tabpanel-${index}`,
  };
}

// ===== TabPanel Component =====
// Used for main tab content switching
function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`main-tabpanel-${index}`}
      aria-labelledby={`main-tab-${index}`}
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

// ===== App Component =====
// Main app with top-level tabs
const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="main tabs">
        <Tab label="Quests" {...a11yProps(0)} />
        <Tab label="Quest Items" {...a11yProps(1)} />
        <Tab label="Hideout Zones" {...a11yProps(2)} />
        <Tab label="Gunsmith" {...a11yProps(3)} />
        <Tab label="Barter Trades" {...a11yProps(4)} /> {/* <-- Add this line */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <TraderTabs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuestItemTraderTabs />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HideoutZonesTabs />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GunsmithQuestsPanel />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BarterTradeTabs /> {/* <-- Add this line */}
      </TabPanel>
    </Box>
  );
};
// ===== Export App Component =====
export default App;