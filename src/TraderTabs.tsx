import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import PraporQuestList from './PraporQuestList';
import TherapistQuestList from './TherapistQuestList';
import SkierQuestList from './SkierQuestList';
import { traderList } from './traders';
import MechanicQuestList from './MechanicQuestList';
import PeacekeeperQuestList from './PeacekeeperQuestList';
import RagmanQuestList from './RagmanQuestList';
import JaegerQuestList from "./JaegerQuestList";
import FenceQuestList from "./FenceQuestList";
import RefQuestList from "./RefQuestList";
import LightkeeperQuestList from "./LightkeeperQuestList";
import BTRDriverQuestList from "./BTRDriverQuestList";
// ===== TraderTabs Component =====
// Sub-tabs for each trader in the Quests section
function TraderTabs() {
  const [traderTab, setTraderTab] = React.useState(0);

  const handleTraderChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTraderTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={traderTab}
        onChange={handleTraderChange}
        aria-label="trader tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {traderList.map((trader, idx) => (
          <Tab key={trader} label={trader} id={`trader-tab-${idx}`} aria-controls={`trader-tabpanel-${idx}`} />
        ))}
      </Tabs>
      {traderList.map((trader, idx) => (
        <div
          key={trader}
          role="tabpanel"
          hidden={traderTab !== idx}
          id={`trader-tabpanel-${idx}`}
          aria-labelledby={`trader-tab-${idx}`}
        >
          {traderTab === idx && (
            <Box sx={{ p: 2 }}>
              {trader === "Prapor" ? <PraporQuestList /> :
              trader === "Therapist" ? <TherapistQuestList /> :
              trader === "Skier" ? <SkierQuestList /> :
              trader === "Mechanic" ?<MechanicQuestList /> :
              trader === "Peacekeeper"? <PeacekeeperQuestList /> :
              trader === "Ragman"? <RagmanQuestList /> :
              trader === "Jaeger"? <JaegerQuestList /> :
              trader === "Fence"? <FenceQuestList /> :
              trader === "Ref"? <RefQuestList /> :
              trader === "Lightkeeper"? <LightkeeperQuestList /> :
              trader === "BTR Driver"? <BTRDriverQuestList /> :

              <Typography>{trader} quests coming soon!</Typography>}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
}
export default TraderTabs;