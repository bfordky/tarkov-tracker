import React from 'react';
import {
  Box, Typography, Checkbox, FormControlLabel, IconButton, TextField, MenuItem, Dialog, Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { Quest,} from './types';

// ===== Skier's quest list with objectives =====
const skierQuests: Quest[] = [
// BURNING RUBBER QUEST ==============================================================
    {
    id:'burn_rubb',
    name: 'Burning Rubber',
    description:'Use the paid vehicle extraction on Ground Zero',
    leadsTo: ['Supplier', 'Easy Money - Part 1'],
    map: 'Ground Zero',
    requiredForKappa: true,
    levelRequired: 1,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 12000 },
    { type: 'item', name: 'OPSMEN Earmor M32 headset', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 1900 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.01' },
    
  ],
    objectives:[
      {id:'rubb_task', description:'Use the paid Vehicle extract on Ground Zero', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'rub_money', name: 'Roubles', quantity: 5000}
    ],
  },

// SUPPLIER QUEST ===================================================================
  {
    id:'supplier',
    name: 'Supplier',
    description:'find and handover specified items to Skier',
    leadsTo: ['The Extortionist', 'Stirrup', 'Friend From the West-part 1'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 5,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 60000 },
    { type: 'item', name: 'Saiga-9 9x19 carbine', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 3300 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'unlock', name: 'purchase of Saiga-9 9x19 carbine at Skier LL1' },
    { type: 'unlock', name: 'purchase of 7.62x54mm R SP BT at Skier LL1' }
  ],
    objectives: [
      {id: 'supp_armor', description:'Find and hand over a Module-3M armor to Skier', type:'counter', required: 1, foundInRaid: true},
      {id: 'supp_gun', description:'Find and hand over a TOZ-106 shotgun to Skier', type: 'counter', required: 1, foundInRaid: true}
    ],
  },
  // Add Skier quests here...
// THE EXTORTIONIST QUEST ===========================================================
    {
    id:'the_extort',
    name: 'The Extortionist',
    description:'Obtain the hidden cargo on Customs',
    leadsTo: ['Whats on the Flash Drive'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 7,
    rewards: [
    { type: 'money', name: 'Dollars', amount: 500 },
    { type: 'item', name: 'Molot Arms VPO-209 .366 TKM carbine', amount: 1 },
    { type: 'item', name: ' AK 7.62x39 30-round magazine (issued 55 or later)', amount: 3 },
    { type: 'item', name: '366 TKM EKO ammo pack (20 pcs)', amount: 6 },
    { type: 'item', name: 'BNTI Zhuk body armor (Press)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 3200 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Purchase of Remington Model 870 12ga pump-action shotgun at Skier LL1' }
  ],
    objectives:[
      {id:'extort_task', description:'obtain and hand over (to skier) on Customs', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'extort_key', name: 'Unknown key', quantity: 1}
    ],
  },
// STIRRUP QUEST ====================================================================
    {
    id:'stir',
    name: 'Stirrup',
    description:'Eliminate 3 PMC operatives while using pistols',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 8,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 70000 },
    { type: 'item', name: 'Camelbak Tri-Zip assault backpack (Foliage)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 5300 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'rep', name: 'Prapor Rep', amount: '-0.05' },
    { type: 'rep', name: 'Therapist Rep', amount: '-0.02' },
    { type: 'unlock', name: 'Purchase of Chiappa Rhino 50DS .357 revolver (variant Tactical) at Skier LL2' }
  ],
    objectives:[
      {id:'stir_task', description:'Elminiate 3 PMC operatives while using a pistol', type: 'counter',required: 3}
    ]
  },
// WHATS ON THE FLASH DRIVE? QUEST ==============================================
    {
    id:'what_flash',
    name: 'Whats on the Flash Drive?',
    description:'Find and hand over 2 Secure Flash Drives to Skier',
    leadsTo: ['Golden Swag', 'Shady Business'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 8,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 30000 },
    { type: 'item', name: 'Molot Arms Simonov OP-SKS 7.62x39 carbine (variant UAS)', amount: 1 },
    { type: 'item', name: 'SKS 7.62x39 TAPCO 6610 20-round magazine', amount: 2 },
    { type: 'item', name: 'SKS Hexagon 7.62x39 sound suppressor', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 4500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'what_fash_task', description:'Find and hand over 2 Secure Flash Drives to Skier', type: 'counter', required: 2, foundInRaid: true}
    ]
    // add gunsmith tag indicating that item reward is used in a gunsmith task
  },
// GOLDEN SWAG QUEST ==============================================================
    {
    id:'gold_swag',
    name: 'Golden Swag',
    description:'Find the golden zibbo and stash it in the bunkhouse in the triler parking lot on Customs',
    leadsTo: ['Chemical - Part 1'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 8,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 17000 },
    { type: 'item', name: 'Soyuz-TM STM-9 Gen.2 9x19 carbine', amount: 1 },
    { type: 'item', name: 'Glock 9x19 "Big Stick" 33-round magazine', amount: 2 },
    { type: 'item', name: '9x19mm Green Tracer ammo pack (50 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 4500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Purchase of VOMZ Pilad P1x42 Weaver reflex sight at Skier LL1' }
  ],
    objectives:[
      {id:'find_zib', description:'Find the golden zibbo in dorm room 303', type: 'checkbox'},
      {id:'stash_zib', description:'Stash the golden zibbo in the trailer park cabin', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'gold_key1', name: 'Dorm room 303 key', quantity: 1},
      {id:'gold_key2', name: 'Trailer park portable cabin key', quantity: 1}
    ],
  },
// CHEMICAL PART 1 QUEST ===========================================================
    {
    id:'chem1',
    name: 'Chemical - Part 1',
    description:'Obtain information about the deputy chiefs past and any items that will help with the investigation (give to Skier) on Customs',
    leadsTo: ['Chemical - Part 2', 'Polikhim Hobo'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 15000 },
    { type: 'item', name: 'MSA ACH TC-2002 MICH Series helmet (Olive Drab)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 4800 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'chem1_info', description:'Obtain information about the deputy chiefs past life on Customs (train car by fence jump)', type: 'checkbox'},
      {id:'chem1_key', description:'Hand over Dorm room 220 key (does not need to be found in raid)', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'chem1_keys', name: 'Dorm room 220 key', quantity: 1, showCheckbox: true}
    ],
    // add pictures for descriptions
  },
// CHEMICAL PART 2 QUEST =============================================================
    {
    id:'chem2',
    name: 'Chemical - Part 2',
    description:'Find any evidence that could help with the investigation on customs',
    leadsTo: ['Chemical - Part 3'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 15000 },
    { type: 'item', name: 'F-1 hand grenade', amount: 3 },
    { type: 'item', name: 'TP-200 TNT brick', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 4800 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Purchase of SOK-12 12ga SAI-02 10-round magazine at Jaeger LL2' }
  ],
    objectives:[
      {id:'chem2_sealed', description:'Find the Sealed letter with a TG logo in dorm room 220', type: 'checkbox'},
      {id:'chem2_flash', description:'Find the Sliderkey Secure Flash drive in dorm room 220', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'chem2_key', name: 'Dorm room 220 key', quantity: 1}
    ],
    //add pictures and descriptions of quest item locations
  },
// CHEMICAL PART 3 QUEST ============================================================
    {
    id:'chem3',
    name: 'Chemical - Part 3',
    description:'Obtain the chemical-filled syringe hidden in Factory',
    leadsTo: ['Vitamins - Part 1', 'Chemical - Part 4', 'OR Out of Curisoty OR Big Customer'],
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 11,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 22000 },
    { type: 'item', name: 'BelOMO PSO-1M2-1 4x24 scope', amount: 1 },
    { type: 'item', name: 'Zarya stun grenade', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 5400 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
    { type: 'rep', name: 'Jaeger Rep', amount: '-0.01' },
  ],
    objectives:[
      {id:'chem3_task', description:'Obtain the chemical-filled syringe in the breach room on Factory', type: 'checkbox'}
    ]
  },
// CHEMICAL PART 4 QUEST
    {
    id:'chem4',
    name: 'Chemical - Part 4',
    description:'Locate and mark the transport with the Chemicals on Customs (WARNING! CHECK BIG CUSTOMER AND OUT OF CURIOSITY, YOU CAN ONLY TURN IN 1)',
    leadsTo: ['No Offence', 'Trust Regain', 'Safe Corridor'],
    map: 'Customs',
    requiredForKappa: false,
    levelRequired: 11,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 35000 },
    { type: 'item', name: 'Grenade case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 6500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04, -0.25 for fail' },
  ],
    objectives:[
      {id:'chem4_task', description:'Locate and mark the transport with the chemicals on customs(warehouse with sniper scav on roof)', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'chem4_mark', name: 'MS2000 Marker', quantity: 1}
    ],
  },
// LOYALTY BUYOUT ======================================================================
    {
    id:'loyal_buy',
    name: 'Loyalty Buyout',
    description:'Handover 1,000,000 RUB to skier (only if you did not do chemical part 4)',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 11,
    rewards: [
    { type: 'rep', name: 'Skier Rep', amount: '+0.25' },
  ],
    objectives:[
      {id:'loyal_buytask', description:'Hand over 1,000,000 RUB to Skier', type: 'checkbox'}
    ]
  },
// VITAMINS PART 1 QUEST ==============================================================
    {
    id:'vita1',
    name: 'Vitamins - Part 1',
    description:'',
    leadsTo: ['Vitamins - Part 2'],
    map: 'Multiple',
    requiredForKappa: true,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'item', name: 'Holosun HS401G5 reflex sight', amount: 3 },
    { type: 'item', name: 'Trijicon SRS-02 reflex sight', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 13000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'rep', name: 'Skier Rep', amount: '-0.01' },
  ],
    objectives:[
      {id:'vita1_con1', description:'Find the first chemcial cylinder in the fridge in west 112 on Shoreline', type: 'checkbox'},
      {id:'vita1_con2', description:'Find the second chemical cylinder  in a tin in EMERCOM medical unit on Interchange', type: 'checkbox'},
      {id:'vita1_con3', description:'Find the third chemical cylinder in a tin in Mantis store on Interchange', type: 'checkbox'},
    ],
    requiredItems:[
      {id:'vita1_key1', name: 'Health Resort west wing office room 112 key', quantity: 1, showCheckbox: true},
      {id:'vita1_key2', name: 'EMERCOM medical unit key', quantity: 1, showCheckbox: true}
    ],
    // add pictures with descriptions for quest item locations
  },

// VITAMINS PART 2 QUEST ==========================================================
    {
    id:'vita2',
    name: 'Vitamins - Part 2',
    description:'Hand over ther specified items to Skier',
    leadsTo: ['Beyond the Red Meat - Part 1', 'Pyramid Scheme'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'item', name: 'Morphine injector', amount: 4 },
    { type: 'item', name: 'Golden Star balm', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 15800 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'unlock', name: 'Purchase of TDI KRISS Vector Gen.2 9x19 submachine gun at Skier LL3' }
  ],
    objectives:[
      {id:'vita2_mask', description:'Find and handover 4 Respirators to Skier', type: 'counter', required: 4, foundInRaid: true},
      {id:'vita2_bloodset', description:'Find and handover 3 Medical bloodset', type: 'counter', required: 3, foundInRaid: true}
    ]
  },
// FRIEND FROM THE WEST PART 1 =======================================================
    {
    id:'ffw1',
    name: 'Friend From the West - Part 1',
    description:'Eliminate 7 USEC PMC operators and hand over their dog tags',
    leadsTo: ['Friend From the West - Part 2'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 9,
    rewards: [
    { type: 'money', name: 'Dollars', amount: 700 },
    { type: 'item', name: 'ADAR 2-15 5.56x45 carbine', amount: 2 },
    { type: 'item', name: '5.56x45mm M855A1 ammo pack (50 pcs)', amount: 1 },
    { type: 'item', name: 'Roler Submariner gold wrist watch', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 10000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.06' },
  ],
    objectives:[
      {id:'ffw1_kill', description:'Eliminate 7 USES PMC operators', type: 'counter', required: 7},
      {id:'ffw1_tag', description:'Hand over 7 USEC dogtags', type: 'counter', required: 7}
    ]
  },
// FRIEND FROM THE WEST PART 2 =======================================================
    {
    id:'ffwp2',
    name: 'Friend From the West - Part 2',
    description:'Hand over 5,000 USD to Skier',
    leadsTo: ['Fishing Gear', 'Lned-Lease - Part 1', 'Long Road', 'Setup'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 9,
    rewards: [
    { type: 'xp', name: 'Experience', amount: 10000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
  ],
    objectives:[
      {id:'ffwp2_usd', description:'Hand over 5,000 USD to Skier', type: 'counter', required: 5000}
    ]
  },
// INFORMED MEANS ARMED ============================================================
    {
    id:'informed_arm',
    name: 'Informed Means Armed',
    description:'Install WI-FI cameras in the specified locations',
    leadsTo: ['Chumming'],
    map: 'Multiple',
    requiredForKappa: true,
    levelRequired: 24,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 45000 },
    { type: 'item', name: 'AKM/AK-74 FAB Defense UAS stock', amount: 2 },
    { type: 'item', name: 'AK CNC Warrior 5.56x45 muzzle device adapter', amount: 4 },
    { type: 'item', name: 'EOTech Vudu 1-6x24 30mm riflescope', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 14000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
  ],
    objectives:[
      {id:'infor_cam1', description:'Install a WI-FI camera to watch the sawmill dock on Woods', type: 'checkbox'},
      {id:'infor_cam2', description:'Install a WI-FI camera to watch the road to the port on Customs', type: 'checkbox'},
      {id:'infor_cam3', description:'Install a WI-FI camera to watch the Kiba Arms store enterance on Interchange', type: 'checkbox'}
    ]
  },
// CHUMMING QUEST ====================================================================
    {
    id:'chumming',
    name: 'Chumming',
    description:'Stash golden neck chains at specified locations and eliminate 5 PMC operatives in the time period of 22:00-10:00 on Interchange',
    leadsTo: ['Bullshit', 'Debtor', 'Flint', 'No Swiping', 'Private club'],
    map: 'Multiple',
    requiredForKappa: true,
    levelRequired: 24,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 65000 },
    { type: 'item', name: 'Roler Submariner gold wrist watch', amount: 1 },
    { type: 'item', name: 'GP coin', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 19100 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
  ],
    objectives:[
      {id:'chum_obj1', description:'Stash 3 Golden neck chains under the mattress next to BTR-82A in Generic Store on Interchange', type: 'counter',required: 3},
      {id:'chum_obj2', description:'Stash 3 Golden neck chains in the microwave on the 3rd floor of the dorm on Customs', type: 'counter',required: 3},
      {id:'chum_obj3', description:'Stash 3 Golden neck chains in the middle wooden cabin at the sawmill on Woods', type: 'counter', required: 3},
      {id:'chum_obj4', description:'Eliminate 5 PMC operatives in the time period of 22:00-10:00 on Interchange', type: 'counter', required: 5}
    ],
    requiredItems:[
      {id:'chum_chain', name: 'Golden neck chain', quantity: 9}
    ],
    //add initial equipment
  },
// SILENT CALIBER ========================================================================
    {
    id:'silent_caliber',
    name: 'Silent Caliber',
    description:'Eliminate scavs and PMC operators while using a suppressed 12 gauge shotgun',
    leadsTo: ['Connections Up North'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 30,
    cooldown: '18 - 24 hours',
    rewards: [
    { type: 'money', name: 'Roubles', amount: 100000 },
    { type: 'item', name: 'MP-155 12ga semi-automatic shotgun (Ultima variant)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 18000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'unlock', name: 'Craft for 12/70 flechette at Workbench level 3' }
  ],
    objectives:[
      {id:'silent_scav', description:'Eliminate 20 Scavs while using a suppressed 12 gauge shotgun', type: 'counter',required: 20},
      {id:'silent_pmc', description:'Eliminate 10 PMCs while using a suppressed 12 gauge shotgun', type: 'counter', required: 10}
    ]
  },
// BULLSHIT QUEST =====================================================================
    {
    id:'bullshit',
    name: 'Bullshit',
    description:'Obtain the false flash drive, then stash it and a SV-98 and a gold wrist watch at the specified location on Customs',
    leadsTo: ['Silent Caliber'],
    map: 'Customs',
    requiredForKappa: false,
    levelRequired: 24,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 120000 },
    { type: 'money', name: 'Dollar', amount: 1000 },
    { type: 'xp', name: 'Experience', amount: 29900 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.07' },
    { type: 'rep', name: 'Fence Rep', amount: '+0.05' },
    { type: 'unlock', name: 'Unlocks purchase of CMMG Mk47 Mutant 7.62x39 assault rifle at Skier LL4' },
    { type: 'unlock', name: 'Unlocks barter for 12/70 RIP ammo pack (5 pcs) at Skier LL2' },
    { type: 'unlock', name: 'Unlocks barter for Kiba Arms Titan ballistic plate at Skier LL3' }
  ],
    objectives:[
      {id:'bull_task1', description:'Obtain the False flash drive from the specified spot on Customs', type: 'checkbox'},
      {id:'bull_task2', description:'Stash the False flash drive in the trash opposite of the stairs on the 3rd floor of the dorm on Customs', type: 'checkbox'},
      {id:'bull_task3', description:'Stash 1 SV-98 sniper rifle in the trash opposite of the stairs on the 3rd floor of the dorm on Customs', type: 'checkbox'},
      {id:'bull_task4', description:'Stash 1 Roler Submariner gold wrist watch in the trash opposite of the stairs on the 3rd floor of the dorm on Customs', type: 'checkbox'},
      {id:'bull_task5', description:'You must not kill any Scavs on Customs while the task is active', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'bull_roll', name: 'Roler Submariner gold wrist watch', quantity: 1},
      {id:'bull98', name: 'SV-98 7,62x54R bolt-action sniper rifle', quantity: 1}
    ],
    //add infor about flash drive location with picture
  },
//SETUP QUEST ======================================================================
    {
    id:'setup',
    name: 'Setup',
    description:'Eliminate 8 PMC operatives while wearing the specified gear on Customs',
    leadsTo: ['Informed Means Armed'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 18,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 150000 },
    { type: 'item', name: 'Kel-Tec RFB 7.62x51 rifle', amount: 1 },
    { type: 'item', name: '12/70 AP-20 ammo pack (25 pcs)', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 21900 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'rep', name: 'Fence Rep', amount: '+0.05' },
  ],
    objectives:[
      {id:'set_kill', description:'Eliminate 8 PMC operatives while wearing a Scav Vest, Ushanka ear flap hat and any 12ga shotgun', type: 'counter',required: 8}
    ],
    requiredItems:[
      {id:'set_scav', name: 'Scav Vest', quantity: 1},
      {id:'set_hat', name: 'Ushanka ear flap hat', quantity: 1},
      {id:'set_gun', name: 'Any 12ga shotgun', quantity: 1}
    ],
  },
// FLINT QUEST ================================================================
    {
    id:'flint',
    name: 'Flint',
    description:'Reach the required stress resistance skill level of 5',
    leadsTo: ['Irresistable'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 35,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 150000 },
    { type: 'item', name: 'Bottle of Tarkovskaya vodka', amount: 2 },
    { type: 'item', name: 'Bottle of Pevko Light beer', amount: 5 },
    { type: 'xp', name: 'Experience', amount: 25100 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'unlock', name: 'Barter for Miller Bros. Blades M-2 Tactical Sword at Skier LL4' }
  ],
    objectives:[
      {id:'flint_task', description:'Reach level 5 in Stress resistance skill', type: 'counter', required: 5}
    ]
  },
// LEND LEASE PART 1 QUEST =========================================================
    {
    id:'lend_lease1',
    name: 'Lend-Lease - Part 1',
    description:'Obtain and hand over the specified quest items',
    leadsTo: ['Lend-Lease - Part 2'],
    map: 'Multiple',
    requiredForKappa: true,
    levelRequired: 25,
    rewards: [
    { type: 'money', name: 'Dollars', amount: 3000 },
    { type: 'item', name: 'Armasight N-15 night vision goggles', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 17500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
    { type: 'unlock', name: 'Unlocks purchase of ORSIS T-5000M 7.62x51 bolt-action sniper rifle at Skier LL3' }
  ],
    objectives:[
      {id:'ll1_mc1', description:'Obtain the first Motor Controller on Woods', type: 'checkbox'},
      {id:'ll1_mc2', description:'Obtain the second Motor Controller on Shoreline', type: 'checkbox'},
      {id:'ll-mc3', description:'Obtain the third Motor Controller on Shoreline', type: 'checkbox'},
      {id:'ll-safog', description:'Obtain the first Single-axis Fiber Optic Gyroscope on Woods', type: 'checkbox'},
      {id:'ll-safog', description:'Obtain the second Single-axis Fiber Optic Gyroscope on Shoreline', type: 'checkbox'}
    ]
    //add quest pictures for quest item locations
  },
// KIND OF SABOTAGE QUEST =========================================================
    {
    id:'kind_sabo',
    name: 'Kind of Sabotage',
    description:'Accept Therapists quest Supply plans, hand over secure folder to either skier or therapist (check supply plans)',
    leadsTo: ['Dangerous Road', 'The Huntsman Path - Woods Keeper'],
    map: 'Woods',
    requiredForKappa: false,
    levelRequired: 13,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 180000 },
    { type: 'xp', name: 'Experience', amount: 4500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'kind_task', description:'WARNING!! turn in the folder to skier OR therapist (check Supply plans) hand in the Secure Folder 0052', type: 'checkbox'}
    ]
    //add pictures
  },
// RIGGED GAME QUEST ===============================================================
    {
    id:'rigged_game',
    name: 'Rigged Game',
    description:'Mark the medical containers at the specified locations on Shoreline',
    leadsTo: ['Night Sweep', 'The Huntsman path - Sadist OR Colleagues - Part 3'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 150000 },
    { type: 'item', name: 'HK MP5 9x19 submachine gun (Navy 3 Round Burst) (variant SD)', amount: 1 },
    { type: 'item', name: 'HK MP5 9x19 30-round magazine', amount: 3 },
    { type: 'item', name: '9x19mm Luger CCI ammo pack (50 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 12900 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.05' },
  ],
    objectives:[
      {id:'rigged_con1', description:'Mark the medical container at the Health Resort on Shoreline', type: 'checkbox'},
      {id:'rigged_con2', description:'Mark the medical container at the cottages on Shoreline', type: 'checkbox'},
      {id:'Rigged_con3', description:'Mark the medical container at the Pier on Shoreline', type: 'checkbox'},
      {id:'rigged_conex', description:'Survive and extract from Shoreline', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'rigged_mark', name: 'MS2000 Marker', quantity: 3}
    ],
  },
// SAFE CORRIDOR
    {
    id:'safe_cor',
    name: 'Safe Corridor',
    description:'Eliminate 10 scavs in the undergrond warehouse on Reserve',
    map: 'Reserve',
    requiredForKappa: true,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 35000 },
    { type: 'item', name: '5.45x39mm BP gs ammo pack (120 pcs)', amount: 2 },
    { type: 'item', name: 'Expeditionary fuel tank', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 9000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
  ],
    objectives:[
      {id:'safe_cor_task', description:'Eliminate 10 scavs in the underground warehouse on Reserve', type: 'counter', required: 10}
    ]
  },
// NIGHT SWEEP QUEST =============================================================
    {
    id:'night_sweep',
    name: 'Night Sweep',
    description:'find and hand over 12 unusual knives',
    map: 'Any(Night time only)',
    requiredForKappa: false,
    levelRequired: 50,
    rewards: [
    { type: 'money', name: 'Dollars', amount: 6000 },
    { type: 'xp', name: 'Experience', amount: 107000 },
    { type: 'unlock', name: 'Craft for XTG-12 antidote injector at Medstation level 2' },
    { type: 'skill', name: 'Shotgun skill', amount: '+2 levels' }
  ],
    objectives:[
      {id:'night_task', description:'Find and hand in 12 cultist knives', type: 'checkbox',required: 12, foundInRaid: true}
    ]
  },
    {
    id:'private_club',
    name: 'Private Club',
    description:'Locate and obtain Skiers walled on Customs',
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 24,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 100000 },
    { type: 'item', name:  'Walkers XCEL 500BT Digital headset', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 23000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Barter for Saiga-12K 12ga automatic shotgun at Skier LL4' }
  ],
    objectives:[
      {id:'priv_task', description:'Locate Skiers wallet in warehouse 17', type: 'checkbox'}
    ]
    //add pictures to describe quest item locations
  },
// LONG ROAD QUEST =================================================================
    {
    id:'long_road',
    name: 'Long Road',
    description:'Eliminate 8 scavs along the shore and the main road on Lighthouse',
    leadsTo: ['Missing Cargo'],
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 45000 },
    { type: 'xp', name: 'Experience', amount: 15300 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of Lobaev Arms DVL-10 7.62x51 bolt-action sniper rifle (variant Urbana) at Skier LL3' }
  ],
    objectives:[
      {id:'long_task', description:'Eliminate 8 scavs along the shore and the main road on Lighthouse', type: 'counter', required: 8}
    ]
  },
    {
    id:'missing_cargo',
    name: 'Missing Cargo',
    description:'Locate the crashed helicopter and find the informants intelligence folder on Lighthouse',
    leadsTo: ['Top Secret'],
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 30,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 68000 },
    { type: 'xp', name: 'Experience', amount: 14000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of AR-15 Magpul MOE Carbine stock (Black) at Skier LL3' },
    { type: 'unlock', name: 'Purchase of AK Zenit RK-3 pistol grip at Skier LL3' },
    { type: 'unlock', name: 'Purchase of Magpul MOE Carbine rubber buttpad at Skier LL4' }
  ],
    objectives:[
      {id:'miss_task1', description:'Locate the crashed helicopter on Lighthouse', type: 'checkbox'},
      {id:'miss_task2', description:'Find the informants intelligence folder in the first floor of the chalet on Lighthouse', type: 'checkbox'}
    ]
    // add pictures
  },
    {
    id:'top_secret',
    name: 'Top Secret',
    description:'(unlocks 21-22 hours after completing Getting Acquainted) Locate the radar station commandants office and obtain the military HDD with archived flight routes on Lighthouse',
    map: 'Lighthouse',
    requiredForKappa: false,
    levelRequired: 30,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'item', name: 'Rifle Dynamics RD-704 7.62x39 assault rifle', amount: 1 },
    { type: 'item', name: 'AK 7.62x39 FAB Defense Ultimag 30R 30-round magazine', amount: 2 },
    { type: 'item', name: '7.62x39mm MAI AP ammo pack (20 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 11700 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'top_task1', description:'Locate the radar station commandants office on Lighthouse', type: 'checkbox'},
      {id:'top_task2', description:'Obtain the military HDD with archived flight routes on Lighthouse', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'top_key', name: 'Radar station commandant room key', quantity: 1, showCheckbox: true}
    ],
    // add pictures
  },
// HOUSE ARREST - PART 1 QUEST ==========================================================
    {
    id:'house_arrest1',
    name: 'House Arrest - Part 1',
    description:'Locate where the missing group was help captive on Streets of Tarkov',
    leadsTo: ['House Arrest - Part 2'],
    map: 'Lighthouse',
    requiredForKappa:false,
    requiredForNetworkProvider: true,
    cooldown: '21 hours',
    levelRequired: 33,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 112000 },
    { type: 'item', name: 'Kel-Tec RFB 7.62x51 rifle', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 28800 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'house_arr1_task', description:'Find where jail where the captives were being held', type: 'checkbox'},
      {id:'house_arr1_ext', description:'Survive and extract from Streets of Tarkov', type: 'checkbox'}
    ]
    // add pictures
  },
// HOUSE ARREST PART 2 QUEST =====================================================
    {
    id:'house_arrest2',
    name: 'House Arrest - Part 2',
    description:'Locate the jail wardens apartment on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 33,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 114000 },
    { type: 'item', name: 'TDI KRISS Vector Gen.2 9x19 submachine gun', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 29200 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'house_arr2_task1', description:'Locate the jail wardens apartment in Chekannaya apartment 15', type: 'checkbox'},
      {id:'house_arr2_task2', description:'Survive and extract from Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'house_arr2+key', name: 'Chekannaya 15 apartment key', quantity: 1,showCheckbox: true}
    ],
    // add pictures
  },
// DEBTOR QUEST ====================================================================
    {
    id:'debtor',
    name: 'Debtor',
    description:'Find the debtor on Streets of tarkov',
    leadsTo: ['House Arrest - Part 1'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 31,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 250000 },
    { type: 'xp', name: 'Experience', amount: 26600 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'debt_task1', description:'Find the debtor om rpp, 206 of the pinewood hotel on Streets of Tarkov', type: 'checkbox'},
      {id:'debt_task2', description:'Survive and extract from Streets of Tarkov', type: 'checkbox'}
    ]
    // add pictures
  },
// THE WALLS HAVE EYES QUEST ========================================================
    {
    id:'walls_eyes',
    name: 'The Walls Have Eyes',
    description:'Install WI-FI cameras on the cranes in Factory',
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Euros', amount: 550 },
    { type: 'item', name: 'TDI KRISS Vector Gen.2 .45 ACP submachine gun', amount: 1 },
    { type: 'item', name: 'Glock .45 ACP KRISS G30 MagEx 30-round magazine', amount: 3 },
    { type: 'item', name: '.45 ACP Lasermatch FMJ ammo pack (50 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 7200 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'wall_task1', description:'Install a WI-FI camera in the first cranes cockpit on factory', type: 'checkbox'},
      {id:'wall_task2', description:'Install a WI-FI camera in the second cranes cockpit on factory', type: 'checkbox'},
      {id:'wall_task3', description:'Install a WI-FI camera in the third cranes cockpit on factory', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'wall_camera', name: 'WI-FI camera', quantity: 3}
    ],
  },
// EXIT HERE QUEST ================================================================
    {
    id:'exit here',
    name: 'Exit Here',
    description:'Survive and extract though the main exit on Factory',
    leadsTo: ['The Walls Have Eyes'],
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 12,
    rewards: [
    { type: 'money', name: 'Euros', amount: 260 },
    { type: 'item', name: 'TP-200 TNT brick', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 5500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.01' },
  ],
    objectives:[
      {id:'exit_task', description:'Exit though the main exit on Factory', type: 'checkbox'}
    ]
    // add pictures
  },
// BEYOND THE RED MEAT - PART 1 QUEST ==============================================
    {
    id:'beyond_red1',
    name: 'Beyond Red Mead - Part 1',
    description:'Locate and obtain the information on culinary secrets at the beluga resturant on Streets of Tarkov',
    leadsTo: ['Beyond the Red Meat - Part 2'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 80000 },
    { type: 'item', name: 'SAG AK-545 5.45x39 carbine', amount: 2 },
    { type: 'item', name: 'AK-74 5.45x39 6L23 30-round magazine (black)', amount: 4 },
    { type: 'item', name: '5.45x39mm BT gs ammo pack (30 pcs)', amount: 6 },
    { type: 'xp', name: 'Experience', amount: 18400 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of AK CSS knurled charging handle at Skier LL3' }
  ],
    objectives:[
      {id:'meat1_task', description:'Locate and hand over the information on culinary secrets in the beluga resturant on Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'red_key', name: 'Beluga restaurant director key', quantity: 1, showCheckbox: true}
    ],
    // add pictures
  },
// BEYOND THE RED MEAT PART 2 QUEST ================================================
    {
    id:'beyond_meat2',
    name: 'Beyond the Red Meat - Part 2',
    description:'Locate and obtain the secret ingredient at the TerraGroup office on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 120000 },
    { type: 'item', name: 'SIG MCX .300 Blackout assault rifle', amount: 1 },
    { type: 'item', name: 'AR-15 5.56x45 Colt STANAG 30-round magazine', amount: 3 },
    { type: 'item', name: '.300 Blackout CBJ ammo pack (50 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 21300 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of Zenit RK-1 tactical foregrip on B-25U mount at Skier LL4' }
  ],
    objectives:[
      {id:'meat2_task', description:'Locate and obtain the secret ingredient at the TerraGroup office on Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'red2_key', name: 'TerraGroup meeting room key', quantity: 1,showCheckbox: true}
    ],
    // add pictures and guide
  },
// PYRAMID SCHEME QUEST ============================================================
    {
    id:'pyramid_scheme',
    name: 'Pyramid Scheme',
    description:'Locate all the ATM machines on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 28,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 600000 },
    { type: 'xp', name: 'Experience', amount: 25500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'atm1', description:'Locate the first ATM on Nizhnaya Sadovaya Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm2', description:'Locate the second ATM on Nizhnaya Sadovaya Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm3', description:'Locate the ATM on Razvedchikov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm4', description:'Locate the first group of ATMs on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm5', description:'Locate the first ATM on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm6', description:'Locate the group of ATMs on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm7', description:'Locate the second ATM on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm8', description:'Locate the fourth group of ATMs on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm9', description:'Locate the fifth group of ATMs on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm10', description:'Locate the third ATM on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm11', description:'Locate the fourth ATM on Klimov Street on Streets of Tarkov', type: 'checkbox'},
      {id:'atm12', description:'Locate the first ATM on Primorsky Ave on Streets of Tarkov', type: 'checkbox'},
      {id:'atm13', description:'Locate the second ATM on Primorsky Ave on Streets of Tarkov', type: 'checkbox'},
      {id:'atm14', description:'Locate the third ATM on Primorsky Ave on Streets of Tarkov', type: 'checkbox'},
      {id:'atm15', description:'Locate the ATM at the expo on Streets of Tarkov', type: 'checkbox'}
    ]
    // add pictures and guide
  },
// NO SWIPING QUEST =================================================================
    {
    id:'no_swiping',
    name: 'No Swiping',
    description:'Locate the smugglers base on shoreline and eliminate any 25 enemies in the base area',
    map: 'Shoreline',
    requiredForKappa: false,
    levelRequired: 24,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 280000 },
    { type: 'item', name: 'Propane tank (5L)', amount: 1 },
    { type: 'item', name: 'Car battery', amount: 1 },
    { type: 'item', name: 'Silicone tube', amount: 1 },
    { type: 'item', name: 'Alkaline cleaner for heat exchangers', amount: 1 },
    { type: 'item', name: 'Can of Majaica coffee beans', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 26000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.04' },
    { type: 'unlock', name: '' }
  ],
    objectives:[
      {id:'swip_task1', description:'Locate the smugglers base on Shoreline', type: 'checkbox'},
      {id:'swip_task2', description:'Eliminate any 25 enemies in the base area', type: 'counter',required: 25}
    ]
    // add pictures 
  },
    {
    id:'irristible',
    name: 'Irresistible',
    description:'Locate and obtain the lost weapon crate on Interchange and hand it over to Skier',
    leadsTo: ['Dangerous Props'],
    map: 'Interchange',
    requiredForKappa: false,
    levelRequired: 35,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 80000 },
    { type: 'xp', name: 'Experience', amount: 32000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of MPS Auto Assault-12 Gen 1 12ga automatic shotgun at Skier LL4' }
  ],
    objectives:[
      {id:'irr_task', description:'Locate and obtain the lost weapon crate on Interchange', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'irr_key', name: 'Object #21WS keycard', quantity: 1,showCheckbox: true}
    ],
  },
// DANGEROUS PROPS QUEST ===========================================================
    {
    id:'dang_props',
    name: 'Dangerous Props',
    description:'Eliminate any 20 targets while using the MPS Auto Assault-12 shotgun',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 35,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 130000 },
    { type: 'xp', name: 'Experience', amount: 39900 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Barter for MPS Auto Assault-12 Gen 2 12ga automatic shotgun at Skier LL4' }
  ],
    objectives:[
      {id:'dang_task', description:'Eliminate any 20 targets whle using the MPS Auto Assault-12 shotgun', type: 'counter',required: 20}
    ],
    requiredItems:[
      {id:'dang_reqitem', name: 'MPS Auto Assault-12 Gen 1 12ga automatic shotgun (gen 1 or gen 2)', quantity: 1}
    ],
  },
// CONNECTIONS UP NORTH QUEST ==================================================
    {
    id:'con_north',
    name: 'Connections Up North',
    description:'Eliminate 50 PMC operatives from over 40 meters away while using a bolt-action rigle with night or thermal scope',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 35,
    cooldown: '18-24 hours after completing Silent Caliber and Hunting Trip',
    rewards: [
    { type: 'item', name: 'Sako TRG M10 .338 LM bolt-action sniper rifle', amount: 1 },
    { type: 'item', name: 'Sako TRG M10 .338 LM 8-round magazine', amount: 2 },
    { type: 'item', name: '.338 Lapua Magnum FMJ ammo pack (20 pcs)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 21000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of Sako TRG M10 .338 LM bolt-action sniper rifle at Skier LL4' }
  ],
    objectives:[
      {id:'north_task', description:'Eliminate 50 PMC operatives from over 40 meters away while using a bolt-action rifle or thermal scope', type: 'counter', required: 50}
    ],
    requiredItems:[
      {id:'north_regitem', name: 'any bolt-action and any night vision or thermal scope', quantity: 1}
    ],
  },
// THE HIGHER THEY FLY QUEST ======================================================
    {
    id:'higher_fly',
    name: 'The Higher They Fly',
    description:'Eliminate 2 PMC operatives on Woods(in one raid)',
    leadsTo: ['Route Deviation'],
    map: 'Woods',
    requiredForKappa: false,
    levelRequired: 20,
    cooldown: 'Route Deviation unlocks + 6 hours',
    rewards: [
    { type: 'money', name: 'Euros', amount: 550 },
    { type: 'item', name: 'Ammunition case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 8000 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'fly_task', description:'Eliminate 2 PMC operatives on woods in one raid', type: 'checkbox'}
    ]
  },
// EASY MONEY PART 1 QUEST =======================================================
    {
    id:'easy_mon',
    name: 'Easy Money - Part 1',
    description:'Stash a Bison vs Undertaker poster in the living quarters in skelator on Customs',
    leadsTo: ['Easy Money - Part 2'],
    map: 'Customs',
    requiredForKappa: false,
    levelRequired: 3,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 35000 },
    { type: 'xp', name: 'Experience', amount: 4500 },
    { type: 'rep', name: 'Skier Rep', amount: '' },
    { type: 'unlock', name: 'Ref as trader' }
  ],
    objectives:[
      {id:'easy1_task', description:'Stash a Bison vs Undertaker poster in the living quarters in skelator on Customs', type: 'checkbox'}
    ]
    // add pictures
  },
// MINUTE OF FAME QUEST ============================================================
    {
    id:'thirst_bread',
    name: 'Thirsty - Breadwinner',
    description:'Find and hand over 2 propane tanks (5l)',
    leadsTo: ['Thirsty - Delivery'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 5,
    rewards: [
    { type: 'money', name: 'Euros', amount: 200 },
    { type: 'item', name: 'Expeditionary fuel tank', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 9600 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.01' },
  ],
    objectives:[
      {id:'thirst_breadtask', description:'Hand over 2 Propane tank (5L)', type: 'counter',required: 2, foundInRaid: true}
    ]
  },
// THIRSTY DELIVERY
    {
    id:'thirst_deli',
    name: 'Thirsty - Delivery',
    description:'Stash propane tanks at the specified spots',
    leadsTo: ['Thirsty - Echo'],
    map: 'Multiple',
    requiredForKappa: false,
    levelRequired: 5,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 56000 },
    { type: 'item', name: 'Alyonka chocolate bar', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 14200 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'thirst_deltask1', description:'Stash a Propane tank (5L) at the ice cream shack by RUAF on Customs', type: 'checkbox'},
      {id:'thirst_deltask2', description:'Stash a Propane tank (5L) at the scav bunker by the USEC camp on Woods', type: 'checkbox'}
    ]
  },
// ROUTE DEVIATION QUEST =======================================================
    {
    id:'route_dev',
    name: 'Route Deviation',
    description:'Mark all the BTR stops on Streets of Tarkov',
    leadsTo: ['Hindsight 20/20'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 20,
    cooldown: 'Hindsight 20/20 unlocks 6+ hours after completion',
    rewards: [
    { type: 'money', name: 'Euros', amount: 1100 },
    { type: 'item', name: 'Desert Tech MDR 5.56x45 assault rifle', amount: 1 },
    { type: 'item', name: 'AR-15 5.56x45 Magpul PMAG 40 GEN M3 STANAG 40-round magazine', amount: 3 },
    { type: 'item', name: '5.56x45mm M855A1 ammo pack (50 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 17900 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'route_mark1', description:'Mark the Collapsed Crane BTR stop with an MS2000 Marker on Streets of Tarkov', type: 'checkbox'},
      {id:'route_mark2', description:'Mark the Old Scav Checkpoint BTR stop with an MS2000 Marker on Streets of Tarkov', type: 'checkbox'},
      {id:'route_mark3', description:'Mark the Pinewood Hotel BTR stop with an MS2000 Marker on Streets of Tarkov', type: 'checkbox'},
      {id:'route_mark4', description:'Mark the City Center BTR stop with an MS2000 Marker on Streets of Tarkov', type: 'checkbox'},
      {id:'route_mark5', description:'Mark the Tram BTR stop with an MS2000 Marker on Streets of Tarkov', type: 'checkbox'},
      {id:'route_mark6', description:'Mark the Rodina Cinema BTR stop with an MS2000 Marker on Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'dev_mark', name: 'MS2000 Marker', quantity: 6}
    ],
    // add pictures and guides
  },
// HINDSIGHT 20/20 QUEST ==========================================================
    {
    id:'hind_20',
    name: 'Hindsight 20/20',
    description:'Locate the bunker under the mountain on woods and stash russian armor-piercing ammo packs inside the bunker',
    leadsTo: ['Key Partner'],
    map: 'Woods',
    requiredForKappa: false,
    levelRequired: 20,
    cooldown: 'Key Partner unlocks +6 hours after completion',
    rewards: [
    { type: 'money', name: 'Euros', amount: 1600 },
    { type: 'item', name: 'Peltor ComTac VI headset (Coyote Brown)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 21800 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'hind_task1', description:'Locate the bunker under the mountain on Woods', type: 'checkbox'},
      {id:'hind_task2', description:'Stash a pack of Russian-armor piercing ammo at the stool in the hallway', type: 'checkbox'},
      {id:'hind_task3', description:'Stash a pack of Russian-armor piercing ammo at the table with the portable stovetop in the hallway', type: 'checkbox'},
      {id:'hind_task4', description:'Stash a pack of Russian-armor piercing ammo at the chair in the back right room with the bunks', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'20_ammo', name: 'any Russian armor-piercing ammo pack(7N30, BP, BS, BT PBPS, PP, PBP, 7U4, 7N42, PAB-9, SP-6,PS12B)', quantity: 3}
    ],
    //ADD pictures
  },
      {
    id:'key_part',
    name: 'Key Partnet',
    description:'Sell any 75 items to Peacekeeper',
    leadsTo: ['Killer Argument'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Euros', amount: 900 },
    { type: 'item', name: 'Intelligence folder', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 14600 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'key_task', description:'Sell any 75 items to Peacekeeper (except ammo)', type: 'counter', required: 75}
    ]
  },
// KILLER ARGUEMENT 
    {
    id:'kill_arg',
    name: 'Killer Arguement',
    description:'Locate and obtain the package with RPG ammo on Woods',
    leadsTo: ['Discombobulate'],
    map: 'Woods',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Euros', amount: 1800 },
    { type: 'item', name: 'SIG MCX-SPEAR 6.8x51 assault rifle', amount: 1 },
    { type: 'item', name: '6.8x51mm SIG FMJ', amount: 80 },
    { type: 'item', name: 'AR-10 7.62x51 Lancer L7AWM 20-round magazine', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 22500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'kill_argtask', description:'Locate the RPG ammo pack in scav house on woods by Outskirts extract', type: 'checkbox'}
    ]
    //add pictures
  },
//CHOOSE YOUR FRIENDS WISELY ==========================================================
    {
    id:'choose_fren',
    name: 'Choose Your Friends Wisely',
    description:'(WARNING!! THIS IS A MULTIPLE CHOICE QUEST, CHECK THE PRICE OF INDEPENDENCE FROM BTR QUEST LIST) use the specified transits, eliminate 5 PMC operatives then extract from Lighthouse',
    map: 'Multiple',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Euros', amount: 5000 },
    { type: 'item', name: 'T H I C C Weapon case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 85200 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
    { type: 'unlock', name: 'achievement All-Wheel Drive' }
  ],
    objectives:[
      {id:'fren_task1', description:'Use the transit from Customs to Reserve (all tasks must be done in one raid)', type: 'checkbox'},
      {id:'fren_task2', description:'Use the transit from Reserve to woods (all tasks must be done in one raid)', type: 'checkbox'},
      {id:'fren_task3', description:'Use the transit from Woods to Lighthouse( all tasks must be done in one raid)', type: 'checkbox'},
      {id:'fren_task4', description:'Survive and extract from Lighthouse', type: 'checkbox'},
      {id:'fren_task5', description:'Eliminate 5 PMC operatives while completing the other objectives', type: 'counter', required: 5},
    ]
  },
// INDISPUTABLE AUTHORITY QUEST ===================================================
    {
    id:'ind_auth',
    name: 'Indisputable Authority',
    description:'Locate and neutralize the Minotaur and 6 of his guards in the Labyrinth',
    map: 'The Labyrinth',
    requiredForKappa: false,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Euros', amount: 3000 },
    { type: 'item', name: '7.62x39mm MAI AP ammo pack (20 pcs)', amount: 8 },
    { type: 'item', name: '7.62x39mm BP gzh ammo pack (20 pcs)', amount: 8 },
    { type: 'item', name: 'Tark Souls poster', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 25500 },
    { type: 'rep', name: 'Skier Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'auth_task1', description:'Locate and neutralize the "Minotaur" inside The Labyrinth', type: 'checkbox'},
      {id:'auth_task2', description:'Eliminate 6 of the "Minotaurs" gurads inside The Labyrinth', type: 'counter',required: 6}
    ],
    requiredItems:[
      {id:'auth_card', name: 'Labrys access keycard', quantity: 1}
    ],
  },
// PROFITABLE VENTURE QUEST =======================================================
    {
    id:'prof_vent',
    name: 'Profitable Venture',
    description:'Hand over 15 Trijicon REAP-IR thermal scopes',
    leadsTo: ['Safety Guarantee'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Stress Resistance', amount: '+1 skill level' },
    { type: 'skill', name: 'Perception', amount: '+1 skill level' },
    { type: 'skill', name: 'Attention', amount: '+1 skill level' },
    { type: 'skill', name: 'Aim Drills', amount: '+1 skill level' },
    { type: 'skill', name: 'Covert Movement', amount: '+1 skill level' }
  ],
    objectives:[
      {id:'prof_task', description:'hand over Trijicon REAP-IR thermal scopes', type: 'counter'}
    ]
  },
// SAFETY GUARANTEE QUEST ============================================================
    {
    id:'safe_guar',
    name: 'Safety Guarantee',
    description:'Hand over the specfied gear',
    leadsTo: ['Never Too Late to Learn'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Light Vests', amount: '+1 skill level' },
    { type: 'skill', name: 'Heavy Vests', amount: '+1 skill level'  },
    { type: 'skill', name: 'Weapon Maintenance', amount: '+1 skill level'  },
    { type: 'skill', name: 'Troubleshooting', amount: '+1 skill level'  }
  ],
    objectives:[
      {id:'guar_task1', description:'Hand over 15 BNTI Zhuk body armors (EMR)', type: 'counter',required: 15},
      {id:'guar_task2', description:'Hand over 12 Vulkan-5 LShZ-5 bulletproof helmets', type: 'counter', required: 12},
      {id:'guar_task3', description:'Hand over 3 Maska-1SCh face shields (Killa Edition)', type: 'counter', required: 3}
    ]
  },
// NEVER TOO LATE TO LEARN QUEST ============================================================
    {
    id:'never_late',
    name: 'Never Too Late to Learn',
    description:'Hand over the specified weapons',
    leadsTo: ['Get a Foothold'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Troubleshooting', amount: '+1 skill level' },
    { type: 'skill', name: 'Mag Drills', amount: '+1 skill level' },
    { type: 'skill', name: 'Crafting', amount: '+1 skill level' },
    { type: 'skill', name: 'Hideout Management', amount: '+1 skill level' }
  ],
    objectives:[
      {id:'late_task1', description:'Hand over the item: 15 HK 416A5 5.56x45 assault rifle', type: 'counter', required: 15},
      {id:'late_task2', description:'Hand over the item: 4,500 5.56x45mm MK 318 Mod 0 (SOST)', type: 'counter', required: 4500},
      {id:'late_task3', description:'Hand over the item: 8 UVSR Taiga-1 survival machete', type: 'counter', required: 8}
    ]
  },
// GET A FOOTHOLD QUEST ===============================================================
    {
    id:'get_foot',
    name: 'Get a Foothold',
    description:'Hand over the specified stims',
    leadsTo: ['Profit Retention'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Stress Resistance', amount: '+1 skill level' },
    { type: 'skill', name: 'Vitality', amount: '+1 skill level' },
    { type: 'skill', name: 'Surgery', amount: '+1 skill level' },
    { type: 'skill', name: 'Health', amount: '+1 skill level' },
    { type: 'skill', name: 'Immunity', amount: '+1 skill level' }
  ],
    objectives:[
      {id:'foot_task1', description:'Hand over the item: 30 SJ6 TGLabs combat stimulant injector', type: 'counter', required: 30},
      {id:'foot_task2', description:'Hand over the item: 30 Obdolbos 2 cocktail injector', type: 'counter', required: 30},
      {id:'foot_task3', description:'Hand over the item: 30 Propital regenerative stimulant injector', type: 'counter', required: 30},
      {id:'foot_task4', description:'Hand over the item: 30 M.U.L.E. stimulant injector', type: 'counter', required: 30},
      {id:'foot_task5', description:'Hand over the item: 30 ETG-change regenerative stimulant injector', type: 'counter', required: 30},
      {id:'foot_task6', description:'Hand over the item: 30 SJ9 TGLabs combat stimulant injector', type: 'counter', required: 30},
      {id:'foot_task7', description:'Hand over the item: 30 SJ12 TGLabs combat stimulant injector', type: 'counter', required: 30},
      {id:'foot_task8', description:'Hand over the item: 30 Meldonin injector', type: 'counter', required: 30},
    ]
  },
// PROFIT RETENTION QUEST ==========================================================
    {
    id:'prof_ret',
    name: 'Profit Retention',
    description:'Hand over the specified items',
    leadsTo: ['A life Lesson'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Crafting', amount: '+1 skill level' },
    { type: 'skill', name: 'Hideout Managment', amount: '+1 skill level' },
    { type: 'skill', name: 'Perception', amount: '+1 skill level' },
    { type: 'skill', name: 'Attention', amount: '+1 skill level' },
    { type: 'skill', name: 'Search', amount: '+1 skill level' },
  ],
    objectives:[
      {id:'prof_task1', description:'Hand over 30 Graphics cards', type: 'counter',required: 30},
      {id:'prof_task2', description:'Hand over 15 Physical Bitcoin', type: 'counter', required: 15}
    ]
  },
//A LIFE LESSON QUEST ================================================================
    {
    id:'life_less',
    name: 'A Life Lesson',
    description:'Hand over the specified alcohol',
    leadsTo: ['Consolation Prize'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Endurance', amount: '+1 skill level' },
    { type: 'skill', name: 'Strength', amount: '+1 skill level' },
    { type: 'skill', name: 'Metabolism', amount: '+1 skill level' },
    { type: 'skill', name: 'Charisma', amount: '+1 skill level' },
    { type: 'skill', name: 'Intellect', amount: '+1 skill level' },
  ],
    objectives:[
      {id:'life_task1', description:'Hand over the item: 8 Bottle of Tarkovskaya vodka', type: 'counter', required: 8},
      {id:'life_task2', description:'Hand over the item: 15 Bottle of Dan Jackiel whiskey', type: 'counter', required: 15},
      {id:'life_task3', description:'Hand over the item: 15 Bottle of Fierce Hatchling moonshine', type: 'counter', required: 15}
    ]
  },
// CONSOLATION PRIZE QUEST ============================================================
    {
    id:'con_prize',
    name: 'Consolation Prize',
    description:'Survive and extract from the labs and eliminate raiders',
    map: 'The Labs',
    requiredForKappa: false,
    levelRequired: 61,
    rewards: [
    { type: 'skill', name: 'Aim Drills', amount: '+1 skill level' },
    { type: 'skill', name: 'Assault Rifles', amount: '+1 skill level' },
    { type: 'skill', name: 'Sniping', amount: '+1 skill level' },
    { type: 'skill', name: 'Weapon Maintenance', amount: '+1 skill level' },
    { type: 'skill', name: 'Troubleshooting', amount: '+1 skill level' },
    { type: 'skill', name: 'DMRs', amount: '+1 skill level' },
    { type: 'skill', name: 'Heavy Machine Guns', amount: '+1 skill level' },
    { type: 'skill', name: 'Light Machine Guns', amount: '+1 skill level' },
    { type: 'skill', name: 'Melee', amount: '+1 skill level' },
    { type: 'skill', name: 'Pistols', amount: '+1 skill level' },
    { type: 'skill', name: 'Revolvers', amount: '+1 skill level' },
    { type: 'skill', name: 'Grenade Launchers', amount: '+1 skill level' },
    { type: 'skill', name: 'Shotguns', amount: '+1 skill level' },
    { type: 'skill', name: 'Submachine Guns', amount: '+1 skill level' },
    { type: 'skill', name: 'Throwables', amount: '+1 skill level' },
    { type: 'skill', name: 'Underbarrel Lunchers', amount: '+1 skill level' },
  ],
    objectives:[
      {id:'prize_task1', description:'Survive and extract from The lab 15 times', type: 'counter',required: 15},
      {id:'prize_task2', description:'Eliminate 100 Raiders in The Lab', type: 'counter', required: 100}
    ]
  },

];

// ===== SkierQuestList Component =====
function SkierQuestList() {
  // ===== State: Quest Completion =====
  const [completed, setCompleted] = React.useState<{ [id: string]: boolean }>(() => {
    const saved = localStorage.getItem('skierQuestProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Objective Progress =====
  const [objectiveProgress, setObjectiveProgress] = React.useState<{ [questId: string]: { [objId: string]: number | boolean } }>(() => {
    const saved = localStorage.getItem('skierObjectiveProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Optional Item Progress =====
  const [optionalItemProgress, setOptionalItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
    const saved = localStorage.getItem('skierOptionalItemProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Required Item Checkbox Progress =====
  const [requiredItemProgress, setRequiredItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
    const saved = localStorage.getItem('skierRequiredItemProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Selected Map =====
  const [selectedMap, setSelectedMap] = React.useState<string>('');

  // ===== State: Image Lightbox =====
  const [openImage, setOpenImage] = React.useState<{ image: string; description: string } | null>(null);

  // ===== Handlers: Required Item Checkbox =====
  const handleRequiredItemCheck = (questId: string, itemId: string) => {
    setRequiredItemProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [itemId]: !questObj[itemId] }
      };
      localStorage.setItem('skierRequiredItemProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Handlers: Objective Checkbox =====
  const handleObjectiveCheck = (questId: string, objId: string) => {
    setObjectiveProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [objId]: !questObj[objId] }
      };
      localStorage.setItem('skierObjectiveProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Handlers: Objective Counter =====
  const handleCounterObjective = (questId: string, objId: string, value: number) => {
    setObjectiveProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [objId]: value }
      };
      localStorage.setItem('skierObjectiveProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Handlers: Optional Item Checkbox =====
  const handleOptionalItemCheck = (questId: string, itemId: string) => {
    setOptionalItemProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [itemId]: !questObj[itemId] }
      };
      localStorage.setItem('skierOptionalItemProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Effect: Auto-complete Quest if All Objectives Complete =====
  React.useEffect(() => {
    skierQuests.forEach(quest => {
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
          localStorage.setItem('skierQuestProgress', JSON.stringify(updated));
          return updated;
        });
      } else if (!allComplete && completed[quest.id]) {
        setCompleted(prev => {
          const updated = { ...prev, [quest.id]: false };
          localStorage.setItem('skierQuestProgress', JSON.stringify(updated));
          return updated;
        });
      }
    });
    // eslint-disable-next-line
  }, [objectiveProgress]);

  // ===== RENDER: Quest List =====
  const uniqueMaps = [...new Set(skierQuests.map(q => q.map).filter(Boolean))];
  const filteredQuests = selectedMap
    ? skierQuests.filter(q => q.map === selectedMap)
    : skierQuests;

  return (
    <>
      <Box>
        {/* Map filter dropdown */}
        <Box sx={{ mb: 2 }}>
          <TextField
            select
            label="Filter by Map"
            value={selectedMap}
            onChange={e => setSelectedMap(e.target.value)}
            sx={{ minWidth: 200 }}
            InputLabelProps={{ shrink: true }}
            slotProps={{
              select: {
                displayEmpty: true,
                renderValue: (selected) =>
                  typeof selected === "string" && selected !== "" ? selected : "All Maps"
              }
            }}
          >
            <MenuItem value="">All Maps</MenuItem>
            {uniqueMaps.map(map => (
              <MenuItem key={map} value={map}>{map}</MenuItem>
            ))}
          </TextField>
        </Box>
        {filteredQuests.map((quest: Quest) => {
          const isCompleted = !!completed[quest.id];
          const questObj = objectiveProgress[quest.id] || {};
          return (
            <Box
              key={quest.id}
              sx={{
                mb: 2,
                p: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
                backgroundColor: isCompleted ? '#e0e0e0' : 'inherit',
                opacity: isCompleted ? 0.6 : 1,
                transition: 'background 0.2s, opacity 0.2s',
              }}
            >
              {/* ===== Quest Name & Completion Checkbox ===== */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCompleted}
                    onChange={() => {
                      setCompleted(prev => {
                        const updated = { ...prev, [quest.id]: !prev[quest.id] };
                        localStorage.setItem('skierQuestProgress', JSON.stringify(updated));
                        return updated;
                      });
                    }}
                  />
                }
                label={
                  <Typography
                    variant="h6"
                    sx={{
                      textDecoration: isCompleted ? 'line-through' : 'none',
                      color: isCompleted ? 'text.disabled' : 'text.primary',
                    }}
                  >
                    {quest.name}
                  </Typography>
                }
              />
              {/* ===== Level Requirement ===== */}
              {quest.levelRequired && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    ml: 4,
                    color: isCompleted ? 'text.disabled' : 'text.secondary',
                    fontWeight: 'bold'
                  }}
                >
                  Level Required: {quest.levelRequired}
                </Typography>
              )}
              {/* ===== Quest Description ===== */}
              <Typography
                variant="body2"
                sx={{
                  ml: 4,
                  textDecoration: isCompleted ? 'line-through' : 'none',
                  color: isCompleted ? 'text.disabled' : 'text.primary',
                }}
              >
                {quest.description}
              </Typography>

              {/* ===== Requirements Section (add this!) ===== */}
{quest.requirements && quest.requirements.length > 0 && (
  <Typography
    variant="subtitle2"
    sx={{ ml: 4, color: 'warning.main', fontWeight: 'bold', mb: 1 }}
  >
    Requirements: {quest.requirements.join(", ")}
  </Typography>
)}
              {/* ===== Objectives Section ===== */}
              {quest.objectives && (
                <Box sx={{ ml: 6, mt: 1 }}>
                  {quest.objectives.map(obj => (
                    <Box key={obj.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {obj.type === 'checkbox' ? (
                        <Checkbox
                          checked={!!questObj[obj.id]}
                          onChange={() => handleObjectiveCheck(quest.id, obj.id)}
                          disabled={isCompleted}
                        />
                      ) : (
                        <>
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
                            sx={{ mx: 1, width: 60 }}
                          />
                          <IconButton
                            size="small"
                            onClick={() => handleCounterObjective(quest.id, obj.id, Math.min((obj.required || 99), Number(questObj[obj.id] || 0) + 1))}
                            disabled={isCompleted || Number(questObj[obj.id] || 0) >= (obj.required || 99)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: !!questObj[obj.id] && ((obj.type === 'checkbox' && questObj[obj.id]) || (obj.type === 'counter' && Number(questObj[obj.id]) >= (obj.required || 1))) ? 'line-through' : 'none',
                          color: !!questObj[obj.id] && ((obj.type === 'checkbox' && questObj[obj.id]) || (obj.type === 'counter' && Number(questObj[obj.id]) >= (obj.required || 1))) ? 'text.disabled' : 'text.primary',
                          ml: 1,
                          display: 'inline',
                        }}
                      >
                        {obj.description}
                        {obj.type === 'counter' && ` (${questObj[obj.id] || 0}/${obj.required})`}
                        {obj.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
              {/* ===== Required Items Section ===== */}
              {quest.requiredItems && (
                <Box sx={{ ml: 6, mt: 1 }}>
                  <Typography variant="subtitle2">Required Items:</Typography>
                  {quest.requiredItems.map(item =>
                    item.showCheckbox ? (
                      <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Checkbox
                          checked={!!(requiredItemProgress[quest.id]?.[item.id])}
                          onChange={() => handleRequiredItemCheck(quest.id, item.id)}
                        />
                        <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                          {item.name}
                          {item.quantity && ` x${item.quantity}`}
                          {item.foundInRaid && (
                            <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                              [FIR]
                            </Box>
                          )}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography key={item.id} variant="body2" sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                        {item.name}
                        {item.quantity && ` x${item.quantity}`}
                        {item.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                      </Typography>
                    )
                  )}
                </Box>
              )}
              {/* ===== Optional Items Section ===== */}
              {quest.optionalItems && (
                <Box sx={{ ml: 6, mt: 1 }}>
                  <Typography variant="subtitle2">Optional Items:</Typography>
                  {quest.optionalItems.map(item => (
                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Checkbox
                        checked={!!(optionalItemProgress[quest.id]?.[item.id])}
                        onChange={() => handleOptionalItemCheck(quest.id, item.id)}
                      />
                      <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                        {item.name} x{item.quantity}
                        {item.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
              {/* ===== Leads To Section ===== */}
              <Typography
                variant="caption"
                sx={{
                  ml: 4,
                  textDecoration: isCompleted ? 'line-through' : 'none',
                  color: isCompleted ? 'text.disabled' : 'text.secondary',
                }}
              >
                Leads to: {quest.leadsTo && quest.leadsTo.length > 0 ? quest.leadsTo.join(', ') : '—'}
              </Typography>
              {/* ===== Required for Kappa Tag ===== */}
              <Typography
                variant="caption"
                sx={{
                  ml: 4,
                  color: quest.requiredForKappa ? 'success.main' : 'text.secondary',
                  fontWeight: 'bold',
                  display: 'block'
                }}
              >
                Required for Kappa: {quest.requiredForKappa ? 'Yes' : 'No'}
              </Typography>
              {/* ===== Required for Network Provider Tag (only if required) ===== */}
              {quest.requiredForNetworkProvider && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'info.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Required for Network Provider
                </Typography>
              )}
              {/* ===== Map Tag (only if present) ===== */}
              {quest.map && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'primary.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Map: {quest.map}
                </Typography>
              )}
              {/* ===== Transit Tag (only if present) ===== */}
              {quest.transit && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'warning.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Transit: {quest.transit}
                </Typography>
              )}
              {/* ===== Cooldown Tag (only if present) ===== */}
              {quest.cooldown && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'error.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Cooldown: {quest.cooldown}
                </Typography>
              )}
              {/* ===== Rewards Section (only if present) ===== */}
              {quest.rewards && quest.rewards.length > 0 && (
                <Box sx={{ ml: 4, mt: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Rewards:</Typography>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {quest.rewards.map((reward, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" component="span">
                          {reward.amount ? `${reward.amount} ` : ''}
                          {reward.name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
              {/* ===== Note (only if present) ===== */}
              {quest.note && (
                <Typography
                  variant="body2"
                  sx={{
                    ml: 4,
                    color: 'info.main',
                    fontStyle: 'italic',
                    mt: 1,
                  }}
                >
                  {quest.note}
                </Typography>
              )}
              {/* ===== Item Spawn Locations (only if present) ===== */}
              {quest.itemSpawnLocations && quest.itemSpawnLocations.length > 0 && (
                <Box sx={{ mt: 2, ml: 4 }}>
                  <Typography variant="subtitle1" gutterBottom>
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
            </Box>
          );
        })}
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
export default SkierQuestList;