   import React from 'react';
   import { Box, Tabs, Tab, Typography } from '@mui/material';

   // ===== BarterTradeTabs Component =====
   // Sub-tabs for each barter item category in the Barter Trades section
   const barterCategories = [
     'Meds',
     'Stims',
     'Body Armor',
     'Rigs',
     'Weapons',
     'Ammo',
     'Provisions',
     'Keys',
     'weapon parts',
     'gear',
     'Others',
   ];
   
   function BarterTradeTabs() {
     const [barterTab, setBarterTab] = React.useState(0);
   
     const handleBarterChange = (_event: React.SyntheticEvent, newValue: number) => {
       setBarterTab(newValue);
     };
   
     return (
       <Box sx={{ width: '100%' }}>
         <Tabs
           value={barterTab}
           onChange={handleBarterChange}
           aria-label="barter trade tabs"
           variant="scrollable"
           scrollButtons="auto"
           sx={{ borderBottom: 1, borderColor: 'divider' }}
         >
           {barterCategories.map((cat, idx) => (
             <Tab key={cat} label={cat} id={`barter-tab-${idx}`} aria-controls={`barter-tabpanel-${idx}`} />
           ))}
         </Tabs>
         {barterCategories.map((cat, idx) => (
           <div
             key={cat}
             role="tabpanel"
             hidden={barterTab !== idx}
             id={`barter-tabpanel-${idx}`}
             aria-labelledby={`barter-tab-${idx}`}
           >
             {barterTab === idx && (
               <Box sx={{ p: 2 }}>
                 <Typography>{cat} barter trades coming soon!</Typography>
               </Box>
             )}
           </div>
         ))}
       </Box>
     );
   }
export default BarterTradeTabs;
