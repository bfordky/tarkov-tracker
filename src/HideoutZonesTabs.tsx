import React from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  List, 
  ListItem, 
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { HideoutZone, HideoutUpgrade, RequiredItem, TraderRequirement, SkillRequirement, HideoutZoneRequirement } from './types';

// ===== Hideout Zones Data =====
const hideoutZones: HideoutZone[] = [
  {
    id: 'medstation',
    name: 'Medstation',
    description: 'Medical station for crafting medical items and treating injuries',
    category: 'Essential',
    maxLevel: 3,
    upgrades: [
      {
        level: 1,
        name: 'Medstation Level 1',
        description: 'Basic medical station for crafting essential medical items',
        requirements: {
          items: [
            { id: 'roubles', name: 'Roubles', quantity: 50000 },
            { id: 'disposable_syringe', name: 'Disposable syringe', quantity: 1 },
            { id: 'pile_of_meds', name: 'Pile of meds', quantity: 1 },
            { id: 'aseptic_bandage', name: 'Aseptic bandage', quantity: 2 },
            { id: 'ololo_vitamins', name: 'Bottle of OLOLO multi vitamins', quantity: 1 }
          ]
        },
        benefits: [
          'Craft Salewa first aid kit',
          'Craft AI-2 medkit',
          'Craft bandages',
          'Craft painkillers'
        ],
        craftTime: '2 hours'
      },
      {
        level: 2,
        name: 'Medstation Level 2',
        description: 'Advanced medical station with enhanced crafting capabilities',
        requirements: {
          items: [
            { id: 'roubles', name: 'Roubles', quantity: 150000 },
            { id: 'ledx', name: 'LEDX Skin Transilluminator', quantity: 1 },
            { id: 'defibrillator', name: 'Portable defibrillator', quantity: 1 },
            { id: 'morphine', name: 'Morphine injector', quantity: 3 },
            { id: 'adrenaline', name: 'Adrenaline injector', quantity: 2 },
            { id: 'salewa', name: 'Salewa first aid kit', quantity: 2 }
          ],
          money: 150000,
          traders: [
            { trader: 'Therapist', loyaltyLevel: 2 }
          ],
          skills: [
            { skill: 'Health', level: 3 }
          ],
          hideoutZones: [
            { zone: 'Generator', level: 1 },
            { zone: 'Lavatory', level: 1 }
          ]
        },
        benefits: [
          'Craft ETG-change regenerative stimulant injector',
          'Craft M.U.L.E. stimulant injector',
          'Craft XTG-12 antidote injector',
          'Craft 2A2-(b-TG) stimulant injector',
          'Enhanced healing efficiency'
        ],
        craftTime: '4 hours'
      },
      {
        level: 3,
        name: 'Medstation Level 3',
        description: 'Maximum level medical station with all crafting capabilities',
        requirements: {
          items: [
            { id: 'roubles', name: 'Roubles', quantity: 500000 },
            { id: 'ledx', name: 'LEDX Skin Transilluminator', quantity: 3 },
            { id: 'defibrillator', name: 'Portable defibrillator', quantity: 2 },
            { id: 'ophthalmoscope', name: 'Ophthalmoscope', quantity: 2 },
            { id: 'pile_of_meds', name: 'Pile of meds', quantity: 10 },
            { id: 'ololo_vitamins', name: 'Bottle of OLOLO multi vitamins', quantity: 5 }
          ],
          money: 500000,
          traders: [
            { trader: 'Therapist', loyaltyLevel: 4 }
          ],
          skills: [
            { skill: 'Health', level: 8 }
          ],
          hideoutZones: [
            { zone: 'Generator', level: 2 },
            { zone: 'Lavatory', level: 2 },
            { zone: 'Intelligence Center', level: 1 }
          ]
        },
        benefits: [
          'All previous benefits',
          'Craft Propital regenerative stimulant injector',
          'Craft Zagustin hemostatic drug injector',
          'Maximum healing efficiency',
          'Reduced craft times'
        ],
        craftTime: '6 hours'
      }
    ]
  },
  {
    id: 'lavatory',
    name: 'Lavatory',
    description: 'Basic hygiene facility',
    category: 'Essential',
    maxLevel: 3,
    upgrades: [
      {
        level: 1,
        name: 'Lavatory Level 1',
        description: 'Basic lavatory facility',
        requirements: {
          items: [
            { id: 'roubles', name: 'Roubles', quantity: 25000 },
            { id: 'toilet_paper', name: 'Toilet paper', quantity: 2 },
            { id: 'soap', name: 'Soap', quantity: 1 }
          ]
        },
        benefits: [
          'Basic hygiene maintenance',
          'Required for other hideout zones'
        ],
        craftTime: '1 hour'
      }
    ]
  },
  {
    id: 'workbench',
    name: 'Workbench',
    description: 'Weapon modification and crafting station',
    category: 'Production',
    maxLevel: 3,
    upgrades: [
      {
        level: 1,
        name: 'Workbench Level 1',
        description: 'Basic weapon modification station',
        requirements: {
          items: [
            { id: 'roubles', name: 'Roubles', quantity: 75000 },
            { id: 'screwdriver', name: 'Screwdriver', quantity: 1 },
            { id: 'pliers', name: 'Pliers', quantity: 1 },
            { id: 'wrench', name: 'Wrench', quantity: 1 }
          ]
        },
        benefits: [
          'Basic weapon modifications',
          'Craft simple weapon parts'
        ],
        craftTime: '3 hours'
      }
    ]
  },
  {
    id: 'generator',
    name: 'Generator',
    description: 'Power generation for hideout facilities',
    category: 'Essential',
    maxLevel: 3,
    upgrades: [
      {
        level: 1,
        name: 'Generator Level 1',
        description: 'Basic power generation',
        requirements: {
          items: [
            { id: 'roubles', name: 'Roubles', quantity: 100000 },
            { id: 'car_battery', name: 'Car battery', quantity: 1 },
            { id: 'spark_plug', name: 'Spark plug', quantity: 2 },
            { id: 'motor', name: 'Electric motor', quantity: 1 }
          ]
        },
        benefits: [
          'Power for basic hideout zones',
          'Required for most other zones'
        ],
        craftTime: '4 hours'
      }
    ]
  }
];

// ===== HideoutZonesTabs Component =====
function HideoutZonesTabs() {
  const [zoneTab, setZoneTab] = React.useState(0);
  const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({});

  const handleItemCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleZoneChange = (_event: React.SyntheticEvent, newValue: number) => {
    setZoneTab(newValue);
  };

  const renderRequirement = (requirement: RequiredItem[] | number | TraderRequirement[] | SkillRequirement[] | HideoutZoneRequirement[], type: string) => {
    switch (type) {
      case 'items':
        if (!Array.isArray(requirement)) return null;
        return (
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Required Items:
            </Typography>
            <List dense>
              {(requirement as RequiredItem[]).map((item: RequiredItem, index: number) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedItems[item.id] || false}
                        onChange={() => handleItemCheck(item.id)}
                        sx={{ transform: 'scale(1.5)' }}
                      />
                    }
                    label={
                      <Box>
                        <Typography variant="h6">
                          {item.name} x{item.quantity}
                        </Typography>
                        {item.foundInRaid && (
                          <Typography variant="body1" color="text.secondary">
                            Found in Raid
                          </Typography>
                        )}
                      </Box>
                    }
                    sx={{ 
                      width: '100%', 
                      margin: 0,
                      '& .MuiFormControlLabel-label': {
                        width: '100%'
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        );
      case 'money':
        return (
          <Box>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Money Required:
            </Typography>
            <Typography variant="body2">
              {requirement.toLocaleString()} ₽
            </Typography>
          </Box>
        );
      case 'traders':
        if (!Array.isArray(requirement)) return null;
        return (
          <Box>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Trader Requirements:
            </Typography>
            <List dense>
              {(requirement as TraderRequirement[]).map((trader: TraderRequirement, index: number) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <ListItemText 
                    primary={`${trader.trader} - Loyalty Level ${trader.loyaltyLevel}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        );
      case 'skills':
        if (!Array.isArray(requirement)) return null;
        return (
          <Box>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Skill Requirements:
            </Typography>
            <List dense>
              {(requirement as SkillRequirement[]).map((skill: SkillRequirement, index: number) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <ListItemText 
                    primary={`${skill.skill} - Level ${skill.level}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        );
      case 'hideoutZones':
        if (!Array.isArray(requirement)) return null;
        return (
          <Box>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Hideout Zone Requirements:
            </Typography>
            <List dense>
              {(requirement as HideoutZoneRequirement[]).map((zone: HideoutZoneRequirement, index: number) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <ListItemText 
                    primary={`${zone.zone} - Level ${zone.level}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        );
      default:
        return null;
    }
  };

  const renderUpgrade = (upgrade: HideoutUpgrade) => (
    <Card key={upgrade.level} sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h3">
            {upgrade.name}
          </Typography>
          <Chip label={`Level ${upgrade.level}`} color="primary" size="small" />
        </Box>
        
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {upgrade.description}
        </Typography>

        {/* Requirements section (no longer collapsible) */}
        <Box sx={{ mt: 2, mb: 2 }}>
          {upgrade.requirements.items && (
            <Box>
              {renderRequirement(upgrade.requirements.items, 'items')}
            </Box>
          )}
          {upgrade.requirements.money && (
            <Box>
              {renderRequirement(upgrade.requirements.money, 'money')}
            </Box>
          )}
          {upgrade.requirements.traders && (
            <Box>
              {renderRequirement(upgrade.requirements.traders, 'traders')}
            </Box>
          )}
          {upgrade.requirements.skills && (
            <Box>
              {renderRequirement(upgrade.requirements.skills, 'skills')}
            </Box>
          )}
          {upgrade.requirements.hideoutZones && (
            <Box>
              {renderRequirement(upgrade.requirements.hideoutZones, 'hideoutZones')}
            </Box>
          )}
        </Box>

        <Accordion sx={{ mt: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Benefits</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {upgrade.benefits.map((benefit: string, index: number) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <ListItemText primary={`• ${benefit}`} />
                </ListItem>
              ))}
            </List>
            {upgrade.craftTime && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Craft Time: {upgrade.craftTime}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>

        {upgrade.note && (
          <Typography variant="body2" color="warning.main" sx={{ mt: 1 }}>
            Note: {upgrade.note}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={zoneTab}
        onChange={handleZoneChange}
        aria-label="hideout zones tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {hideoutZones.map((zone, idx) => (
          <Tab 
            key={zone.id} 
            label={
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body2">{zone.name}</Typography>
                <Chip 
                  label={`Max: ${zone.maxLevel}`} 
                  size="small" 
                  variant="outlined"
                  sx={{ fontSize: '0.7rem', height: '20px' }}
                />
              </Box>
            } 
            id={`hideout-zone-tab-${idx}`} 
            aria-controls={`hideout-zone-tabpanel-${idx}`} 
          />
        ))}
      </Tabs>
      
      {hideoutZones.map((zone, idx) => (
        <div
          key={zone.id}
          role="tabpanel"
          hidden={zoneTab !== idx}
          id={`hideout-zone-tabpanel-${idx}`}
          aria-labelledby={`hideout-zone-tab-${idx}`}
        >
          {zoneTab === idx && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                {zone.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {zone.description}
              </Typography>
              {zone.category && (
                <Chip 
                  label={zone.category} 
                  color="secondary" 
                  size="small" 
                  sx={{ mb: 2 }}
                />
              )}
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Upgrades
              </Typography>
              
              {zone.upgrades.map(renderUpgrade)}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
}

export default HideoutZonesTabs;
