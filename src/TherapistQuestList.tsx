import React from 'react';
import {
  Box, Typography, Checkbox, FormControlLabel, IconButton, TextField, MenuItem, Dialog, Button,
  Card, CardContent, Chip, Divider, Accordion, AccordionSummary, AccordionDetails,
  List, ListItem, ListItemText, ListItemIcon
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import type { Quest } from './types';

// ===== Quest Data =====
// Therapist's quest list with objectives
const therapistQuests: Quest[] = [
    //First in line quest======================
   {
    id:'first_line',
    name: 'First in Line',
    description:'Locate the emercom station, find and handover medical items',
    leadsTo: ['Shortage'],
    map: 'Ground Zero',
    requiredForKappa: true,
    levelRequired: 1,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 6400 },
    { type: 'item', name: 'Factory plan map', amount: 1 },
    { type: 'item', name: 'Bottle of water (0.6L)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 1200 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.01' },
  ],
    objectives: [
      {id: 'first_emercom', description:'Locate the Emercom station on Ground Zero', type:'checkbox',},
      {id: 'first_meds', description:'Hand over any 3 medicine items', type: 'counter', required: 3, foundInRaid: true}
    ],
    requiredItems:[
      {id:'', name: '', quantity: 1}
    ],
  },
// Shortage quest====================================================================
  {
    id: 'shortage',
    name: 'Shortage',
    description: 'Hand over 3 Salewa first aid kits.',
    leadsTo: ['operation_aquarius_part_1'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired:1,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 15000 },
    { type: 'item', name: 'Car first aid kit', amount: 2 },
    { type: 'item', name: 'Analgin painkillers', amount: 4 },
    { type: 'item', name: 'Immobilizing splint', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 2000 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives: [
      { id: 'salewa', description: 'Hand over Salewa kits', type: 'counter', required: 3, foundInRaid: true }
    ],
    requiredItems: [
      { id: 'salewa', name: 'Salewa First Aid Kit', quantity: 3, foundInRaid: true }
    ]
  },
//Operation Aquarius part 1 quest ===================================================
  {
    id: 'operation_aquarius_part_1',
    name: 'Operation Aquarius - Part 1',
    description: 'Locate the water hidden inside the dorms on Customs.',
    leadsTo: ['operation_aquarius_part_2'],
    map: 'Customs',
    requiredForKappa: false,
    levelRequired: 6,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 14000 },
    { type: 'item', name: 'Bottle of water (0.6L)', amount: 5 },
    { type: 'item', name: 'Water filter', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 3300 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
    { type: 'rep', name: 'Skier Rep', amount: '-0.02' },
  ],
    objectives: [
      { id: 'find_water', description: 'Locate the water in dorm room 206', type: 'checkbox' }
    ],
     requiredItems:[
      {id:'operation_aquakey', name: 'Dorm room 206 key', quantity: 1}
    ],
  },
//operation aquarius part 2 quest ===================================================
   {
    id:'operation2',
    name: 'Operation Aquarius-part 2',
    description:'Eliminate 15 scavs',
    map: 'Customs',
    requiredForKappa: false,
    levelRequired: 6,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 20000 },
    { type: 'item', name: 'Esmarch tourniquet', amount: 3 },
    { type: 'item', name: 'Aluminum splint', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 3400 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
    { type: 'rep', name: 'Jaeger Rep', amount: '+0.01' },
    { type: 'unlock', name: 'Purchase of Army bandage at Therapist LL2' }
  ],
    objectives: [
      {id: 'operation2_kill', description:'Eliminate 15 scavs on customs', type:'counter',required: 15}
    ],
  },
//Postman Pat part 2 quest=============================================================
    {
    id:'postman2',
    name: 'Postman Pat-part 2',
    description:'"hand over the letter from prapors messenger',
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'item', name: 'ANA Tactical Beta 2 Battle backpack (Olive Drab)', amount: 1 },
    { type: 'item', name: '6B2 body armor (Flora)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 5900 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'postman2_letter', description:'Hand the letter from postman pat 1 to therapist', type: 'checkbox'}
    ]
  },
// SANITARY STANDARDS QUEST =========================================================
    {
    id:'san_stand1',
    name: 'Sanitary Standards - Part 1',
    description:'Find and hand over 1 gas analyzer',
    leadsTo: ['Sanitary Standards - Part 2'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 4,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 14000 },
    { type: 'item', name: 'Car first aid kit', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 2200 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of Car first aid kit at Therapist LL1' }
  ],
    objectives:[
      {id:'san1_gas', description:'Find and hand over 1 gas analyzer', type: 'counter', required: 1, foundInRaid: true,}
    ]
  },
// SANITARY STANDARDS - PART 2 QUEST=================================================
    {
    id:'san_stand2',
    name: 'Sanitary Standards - Part 2',
    description:'Find and hand over 2 Gas analyzers',
    leadsTo: ['Painkiller'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 8,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 30000 },
    { type: 'item', name: 'Propital regenerative stimulant injector', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 4500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'san_gas2', description:'Find and hand over 2 Gas Analyzers', type: 'counter', required: 2, foundInRaid: true,}
    ]
  },
//PAINKILLER QUEST ===================================================================
    {
    id:'painkiller',
    name: 'Painkiller',
    description:'Find and hand over 4 Morphine injectors',
    leadsTo: ['Pharmacist'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 8,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 17000 },
    { type: 'item', name: 'Disposable syringe', amount: 5 },
    { type: 'item', name: 'Silicone tube', amount: 1 },
    { type: 'item', name: 'Analgin painkillers', amount: 2 },
    { type: 'item', name: 'Pile of meds', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 4500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'pain_handover', description:'Find and handover 4 Morphine injectors', type: 'counter',required: 4, foundInRaid: true}
    ]
  },
// PHARMACIST QUEST ==================================================================
    {
    id:'pharm',
    name: 'Pharmacist',
    description:'Obtain the case containing the device on customs and hand in to Therapist',
    leadsTo: ['General Wares', 'Health Care Privacy - Part 1', 'Car Repair', 'Disease History', 'Population Census', 'Supply Plans OR Kind of Sabotage '],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 25000 },
    { type: 'item', name: 'AFAK tactical individual first aid kit', amount: 1 },
    { type: 'item', name: 'Pile of meds', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 5700 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Barter for 6B47 Ratnik-BSh helmet (EMR cover) at Ragman LL2' }
  ],
    objectives:[
      {id:'pham_quest', description:'Obtain the case containing the device in dorm 114 and hand in to therapist', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'pharm_key', name: 'Dorm room 114 key', quantity: 1, showCheckbox: true}
    ],
  },
// CAR REPAIR QUEST ==================================================================
    {
    id:'car_repair',
    name: 'Car Repair',
    description:'Obtain the specified items and turn into Therapist',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 25000 },
    { type: 'item', name: 'Grizzly medical kit', amount: 1 },
    { type: 'item', name: 'eTG-change regenerative stimulant injector', amount: 1 },
    { type: 'item', name: 'Adrenaline injector', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 6900 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'rep_batt', description:'Find 4 Car batteries', type: 'counter',required: 4, foundInRaid: true},
      {id:'rep_plug', description:'Find 8 spark plugs', type: 'counter', required: 8, foundInRaid: true}
    ]
  },
// DISEASE HISTORY ==================================================================
    {
    id:'disease_history',
    name: 'Disease History',
    description:'Find the medical records on Reserve',
    leadsTo: ['Seaside Vacation'],
    map: 'Reserve',
    requiredForKappa: true,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 30000 },
    { type: 'item', name: 'Grizzly medical kit', amount: 1 },
    { type: 'item', name: 'Ibuprofen painkillers', amount: 1 },
    { type: 'item', name: 'CALOK-B hemostatic applicator', amount: 5 },
    { type: 'xp', name: 'Experience', amount: 7200 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Red paint Hideout wall style' }
  ],
    objectives:[
      {id:'med_rec1', description:'Obtain Medical record #1 on Reserve', type: 'checkbox'},
      {id:'med_rec2', description:'Obtain Medical record +2 on Reserve', type: 'checkbox'}
    ]
    // add descriptions and pictures of locations of medical records
  },
// SUPPLY PLANS QUEST ================================================================
    {
    id:'supply_plan',
    name: 'Supply Plans',
    description:'Obtain the Secure Folder 0052 in the sawmill cabin on Woods',
    leadsTo: ['Dangerous Road', 'Huntsman Path - Woods Keeper'],
    map: 'Woods',
    requiredForKappa: true,
    levelRequired: 13,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 75000 },
    { type: 'item', name: 'CMS surgical kit', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 7500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'', description:'Obtain the Secure Folder 0052 in the sawmill cabin on Woods', type: 'checkbox'}
    ]
    // add notiification to user that this is a multiple choice quest
    // add pictures and desctiption where the folder is located
  },
// HEALTH CARE PRIVACY PART 1 QUEST =================================================
    {
    id:'health_priv1',
    name: 'Health Care Privacy - Part 1',
    description:'Locate and mark the ambulances on Shoreline',
    leadsTo: ['Health Care Privacy - Part 2'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 22000 },
    { type: 'item', name: 'IFAK individual first aid kit', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 4800 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of IFAK individual first aid kit at Therapist LL3' }
  ],
    objectives:[
      {id:'priv_amb1', description:'Locate and mark the first ambulenace at the tunnel extraction', type: 'checkbox'},
      {id:'priv_amb2', description:'Locate and mark the second ambulance at the tunnel extraction', type: 'checkbox'},
      {id:'priv_amb3', description:'Locate and mark the third ambulance at the health resort', type: 'checkbox'},
    ],
     requiredItems:[
      {id:'priv_amb_mark', name: 'MS2000 Marker', quantity: 3}
    ],
    // add picture and descriptions to show where the ambulances are to the user.
  },
// HEALTH CARE PRIVACY PART 2 QUEST ================================================
    {
    id:'health_priv2',
    name: 'Health Care Privacy - Part 2',
    description:'Search the health care resort for any documents about TerraGroups research on Shoreline',
    leadsTo: ['Health Care Privacy - Part 3', 'Lost Contact'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 24000 },
    { type: 'item', name: 'Salewa first aid kit', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 5900 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'health_priv2_obj', description:'Search west wing room 306 for any documents about TerraGroups research on Shoreline', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'hp2_west306', name: 'Health Resort west wing room 306 key ', quantity: 1}
    ],
  },
// HEALTH CARE PRIVACY PART 3 QUEST ================================================
    {
    id:'health_priv3',
    name: 'Health Care Privacy - Part 3',
    description:'Locate the van of the health resort medical services director on Woods',
    leadsTo: ['Health Care Privacy - part 4'],
    map: 'Woods',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 26000 },
    { type: 'item', name: 'Morphine injector', amount: 2 },
    { type: 'item', name: 'Adrenaline injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 5900 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Purchase of Morphine injector at Therapist LL4' }
  ],
    objectives:[
      {id:'health_priv_obj', description:'Locate the van on woods and take a sample of the blood and hand it over to Therapist', type: 'checkbox'}
    ]
  },
// AN APPLE A DAY KEEPS THE DOCTOR AWAY QUEST =========================================
    {
    id:'apple_day',
    name: 'An Apple a Day Keeps the Doctor Away',
    description:'Hand over 400,000 RUB to Therapist',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'skill', name: 'Health', amount: '+ 2 levels' }
  ],
    objectives:[
      {id:'apple_money', description:'Hand over 400,000 RUB to Therapist', type: 'checkbox'}
    ]
  },
// HEALTH CARE PRIVACY PART 4 QUEST =================================================
    {
    id:'health_priv4',
    name: 'Health Care Privacy - Part 4',
    description:'Reach Health skill level 4',
    leadsTo: ['Health Care Privacy - Part 5', 'Private Clinic', 'Athlete', 'An Apple a Day Keeps the Doctor Away'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 29000 },
    { type: 'item', name: 'Grizzly medical kit', amount: 2 },
    { type: 'item', name: 'Bottle of saline solution', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 6000 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'health_priv4_obj', description:'Reach level 4 Health skill', type: 'counter', required: 4}
    ]
  },
// HEALTH CARE PRIVACY PART 5 QUEST ==================================================
    {
    id:'health_priv5',
    name: 'Health Care Pirvacy - Part 5',
    description:'Locate the drop spot on Factory and stash 3 packs of Gunpower "Kite" and stash them in the designated spot',
    leadsTo: ['Decontamination Service', 'Health Care Privacy - Part 6'],
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 35000 },
    { type: 'item', name: 'Medicine case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 7300 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },  
  ],
    objectives:[
      {id:'', description:'Stash 3 packs of Gunpower"kite" in the designated spot on Factory', type: 'counter', required: 3}
    ]
  },
// HEALTH CARE PRIVACY PART 6 QUEST ===================================================
    {
    id:'health_priv6',
    name: 'Health Care Privacy - Part 6',
    description:'Locate the dead worker and take their blood sample on Factory',
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 32000 },
    { type: 'item', name: 'Ibuprofen painkillers', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 9300 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'health_priv6_obj', description:'Loacte the dead worker and take their blood sample on Factory and hand it over to Therapist', type: 'checkbox'}
    ]
  },
// ATHELETE QUEST ====================================================================
    {
    id:'athlete',
    name: 'Athlete',
    description:'Reach the required 10 Health skill level',
    leadsTo: ['Crisis'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 30,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 110000 },
    { type: 'item', name: 'Dundukk sport sunglasses', amount: 1 },
    { type: 'item', name: 'Zagustin hemostatic drug injector', amount: 3 },
    { type: 'item', name: 'Adrenaline injector', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 21900 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Purchase of Adrenaline injector at Therapist LL4' }
  ],
    objectives:[
      {id:'ath_obj', description:'Reach level 10 in the Health skill', type: 'counter',required: 10}
    ]
  },
// PRIVATE CLINIC====================================================================
    {
    id:'priv_clinic',
    name: 'Private Clinic',
    description:'Find and hand over 1 LEDX and 1 O-scope to Therapist',
    leadsTo: ['Decontamination Service'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 35,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 130000 },
    { type: 'item', name: 'T H I C C item case', amount: 1 },
    { type: 'item', name: 'Health Resort east wing room 306 key', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 30600 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.05' },
    { type: 'unlock', name: '' }
  ],
    objectives:[
      {id:'priv_ledx', description:'Find and hand over 1 LEDX Skin Transilluminator', type: 'counter', required: 1},
      {id:'priv_oscope', description:'Find and hand over 1 Ophthalmoscope', type: 'counter',required: 1}
    ]
  },
// DECONTAMINATION SERVICE QUEST =====================================================
    {
    id:'decon',
    name: 'Decontamination Service',
    description:'Eliminate 40 scavs from less than 60 meters away while wearing specific gear on Interchange',
    map: 'Interchange',
    requiredForKappa: true,
    levelRequired: 35,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 300000 },
    { type: 'item', name: 'Morphine injector', amount: 3 },
    { type: 'item', name: 'IFAK individual first aid kit', amount: 3 },
    { type: 'item', name: 'GP-7 gas mask', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 30500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.05' },
    { type: 'rep', name: 'Jaeger Rep', amount: '+0.01' },
  ],
    objectives:[
      {id:'decon_kill', description:'Eliminate 40 swcavs from less than 60 meters away while wearing specfic gear on Interchange', type: 'counter', required: 40}
    ],
    requiredItems:[
      {id:'decon1', name: 'Respirator', quantity: 1},
      {id:'decon2', name: 'GP-5 gas mask', quantity: 1},
      {id:'decon3', name: 'GP-7 gas mask', quantity: 1}
    ],
  },
//GENERAL WARES QUEST ==============================================================
    {
    id:'gen_ware',
    name: 'General Wares',
    description:'Find 15 cans of small beef stew and hand over to Therapist',
    leadsTo: ['Colleagues - Part 1'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 30000 },
    { type: 'item', name: 'Can of pacific saury', amount: 4 },
    { type: 'item', name: 'Iskra ration pack', amount: 2 },
    { type: 'item', name: 'Can of Majaica coffee beans', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 4800 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'gen_beef', description:'Find and hand over 15 Cans of beef stew (Small)', type: 'counter',required: 15, foundInRaid: true}
    ]
  },
// COLLEAGUES - PART 1 QUEST
    {
    id:'coll1',
    name: 'Colleagues - Part 1',
    description:'Locate the groups that were sent to Shoreline (must locate all 3 in ONE raid)',
    leadsTo: ['Colleagues - part 2', 'Chemistry Closet'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 45000 },
    { type: 'item', name: 'SJ1 TGLabs combat stimulant injector', amount: 2 },
    { type: 'item', name: 'SJ6 TGLabs combat stimulant injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 12300 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'coll1_task1', description:'Locate the group that was sent to the Health Resort on Shoreline', type: 'checkbox'},
      {id:'coll1_task2', description:'Locate the group that was sent to the pier on Shoreline', type: 'checkbox'},
      {id:'coll1_task3', description:'Locate the group that was sent to the cottages', type: 'checkbox'}
    ]
    //add a warning to the user that all spots must be found in a single raid.
  },
// COLLEAGUES - PART 2 QUEST =======================================================
    {
    id:'coll2',
    name: 'Colleagues - Part 2',
    description:'Locate and obtain Sanitars surgery kit and ophthalmoscope on Shoreline',
    leadsTo: ['The Huntsman Path - Sadist', 'Colleagues - Part 3'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 60000 },
    { type: 'item', name: 'Surv12 field surgical kit', amount: 1 },
    { type: 'item', name: 'P22 (Product 22) stimulant injector', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 12400 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'coll2_surg', description:'Locate and obtain Sanitars surgery kit marked with a blue symbol', type: 'checkbox'},
      {id:'coll2_oscope', description:'Locate and obtain Sanitars Marked Ophthalmoscope', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'coll2_key', name: 'Cottage back door key', quantity: 1,showCheckbox: true}
    ],
  },
// COLLEAGUES - PART 3
    {
    id:'coll3',
    name: 'Colleagues - Part 3',
    description:'Find the specified equipment and DO NOT kill Sanitar',
    leadsTo: ['Terragroup Employee', 'Swift One', 'The Huntsman Path - Relentless'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 150000 },
    { type: 'item', name: 'TerraGroup Labs keycard (Black)', amount: 1 },
    { type: 'item', name: 'Medicine case', amount: 1 },
    { type: 'item', name: 'L1 (Norepinephrine) injector', amount: 3 },
    { type: 'item', name: 'Meldonin injector', amount: 3 },
    { type: 'item', name: 'Obdolbos 2 cocktail injector', amount: 5 },
    { type: 'item', name: 'Grizzly medical kit', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 15800 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
    { type: 'rep', name: 'Fence Rep', amount: '+0.25' },
  ],
    objectives:[
      {id:'coll3_cards', description:'Find and hand over 10 TerraGroup Labs access keycards', type: 'counter', required: 10, foundInRaid: true},
      {id:'coll3_ahf1', description:'Find and hand over an AHF1-M stimulant injector', type: 'counter', required: 1, foundInRaid: true},
      {id:'coll3_3btg', description:'Find and hand over a 3-(b-TG) stimulant injector', type: 'counter',required: 1, foundInRaid: true},
      {id:'coll3_san', description:'DO NOT kill Sanitar', type: 'checkbox'}
    ]
  },
// OUT OF CURIOSITY QUEST ===========================================================
    {
    id:'out_cur',
    name: 'Out of Curiosity',
    description:'Accept Skiers ques Chemical - part 4, then locate and mark the transport with the chemicals on Customs',
    leadsTo: ['Loyalty Buyout', 'No Offence', 'Safe Corridor'],
    map: 'Customs',
    requiredForKappa: false,
    levelRequired: 11,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 170000 },
    { type: 'item', name: 'Injector case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 7700 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'cur_warn', description:'WARNING!! This is a multiple choice quest, check (Big Customer) or (Chemical - Part 4) to see which of these 3 you want to turn in, as you can only turn in 1 of them.', type: 'checkbox'},
      {id:'cur_mark', description:'Locate and mark the transport with the chemicals on Customs ', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'cur_marker', name: 'MS2000 Marker', quantity: 1,}
    ]
    // add a warning that this is a multiple choice quest
  },
// TRUST REGAIN ===================================================================
   {
    id:'trust_regain',
    name: 'Trust Regain',
    description:'find and hand over the specified keys to regain trust with therapist if you either Big Customer or Chemical - Part 4',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 11,
    rewards: [
    { type: 'rep', name: 'Therapist Rep', amount: '+0.25' },
  ],
    objectives:[
      {id:'trust_303', description:'Find and hand over a Dorm room 303 key', type: 'checkbox'},
      {id:'trust_zb14', description:'Find and hand over a ZB-014 key', type: 'checkbox'},
      {id:'trust_milchk', description:'Find and hand over a Military checkpoint key', type: 'checkbox'},
      {id:'trust_gasstn', description:'Find and hand over a Gas station storage room key', type: 'checkbox'}
    ]
  },
// CRISIS QUEST =======================================================================
    {
    id:'crisis',
    name: 'Crisis',
    description:'Find and handover the specified medical equipment',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 48,
    rewards: [
    { type: 'item', name: 'Medicine case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 97000 },
    { type: 'skill', name: 'Immunity', amount: '+ 4 levels' },
    { type: 'skill', name: 'Vitality', amount: '+ 4 levels' },
    { type: 'skill', name: 'Surgery', amount: '+ 4 levels' },
    { type: 'unlock', name: 'Craft for ETG-change regenerative stimulant injector at Medstation level 2' },
    { type: 'unlock', name: 'Craft for M.U.L.E. stimulant injector at Medstation level 2' }
  ],
    objectives:[
      {id:'crisis_defib', description:'Find and hand over 3 Portable defibrillators', type: 'counter',required: 3, foundInRaid: true},
      {id:'crisis_ledx', description:'Find and hand over 2 LEDX Skin Transilluminators', type: 'counter', required: 2, foundInRaid: true},
      {id:'crisis_oscope', description:'Find and hand over 3 Ophthalmoscopes', type: 'counter', required: 3, foundInRaid: true},
      {id:'crisis_meds', description:'Find and hand over 20 piles of meds', type: 'counter', required: 20, foundInRaid: true},
      {id:'crisis_vita', description:'Find and hand over 10 bottles of OLOLO Multivitamins ', type: 'counter', required: 10, foundInRaid: true}
    ]
  },
// SEASIDE VACATION QUEST ==========================================================
    {
    id:'seaside_vacay',
    name: 'Seaside Vacation',
    description:'Find and hand over the informants briefcase on Lighthouse',
    leadsTo: ['Abandoned Cargo'],
    map: 'Lightouse',
    requiredForKappa: true,
    requiredForNetworkProvider: true,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'xp', name: 'Experience', amount: 80000 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of Aluminum splint at Therapist LL3' }
  ],
    objectives:[
      {id:'sea_case', description:'Locate and hand over the laptop with information on Lighthouse', type: 'checkbox'}
    ]
  },
// LOST CONTACT QUEST ===============================================================
    {
    id:'lost_contact',
    name: 'Lost Contact',
    description:'Find the lost group in the chalet area on Lighthouse',
    leadsTo: ['Drug Trafficking'],
    map: 'Lighthouse',
    requiredForKappa: true,
    requiredForNetworkProvider: true,
    levelRequired: 26,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'xp', name: 'Experience', amount: 7000 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Barter for Grizzly medical kit at Therapist LL2' }
  ],
    objectives:[
      {id:'lost_contact_task', description:'Locate the lost group in the chalet area tennis court on Lighthouse', type: 'checkbox'}
    ]
  },
// POPULATION CENSUS QUEST ==========================================================
    {
    id:'pop_cen',
    name: 'Population Census',
    description:'Obtain and hand over the journal containing resident details on Streets of Tarkov',
    leadsTo: ['Urban Medicine', 'Pets Wont Need It - Part 1'],
    map: 'Streets of Tarkov',
    requiredForKappa: true,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 35000 },
    { type: 'item', name: 'Salewa first aid kit', amount: 2 },
    { type: 'item', name: 'Medical tools', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 6900 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'pop_task', description:'Locate the journal containing resident details on Streets of Tarkov and hand it over to Therapist', type: 'checkbox'}
    ]
  },
// DANGEROUS ROAD QUEST =============================================================
    {
    id:'dang_road',
    name: 'Dangerous Road',
    description:'Survive and extract from Primorsky Ave Taxi V-Ex on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 45000 },
    { type: 'item', name: 'Aluminum splint', amount: 2 },
    { type: 'item', name: 'CALOK-B hemostatic applicator', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 7800 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.01' },
  ],
    objectives:[
      {id:'dang_task', description:'Survive and extract from Primorsky Ave Taxi V-Ex on Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'dang_money', name: 'Roubles', quantity: 5000}
    ],
  },
// URBAN MEDICINE===================================================================
  {
    id:'urb_med',
    name: 'Urban Medicine',
    description:'Locate the chemical factory and get the drug container',
    leadsTo: ['The huntsman Path - Big Path', 'Ambulances Again'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 51000 },
    { type: 'item', name: 'Adrenaline injector', amount: 2 },
    { type: 'item', name: 'Zagustin hemostatic drug injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 10200 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'urb_med_task', description:'Locate the chemical laboratory in lexox and obtain the container with the drug sample', type: 'checkbox'}
    ]
    //add pictures with descriptions to the quest item location
  },
// DRUG TRAFFICKING =================================================================
    {
    id:'drug_traf',
    name: 'Drug Trafficking',
    description:'Locate the hidden drug lab and stash a WI-FI camera on Lighthouse',
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 26,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 45000 },
    { type: 'item', name: 'Propital regenerative stimulant injector', amount: 1 },
    { type: 'item', name: 'ETG-change regenerative stimulant injector', amount: 1 },
    { type: 'item', name: 'Zagustin hemostatic drug injector', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 7500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'drug_task', description:'Locate the hidden drug lab on lighthouse and stash a WI-FI camera in the drug lab on Lighthouse', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'drug_cam', name: 'WI-FI Camera', quantity: 1}
    ],
    //add pictures to describe where the lab is and where to stash the camera
  },
// PETS WONT NEED IT - PART 1 QUEST ================================================
    {
    id:'pets_need1',
    name: 'Pets Wont Need it - Part 1',
    description:'Locate and scout the Vet clinic and X-ray techs rooms on Streets of Tarkov',
    leadsTo: ['Pets Wont Need it - Part 2'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 43000 },
    { type: 'item', name: 'Adrenaline injector', amount: 4 },
    { type: 'item', name: 'Medical bloodset', amount: 2 },
    { type: 'item', name: 'Bottle of saline solution', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 8100 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.01' },
  ],
    objectives:[
      {id:'pets1_clinic', description:'Locate and scout the vet clinic on Streets of Tarkov', type: 'checkbox'},
      {id:'pets_xray', description:'Locate and scout the x-ray technicians room on Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'pets1_xray', name: 'X-ray room key', quantity: 1, showCheckbox: true}
    ],
  },
// PETS WONT NEED IT PART 2 QUEST ===================================================
    {
    id:'pets_need2',
    name: 'Pets Wont Need It - Part 2',
    description:'Locate the pharmacies on Streets of Tarkov',
    leadsTo: ['Beneath The Streets'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 55000 },
    { type: 'item', name: 'Disposable syringe', amount: 4 },
    { type: 'item', name: 'Pile of meds', amount: 4 },
    { type: 'item', name: 'Morphine injector', amount: 2 },
    { type: 'item', name: 'L1 (Norepinephrine) injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 9000 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'pets_pharm1', description:'Locate the first pharmacy on Primorsky Ave on Streets of Tarkov', type: 'checkbox'},
      {id:'pets_pharm2', description:'Locate the second phramacy on Primorsky Ave on Streets of Tarkov', type: 'checkbox'},
      {id:'pets_pharm3', description:'Locate the thirs pharmacy at Cardinal apartment complex on Streets of Tarkov', type: 'checkbox'}
    ]
    //add pictures and descriptions of where the pharmacies are located
  },
// AMBULANCES AGAIN =============================================================
    {
    id:'ambulance_again',
    name: 'Ambulances Again',
    description:'Locate and obtain the ambulance paramedics smartphone and extract though the vehicle extract on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 100000 },
    { type: 'item', name: 'Grizzly medical kit', amount: 2 },
    { type: 'item', name: 'Surv12 field surgical kit', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 12000 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.01' },
    { type: 'unlock', name: 'Barter for Propital regenerative stimulant injector at Therapist LL2' }
  ],
    objectives:[
      {id:'amb_phone', description:'Locate and obtain the ambulance paramedics smartphone', type: 'checkbox'},
      {id:'amb_extract', description:'Extract through Primorsky Ave Taxi V-Ex', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'amb_money', name: 'Roubles', quantity: 5000}
    ],
  },
// SHIPMENT TRACKING QUEST ===============================================================
    {
    id:'ship_track',
    name: 'Shipment Tracking',
    description:'Locate and obtain the TerraGroup shipment lests on Customs',
    leadsTo: ['Closer to the People'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 52000 },
    { type: 'item', name: 'Topographic survey maps', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 9600 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'ship_task', description:'Locate the TerraGroup shipment list in the Company directors office', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'ship_key', name: "company director's room key", quantity: 1, showCheckbox: true}
    ],
  },
// CLOSER TO THE PEOPLE QUEST ====================================================
    {
    id:'close_people',
    name: 'Closer to the People',
    description:'Locate and hand over the delivery crews shpment notes on Customs',
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 10500 },
    { type: 'item', name: 'Portable defibrillator', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 10300 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'close_obj', description:'Locate and obtain the delivery crews shipment notes on Customs', type: 'checkbox'}
    ]
  },
// ABANDONED CARGO quest ============================================================
    {
    id:'aband_cargo',
    name: 'Abandoned Cargo',
    description:'Locate and mark all the special TerraGroup cargo on Customs',
    leadsTo: ['Shipment Tracking'],
    map: 'Customs',
    requiredForKappa:true,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 46000 },
    { type: 'item', name: 'Propital regenerative stimulant injector', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 9400 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'', description:'Locate and mark the first special TerraGroup cargo on Customs', type: 'checkbox'},
      {id:'', description:'Locate and mark the second special TerraGroup cargo on Customs', type: 'checkbox'},
      {id:'', description:'Locate and mark the third special TerraGroup cargo on Customs', type: 'checkbox'},
      {id:'', description:'Locate and mark the fourth special TerraGroup cargo on Customs', type: 'checkbox'},
      {id:'', description:'Locate and mark the fifth special TerraGroup cargo on Customs', type: 'checkbox'},
      {id:'', description:'Locate and mark the sixth special TerraGroup cargo on Customs', type: 'checkbox'},
      {id:'', description:'Locate and mark the seventh special TerraGroup cargo on Customs', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'cardo_marker', name: 'MS2000 Marker', quantity: 7}
    ],
    //add pictures and dexriptions of all the cargo locations
  },
// ALL IS REVEALED QUEST ==========================================================
    {
    id:'all_reveal',
    name: 'All is Revealed',
    description:'Take a sample of the chemicals from the damaged tank container on Factory',
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 63000 },
    { type: 'item', name: 'Documents case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 17200 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'all_task', description:'Take a sample of the chemicals from the damaged tank container on Factory', type: 'checkbox'}
    ]
    //add a picture and description
  },
//A HEALTHY ALTERNATIVE QUEST =======================================================
    {
    id:'health_alt',
    name: 'A Healthy Alternative',
    description:'OPTIONAL QUEST (either turn in One Less Loose End OR A healthy Alternative) hand over the lab journal found on Factory ',
    leadsTo: ['Dragnet'],
    map: 'Factory',
    requiredForKappa: false,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 86000 },
    { type: 'item', name: 'ETG-change regenerative stimulant injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 13500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'healthy_task', description:'Hand over the Lab journal found on Factory', type: 'checkbox'}
    ]
    // add pictures and descriptions 
  },
// THIRSTY ECHO QUEST =============================================================
    {
    id:'thirst_echo',
    name: 'Thirsy - Echo',
    description:'Locate and hand over any information about thirsty on Shoreline',
    leadsTo: ['Thirsty - Echo'],
    cooldown: '12 hours',
    map: 'Shoreline',
    requiredForKappa: false,
    levelRequired: 5,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 180000 },
    { type: 'item', name: 'Aquamari water bottle with filter', amount: 4 },
    { type: 'item', name: 'M.U.L.E. stimulant injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 11200 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'thirst_echo', description:'locate the Battered diary in the basement of west wing near the pool', type: 'checkbox'}
    ]
    // add pictures and descriptions 
  },
// THIRSTY SECRETS QUEST ==========================================================
    {
    id:'thirst_secret',
    name: 'Thirsty Secrets',
    description:'Hand over the specified medical equipment',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 5,
    rewards: [
    { type: 'item', name: '2A2-(b-TG) stimulant injector', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 13100 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Craft for 2A2-(b-TG) stimulant injector at Medstation level 2' }
  ],
    objectives:[
      {id:'thirst_sec_adren', description:'hand over 2 Adrenaline injectors', type: 'counter',required: 2, foundInRaid: true},
      {id:'thirst_sec_saline', description:'Hand over 3 bottles of saline solution', type: 'counter', required: 3, foundInRaid: true},
      {id:'thirst_sec_vita', description:'Hand over 4 bottles of OLOLO Multivitamins', type: 'counter', required: 4, foundInRaid: true}
    ]
  },
// BENEATH THE STREETS QUEST =====================================================
    {
    id:'beneath_street',
    name: 'Beneath The Streets',
    description:'Use the transit from Streets of Tarkov to The Lab, and scout the specified rooms in The Lab(must be done in 1 raid)',
    map: 'Multiple',
    requiredForKappa: false,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 170000 },
    { type: 'item', name: 'Medicine case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 46700 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'beneath_transit', description:'Use the transit from Streets of Tarkov to The Lab (in one raid)', type: 'checkbox'},
      {id:'beneath_serv', description:'Scout the server room in The Lab (in one raid)', type: 'checkbox'},
      {id:'beneath_hazard', description:'Scout the hazard dome in The Lab (in one raid)', type: 'checkbox'},
      {id:'beneath_control', description:'Scout the control room in The Lab (in one raid)', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'beneath_card', name: 'TerraGroup Labs access keycard', quantity: 1}
    ],
  },
// THE TARKOV BUTCHER QUEST ========================================================
    {
    id:'tarkov_butch',
    name: 'The Tarkov Butcher',
    description:'Locate and obtain the chemical container on ground zero and stash it inside the ambulance at cottages on Shoreline',
    map: 'Multiple',
    requiredForKappa: false,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'item', name: 'Key case', amount: 1 },
    { type: 'item', name: 'Labrys access keycard', amount: 5 },
    { type: 'xp', name: 'Experience', amount: 14700 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Barter for Labrys access keycard at Therapist LL1' }
  ],
    objectives:[
      {id:'butch_zero', description:'Locate the container with suspicious substance in the meat truck underground in Ground Zero', type: 'checkbox'},
      {id:'butch_shoreline', description:'Stash the container with suspicous substance in the ambulance at cottages on Shoreline', type: 'checkbox'}
    ]
    //add pictures and descriptions of item locations
  },
// THIS TAPE SUCKS QUEST ==========================================================
    {
    id:'tape_suck',
    name: 'This Tape Sucks',
    description:'Enter the labytinth and find evidence of torture',
    map: 'Shoreline',
    requiredForKappa: false,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 230000 },
    { type: 'item', name: 'SJ12 TGLabs combat stimulant injector', amount: 2 },
    { type: 'item', name: 'Meldonin injector', amount: 2 },
    { type: 'item', name: '3-(b-TG) stimulant injector', amount: 2 },
    { type: 'item', name: 'Taurus poster', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 15500 },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'suck_tortroom', description:'Locate the torture room inside the Labyrinth', type: 'checkbox'},
      {id:'suck_key', description:'Locate any evidence of torture in the Labyrinth', type: 'checkbox'}
    ]
    //add pictures anddexriptions
    
  },
  // Add more Therapist quests here...
  ];
  
  // ===== TherapistQuestList Component =====
  // Displays Therapist's quests with improved UI and clearly defined sections
  function TherapistQuestList() {
    // ===== State: Quest Completion =====
    const [completed, setCompleted] = React.useState<{ [id: string]: boolean }>(() => {
      const saved = localStorage.getItem('therapistQuestProgress');
      return saved ? JSON.parse(saved) : {};
    });
  
    // ===== State: Objective Progress =====
    const [objectiveProgress, setObjectiveProgress] = React.useState<{ [questId: string]: { [objId: string]: number | boolean } }>(() => {
      const saved = localStorage.getItem('therapistObjectiveProgress');
      return saved ? JSON.parse(saved) : {};
    });
  
    // ===== State: Optional Item Progress =====
    const [optionalItemProgress, setOptionalItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
      const saved = localStorage.getItem('therapistOptionalItemProgress');
      return saved ? JSON.parse(saved) : {};
    });
  
    // ===== State: Required Item Checkbox Progress =====
    const [requiredItemProgress, setRequiredItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
      const saved = localStorage.getItem('therapistRequiredItemProgress');
      return saved ? JSON.parse(saved) : {};
    });
  
    // ===== State: Selected Map =====
    const [selectedMap, setSelectedMap] = React.useState<string>('');
  
    // ===== State: Image Lightbox =====
    const [openImage, setOpenImage] = React.useState<{ image: string; description: string } | null>(null);
  
    // ===== Event Handlers =====
    const handleRequiredItemCheck = (questId: string, itemId: string) => {
      setRequiredItemProgress(prev => {
        const updated = { ...prev };
        if (!updated[questId]) updated[questId] = {};
        updated[questId][itemId] = !updated[questId][itemId];
        localStorage.setItem('therapistRequiredItemProgress', JSON.stringify(updated));
        return updated;
      });
    };
  
    const handleObjectiveCheck = (questId: string, objId: string) => {
      setObjectiveProgress(prev => {
        const updated = { ...prev };
        if (!updated[questId]) updated[questId] = {};
        updated[questId][objId] = !updated[questId][objId];
        localStorage.setItem('therapistObjectiveProgress', JSON.stringify(updated));
        return updated;
      });
    };
  
    const handleCounterObjective = (questId: string, objId: string, value: number) => {
      setObjectiveProgress(prev => {
        const updated = { ...prev };
        if (!updated[questId]) updated[questId] = {};
        updated[questId][objId] = value;
        localStorage.setItem('therapistObjectiveProgress', JSON.stringify(updated));
        return updated;
      });
    };
  
    const handleOptionalItemCheck = (questId: string, itemId: string) => {
      setOptionalItemProgress(prev => {
        const updated = { ...prev };
        if (!updated[questId]) updated[questId] = {};
        updated[questId][itemId] = !updated[questId][itemId];
        localStorage.setItem('therapistOptionalItemProgress', JSON.stringify(updated));
        return updated;
      });
    };
  
    // ===== Filtered Quests =====
    const filteredQuests = selectedMap
      ? therapistQuests.filter(quest => quest.map === selectedMap)
      : therapistQuests;
  
    // ===== Auto-complete Quest if All Objectives Complete =====
    React.useEffect(() => {
      therapistQuests.forEach(quest => {
        if (!quest.objectives || quest.objectives.length === 0) return;
        const questObj = objectiveProgress[quest.id] || {};
        const allComplete = quest.objectives.every(obj => {
          if (obj.type === 'checkbox') {
            return !!questObj[obj.id];
          } else if (obj.type === 'counter') {
            return Number(questObj[obj.id]) >= (obj.required || 1);
          }
          return false;
        });
        if (allComplete && !completed[quest.id]) {
          setCompleted(prev => {
            const updated = { ...prev, [quest.id]: true };
            localStorage.setItem('therapistQuestProgress', JSON.stringify(updated));
            return updated;
          });
        } else if (!allComplete && completed[quest.id]) {
          setCompleted(prev => {
            const updated = { ...prev, [quest.id]: false };
            localStorage.setItem('therapistQuestProgress', JSON.stringify(updated));
            return updated;
          });
        }
      });
      // eslint-disable-next-line
    }, [objectiveProgress]);
  
    // ===== Render Functions =====
    const renderRewardList = (rewards: any[]) => (
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {rewards.map((reward, idx) => (
          <li key={idx}>
            <Typography variant="body2">
              {reward.amount ? `${reward.amount} ` : ''}{reward.name}
            </Typography>
          </li>
        ))}
      </ul>
    );
  
    const renderQuestCard = (quest: Quest) => {
      const isCompleted = !!completed[quest.id];
      const questObj = objectiveProgress[quest.id] || {};
  
      // Filter out empty required items
      const filteredRequiredItems = (quest.requiredItems || []).filter(item => item.name && item.name.trim() !== '' && (item.quantity === undefined || item.quantity > 0));
  
      return (
        <Card
          key={quest.id}
          sx={{
            mb: 3,
            border: '1px solid #ccc',
            backgroundColor: isCompleted ? '#f0f0f0' : 'white',
            opacity: isCompleted ? 0.6 : 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: isCompleted ? 2 : 6,
              transform: isCompleted ? 'none' : 'translateY(-2px)'
            }
          }}
        >
          <CardContent sx={{ p: 3 }}>
            {/* ===== Quest Header ===== */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isCompleted}
                      onChange={() => {
                        setCompleted(prev => {
                          const updated = { ...prev, [quest.id]: !prev[quest.id] };
                          localStorage.setItem('therapistQuestProgress', JSON.stringify(updated));
                          return updated;
                        });
                      }}
                      sx={{ 
                        color: isCompleted ? 'success.main' : 'primary.main',
                        '&.Mui-checked': { color: 'success.main' }
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="h5"
                      sx={{
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        color: isCompleted ? 'text.disabled' : 'text.primary',
                        fontWeight: 'bold'
                      }}
                    >
                      {quest.name}
                    </Typography>
                  }
                />
              </Box>
              
              {/* ===== Quest Badges ===== */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {quest.requiredForKappa && (
                  <Chip
                    icon={<StarIcon />}
                    label="Kappa"
                    size="small"
                    color="warning"
                    variant="outlined"
                  />
                )}
                {quest.requiredForNetworkProvider && (
                  <Chip
                    icon={<CheckCircleIcon />}
                    label="Network"
                    size="small"
                    color="info"
                    variant="outlined"
                  />
                )}
              </Box>
            </Box>
  
            {/* ===== Quest Description ===== */}
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: isCompleted ? 'text.disabled' : 'text.secondary',
                fontStyle: 'italic'
              }}
            >
              {quest.description}
            </Typography>
  
                        {/* ===== Quest Info Grid ===== */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
              {/* Level Requirement */}
              {quest.levelRequired && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
                  <InfoIcon color="primary" fontSize="small" />
                  <Typography variant="body2" fontWeight="bold">
                    Level {quest.levelRequired}
                  </Typography>
                </Box>
              )}

              {/* Map */}
              {quest.map && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
                  <LocationOnIcon color="secondary" fontSize="small" />
                  <Typography variant="body2" fontWeight="bold">
                    {quest.map}
                  </Typography>
                </Box>
              )}

              {/* Requirements */}
              {quest.requirements && quest.requirements.length > 0 && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
                  <WarningIcon color="warning" fontSize="small" />
                  <Typography variant="body2" fontWeight="bold" color="warning.main">
                    Requirements
                  </Typography>
                </Box>
              )}
            </Box>
  
            {/* ===== Expandable Sections ===== */}
            <Accordion defaultExpanded={!isCompleted} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  Objectives & Requirements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Objectives */}
                {quest.objectives && quest.objectives.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Objectives
                    </Typography>
                    <List dense>
                      {quest.objectives.map(obj => (
                        <ListItem key={obj.id} sx={{ pl: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            {obj.type === 'checkbox' ? (
                              <Checkbox
                                checked={!!questObj[obj.id]}
                                onChange={() => handleObjectiveCheck(quest.id, obj.id)}
                                disabled={isCompleted}
                                color="primary"
                              />
                            ) : (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton
                                  size="small"
                                  onClick={() => handleCounterObjective(quest.id, obj.id, Math.max(0, Number(questObj[obj.id] || 0) - 1))}
                                  disabled={isCompleted || Number(questObj[obj.id] || 0) <= 0}
                                >
                                  <RemoveIcon fontSize="small" />
                                </IconButton>
                                <TextField
                                  type="number"
                                  size="small"
                                  value={questObj[obj.id] || 0}
                                  onChange={e => handleCounterObjective(quest.id, obj.id, Math.max(0, Number(e.target.value)))}
                                  inputProps={{ min: 0, max: obj.required || 99, style: { width: 40, textAlign: 'center' } }}
                                  disabled={isCompleted}
                                  sx={{ width: 60 }}
                                />
                                <IconButton
                                  size="small"
                                  onClick={() => handleCounterObjective(quest.id, obj.id, Math.min((obj.required || 99), Number(questObj[obj.id] || 0) + 1))}
                                  disabled={isCompleted || Number(questObj[obj.id] || 0) >= (obj.required || 99)}
                                >
                                  <AddIcon fontSize="small" />
                                </IconButton>
                              </Box>
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                variant="body2"
                                sx={{
                                  textDecoration: !!questObj[obj.id] && ((obj.type === 'checkbox' && questObj[obj.id]) || (obj.type === 'counter' && Number(questObj[obj.id]) >= (obj.required || 1))) ? 'line-through' : 'none',
                                  color: !!questObj[obj.id] && ((obj.type === 'checkbox' && questObj[obj.id]) || (obj.type === 'counter' && Number(questObj[obj.id]) >= (obj.required || 1))) ? 'text.disabled' : 'text.primary',
                                }}
                              >
                                {obj.description}
                                {obj.type === 'counter' && ` (${questObj[obj.id] || 0}/${obj.required})`}
                                {obj.foundInRaid && (
                                  <Chip
                                    label="FIR"
                                    size="small"
                                    color="warning"
                                    sx={{ ml: 1, fontSize: '0.7rem' }}
                                  />
                                )}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
  
                {/* Required Items */}
                {filteredRequiredItems.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="error">
                      Required Items
                    </Typography>
                    <List dense>
                      {filteredRequiredItems.map(item =>
                        item.showCheckbox ? (
                          <ListItem key={item.id} sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              <Checkbox
                                checked={!!(requiredItemProgress[quest.id]?.[item.id])}
                                onChange={() => handleRequiredItemCheck(quest.id, item.id)}
                                color="error"
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {item.name}
                                  {item.quantity && ` x${item.quantity}`}
                                  {item.foundInRaid && (
                                    <Chip
                                      label="FIR"
                                      size="small"
                                      color="warning"
                                      sx={{ ml: 1, fontSize: '0.7rem' }}
                                    />
                                  )}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ) : (
                          <ListItem key={item.id} sx={{ pl: 4 }}>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {item.name}
                                  {item.quantity && ` x${item.quantity}`}
                                  {item.foundInRaid && (
                                    <Chip
                                      label="FIR"
                                      size="small"
                                      color="warning"
                                      sx={{ ml: 1, fontSize: '0.7rem' }}
                                    />
                                  )}
                                </Typography>
                              }
                            />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                )}
  
                {/* Optional Items */}
                {quest.optionalItems && quest.optionalItems.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="info">
                      Optional Items
                    </Typography>
                    <List dense>
                      {quest.optionalItems.map(item => (
                        <ListItem key={item.id} sx={{ pl: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <Checkbox
                              checked={!!(optionalItemProgress[quest.id]?.[item.id])}
                              onChange={() => handleOptionalItemCheck(quest.id, item.id)}
                              color="info"
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                {item.name} x{item.quantity}
                                {item.foundInRaid && (
                                  <Chip
                                    label="FIR"
                                    size="small"
                                    color="warning"
                                    sx={{ ml: 1, fontSize: '0.7rem' }}
                                  />
                                )}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
  
                {/* Requirements */}
                {quest.requirements && quest.requirements.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom color="warning">
                      Special Requirements
                    </Typography>
                    <List dense>
                      {quest.requirements.map((req, index) => (
                        <ListItem key={index} sx={{ pl: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <WarningIcon color="warning" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2" color="warning.main">
                                {req}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
  
            {/* ===== Rewards Section ===== */}
            {quest.rewards && quest.rewards.length > 0 && (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" fontWeight="bold" color="success">
                    Rewards
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {renderRewardList(quest.rewards)}
                </AccordionDetails>
              </Accordion>
            )}
  
            {/* ===== Leads To Section ===== */}
            {quest.leadsTo && quest.leadsTo.length > 0 && (
              <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="subtitle2" color="success.main" fontWeight="bold" gutterBottom>
                  Leads to:
                </Typography>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {quest.leadsTo.map((nextQuest, index) => (
                    <li key={index}>
                      <Typography variant="body2">{nextQuest}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
  
            {/* ===== Item Spawn Locations ===== */}
            {quest.itemSpawnLocations && quest.itemSpawnLocations.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom color="secondary">
                  Item Spawn Locations
                </Typography>
                {quest.itemSpawnLocations.map((loc, idx) => (
                  <Box key={idx} sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <img
                      src={loc.image}
                      alt={`Spawn location ${idx + 1}`}
                      style={{ width: 120, height: 'auto', borderRadius: 4, objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => setOpenImage({ image: loc.image, description: loc.description })}
                    />
                    <Typography variant="body2">{loc.description}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      );
    };
  
    return (
      <>
        {/* ===== Map Filter ===== */}
        <Box sx={{ mb: 3 }}>
          <TextField
            select
            label="Filter by Map"
            value={selectedMap}
            onChange={(e) => setSelectedMap(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">All Maps</MenuItem>
            {Array.from(new Set(therapistQuests.map(q => q.map).filter(Boolean))).map(map => (
              <MenuItem key={map} value={map}>{map}</MenuItem>
            ))}
          </TextField>
        </Box>
  
        {/* ===== Quest Cards ===== */}
        <Box>
          {filteredQuests.map(renderQuestCard)}
        </Box>
  
        {/* ===== Image Lightbox Dialog ===== */}
        <Dialog open={!!openImage} onClose={() => setOpenImage(null)} maxWidth="md">
          {openImage && (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <img
                src={openImage.image}
                alt="Enlarged spawn location"
                style={{ maxWidth: '80vw', maxHeight: '80vh', borderRadius: 8 }}
              />
              <Typography variant="body1" sx={{ mt: 2 }}>
                {openImage.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button onClick={() => setOpenImage(null)} variant="contained">Close</Button>
              </Box>
            </Box>
          )}
        </Dialog>
      </>
    );
  }
  
  export default TherapistQuestList;