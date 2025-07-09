//imports============
import React from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  MenuItem,
  Dialog,
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { Quest,} from './types';






// Prapor's quest list with objectives
const praporQuests: Quest[] = [
  {
    id: 'shooting cans',
    name: 'Shooting cans',
    description: 'Locate the machine gun and AGS emplacements and eliminate 5 scavs on ground zero',
    leadsTo: ['Debut'],
    map: 'Ground Zero',
    requiredForKappa: true,
    levelRequired: 1,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 13000  },
    { type: 'item', name: 'Mosin 7.62x54R bolt-action rifle (infantry)', amount: 1  },
     { type: 'item', name: '7.62x54 R FMJ ammo pack(20pcs)', amount: 3  },
    { type: 'xp', name: 'Experience', amount: 1600 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.01' }
  ],
    objectives: [
      {id: 'utyos machine gun', description: 'Locate the machine gun', type: 'checkbox'},
      {id: 'AGS machine gun', description: 'Locate the AGS grenade launcher', type: 'checkbox'}
    ],
  },
  {
    id: 'debut',
    name: 'Debut',
    description: 'Eliminate 5 Scavs on Customs and hand over 2 MP-133 12ga shotguns.',
    leadsTo: ['search mission', 'luxurious life'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 1,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 15000 },
    { type: 'item', name: 'PP-91 Kedr 9x18PM submachine gun', amount:1  },
    { type: 'item', name: '9X18mm PM BZhT gzh ammopack(50 pcs)', amount:2  },
    { type: 'xp', name: 'Experience', amount:1700  },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'rep', name: 'Jaeger Rep', amount: '+0.01' },
    { type: 'unlock', name: 'Purchase of Kalashnikov AKS-74UB 5.45x39 assault rifle at prapor LL1' }
  ],
    objectives: [
      { id: 'scavs', description: 'Eliminate Scavs on Customs', type: 'counter', required: 5 },
      { id: 'shotguns', description: 'Hand over MP-133 12ga shotguns', type: 'counter', required: 2 },
    ],
  },
{
  id: 'luxurious life',
  name: 'Luxurious Life',
  description: 'Locate the liquor store, locate the wine bottle, hand over the bottle',
  leadsTo: ['background check'],
  map: 'Ground Zero',
  levelRequired: 1,
  rewards: [
    { type: 'money', name: 'Roubles', amount: 14000  },
    { type: 'item', name: 'Molot Arms VPO-136 Vepr-KM 7.62x39 carbine', amount: 1 },
    { type: 'item', name: '7.62X39mm FMJ ammo pack(20 pcs)', amount: 5 },
    { type: 'item', name: ' AK 7.62x39 30-round magazine (issued 55 or later)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 1750 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.01' },
  ],
  objectives: [
    { id: 'liquor store', description: 'Locate the liquor store', type: 'checkbox' },
    { id: 'wine bottle', description: 'Locate the wine bottle', type: 'checkbox' },
    { id: 'hand over', description: 'Hand over the wine bottle', type: 'checkbox' }
  ],
  itemSpawnLocations: [
    {
      image: '/Luxurious_Life_Spawn_1.jpg', // path is relative to public folder
      description: 'On the counter inside the liquor store on Streets of Tarkov. Check behind the register and on the shelves.'
      //add picures later
    }
  ]
},
   {
    id:'search_mission',
    name: 'Search Mission',
    description:'Locate prapors missing convoy and the temporary USEC camp on woods',
    map: 'Woods',
    levelRequired: 5,
    requiredForKappa: true,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 22000 },
    { type: 'item', name: 'EYE MK 2 professional hand-held compass', amount: 1 },
    { type: 'item', name: 'Woods plan map', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 2800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of NPP KIASS Kora-Kulon body armor (EMR) at Prapor LL1' }
  ],
 
    objectives: [
      {id: 'search_convoy', description:'Locate Prapors mssing convoy on Woods', type:'checkbox',},
      {id: 'search_camp', description:'Locate the temporary USEC camp on woods', type:'checkbox',},
      {id: 'search_survive', description:'Survive and extract from Woods', type:'checkbox',}
    ],
  },
  {
  id: 'background_check',
  name: 'Background Check',
  description: 'Locate and obtain the bronze pocket watch on Customs.',
  leadsTo: ['Shootout_picnic', 'Delivery_from_the_past'],
  map: 'Customs',
  levelRequired: 2,
  requiredForKappa:true,
   rewards: [
    { type: 'money', name: 'Roubles', amount: 15000 },
    { type: 'item', name: 'TOZ Simonov SKS 7.62x39 carbine', amount: 1 },
    { type: 'item', name: '7.62x39mm FMJ ammo pack (20 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 1800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
 
  objectives: [
    { id: 'machinery_key', description: 'Obtain the Machinery Key', type: 'checkbox' },
    { id: 'bronze_watch', description: 'Obtain the Bronze Pocket Watch', type: 'checkbox' },
    { id: 'hand_over_watch', description: 'Hand over the Bronze Pocket Watch', type: 'checkbox' }
  ],
  requiredItems: [
    { id: 'machinery_key', name: 'Machinery Key', quantity: 1 }
  ]
},
  {
    id: 'delivery from the past',
    name:'Delivery From the Past',
    description:'obtain the secure folder in the tarcone directors office and stash on 2ndfloor in the break room near gate 3 on factory',
    leadsTo: ['BP depot'],
    map: 'Customs',
    levelRequired: 5,
    requiredForKappa: true,
     rewards: [
    { type: 'money', name: 'Roubles', amount: 20000 },
    { type: 'item', name: 'Saiga-12K ver.10 12ga semi-automatic shotgun', amount: 1 },
    { type: 'item', name: 'SOK-12 12ga sb.5 5-round magazine', amount: 4 },
    { type: 'item', name: '12/70 8.5mm Magnum buckshot ammo pack (25 pcs)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 4000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of 5.45x39mm FMJ at Prapor LL2' }
  ],
    objectives: [
      {id: 'tarcone_key', description:'obtain the tarcone directors key', type:'checkbox'},
      {id: 'stash', description: 'stash the package in the break room on the 2nd floor near gate 3 on factory', type: 'checkbox'},
      {id: 'survive', description: 'survive and extract from factory', type: 'checkbox'}
    ],
    requiredItems:[
      {id: 'tarcone_key', name:'Tarcone Directors Key', quantity: 1}
    ]
  },
  {
    id: 'shootout_picnic',
    name: 'Shootout Picnic',
    description: 'Eliminate 15 Scavs on Woods.',
    map: 'Woods',
    levelRequired: 3,
    requiredForKappa: true,
     rewards: [
    { type: 'money', name: 'Roubles', amount: 20000 },
    { type: 'item', name: 'Kalashnikov AKS-74UN 5.45x39 assault rifle', amount: 1 },
    { type: 'item', name: 'AK-74 5.45x39 6L20 30-round magazine', amount: 3 },
    { type: 'item', name: '5.45x39mm PP gs ammo pack (30 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 2000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'rep', name: 'Jaeger Rep', amount: '+0.01' },
    { type: 'unlock', name: 'Purchase of Lebedev PL-15 9x19 pistol at Prapor LL1' },
    { type: 'unlock', name: 'Purchase of 6B5-16 Zh-86 Uley armored rig (khaki) at Prapor LL2' },
    { type: 'unlock', name: 'Duck hideout shooting range target style' }
  ],
    objectives: [
      { id: 'scavs_woods', description: 'Eliminate Scavs on Woods', type: 'counter', required: 15 },
    ],
  },
  {
    id:'bp_depot',
    name: 'BP Depot',
    description: 'locate the fuel tankers on customs',
    leadsTo: ['bap rep evidence', 'the bunker-part 1', 'belka and strelka'],
    map: 'Customs',
    levelRequired: 5,
    requiredForKappa: true,
     rewards: [
    { type: 'money', name: 'Roubles', amount: 30000 },
    { type: 'item', name: 'Expeditionary fuel tank', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 2800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'rep', name: 'Jaeger Rep', amount: '-0.01' },
    { type: 'unlock', name: 'Purchase of PP-9 Klin 9x18MM submachine gun at Prapor LL1' }
  ],
    objectives: [
      {id:'tank1', description: 'locate truck 1 behind new gas', type: 'checkbox'},
      {id: 'tank2', description: 'locate tank 2 at the construction site', type: 'checkbox'},
      {id: 'tank3', description: 'locate tank 3 at the old gas station', type: 'checkbox'},
      {id: 'tank4', description: 'locate tank 4 at trailer park behind big red', type: 'checkbox'}
    ]
  },
  {
    id: 'bad rep evidence',
    name: 'Bad Rep Evidence',
    description: 'obtain the secure folder 0031 in the bunkhouse on customs',
    leadsTo: ['icecream cones'],
    map: 'Customs',
    levelRequired: 6,
    requiredForKappa: true,
    transit:'from customs to shoreline',
    cooldown: '12 hours',
     rewards: [
    { type: 'money', name: 'Roubles', amount: 35000 },
    { type: 'item', name: 'PP-91-01 Kedr-B 9x18PM submachine gun', amount: 1 },
    { type: 'item', name: 'PP-91 Kedr 9x18PM 30-round magazine', amount: 3 },
    { type: 'item', name: '9x18 PM PS gs PPO ammo pack (50 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 4100 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Purchase of BelOMO PSO-1M2-1 4x24 scope at Prapor LL2' },
    { type: 'unlock', name: 'Purchase of SSSh-94 SFERA-S helmet at Prapor LL1' }
  ],
  note: 'check barter page for bunkhouse key',
    objectives: [
      {id: 'bunkhouse_key', description: 'obtain the secure folder 0031', type: 'checkbox'},
      {id: 'handover', description: "hand over secure folder 0031", type: "checkbox"},
      {id: 'survive', description: 'surive and extract from customs', type: 'checkbox'}
    ],
    requiredItems:[
      {id: 'bunkhouse_key', name: 'Portable Bunkhouse Cabin Key', quantity: 1,showCheckbox: true}
    ]
  },
  {
    id: 'the bunker-part 1',
    name: 'The Bunker-Part 1',
    description: 'locate the underground bunker on reserve',
    leadsTo: ['The Bunker-Part 2'],
    map: 'Reserve',
    requiredForKappa: true,
    levelRequired: 10,
     rewards: [
    { type: 'money', name: 'Roubles', amount: 20000 },
    { type: 'item', name: 'SR-2M Versek 9x21 submachine gun', amount: 1 },
    { type: 'item', name: '9x21mm BT ammo pack (30 pcs)', amount: 3 },
    { type: 'item', name: 'SR-2M 9x21 20-round magazine', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 5700 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'unlock', name: 'purchase of 9x21mm PS gzh at Prapor LL2' }
  ],
    objectives: [
      {id: 'locate_bunker', description: 'locate the underground bunker on reserve', type: 'checkbox'},
      {id: 'locate_control', description: 'locate the command room in the bunker on reserve', type:'checkbox'},
      {id: 'survive_bunker', description: 'survive and extract from reserve', type: 'checkbox'}
    ]
  },
  {
    id:'belka_and_strelka',
    name: 'Belka and Strelka',
    description:'survive and extract though railroad passage on customs',
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 5,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 44000 },
    { type: 'item', name: 'RGD-5 hand grenade', amount: 5 },
    { type: 'xp', name: 'Experience', amount: 8200 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.01' },
  ],
    objectives:[
      {id:'flare_extract_railroad', description:'use green flare to extract though railroad passage by skelator on customs', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'green_flare1', name: 'RSP-30 reactive signal cartridge (Green)', quantity: 1}
    ],
  },
  {
    id:'icecream_cones',
    name: 'Ice Cream Cones',
    description:'find 3 6l31 60 round ak mags',
    leadsTo: ['postman pat- part 1', 'shaking up the teller'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 9,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 17000 },
    { type: 'item', name: 'RPK-16 5.45x39 light machine gun', amount: 1 },
    { type: 'item', name: '5.45x39mm PP gs ammo pack (120 pcs)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 5200 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Barter for AK-74 5.45x39 6L31 60-round magazine' }
  ],
    objectives: [
      {id: 'find_60_mags', description:'find 3 AK-74 5.45x39 6l31 60 round magazines', type:'counter', required: 3, foundInRaid: true},
      {id: '60round_handover', description:'hand over the 4 AK-74 5.45x39 6l31 60 round magazines', type: 'counter', required: 3, foundInRaid: true}
    ],
    optionalItems:[
      {id:'zb_key', name:'zb-14 key', quantity: 1}
    ]
  },
  {
    id:'bunker2',
    name: 'The Bunker-Part 2',
    description:'locate the hermetic doors in the underground bunker system',
    leadsTo:['No Place For Renegades'],
    map: 'Reserve',
    requiredForKappa: true,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 25000 },
    { type: 'item', name: 'Kalashnikov AKS-74UB 5.45x39 assault rifle', amount: 1 },
    { type: 'item', name: '5.45x39mm BS gs ammo pack (120 pcs)', amount: 1 },
    { type: 'item', name: 'AK CAA RS47 handguard', amount: 1 },
    { type: 'item', name: 'AK-74M CAA AKTS AK74 buffer tube', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 9200 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
    objectives: [
      {id:'wbisop_hermetic', description: 'locate the hermetic door leading to the hospital(white bishop)', type:'checkbox'},
      {id:'bbishop_hermetic', description: 'locate the hermetic door leading to the academy building(black bishop)', type: 'checkbox'},
      {id:'bpawn_hermetic', description: 'locate the hermetic door leading to the barracks #1(black pawn)', type: 'checkbox'},
      {id:'wpawn_hermetic', description:'locate the hermetic door leading to barracks #2(white pawn)', type:'checkbox'},
      {id:'king_hermetic', description: 'locate the hermetic door leading to the building of the air control center(king)', type:'checkbox'}
    ]
  },
  {
    id:'post_pat',
    name: 'Postman Pat-part 1',
    description:'obtain the letter on the messengers body on factory',
    leadsTo:['Postman Pat-part 2', "you've Got Mail", 'Possessor'],
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'item', name: 'ANA Tatical Beta 2 Battle backpack (Olive Drab', amount: 1 },
    { type: 'item', name: '6B2 body armor (Flora)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 5900 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
 
    objectives:[
      {id:'postman_letter', description:"obtain the letter on the messengers body on factory in the room under the '1986' writing", type: 'checkbox'},
      {id: 'postman_extract', description:'survive and extract from factory with the letter', type:'checkbox'},
      {id: 'postman1_finish', description:'hand the letter to therapist', type:'checkbox'}
    ]
  },
  {
    id:'shaking_teller',
    name: 'Shaking Up The Teller',
    description:'obtain the valuable item in dorm room 203 on customs',
    leadsTo: ['The Punisher-part 1', 'Perfect Mediator', 'Anethesia'],
    map: 'Customs',
    requiredForKappa: true,
    requirements: ['Reach loyalty level 2 with Prapor'],
    levelRequired: 15,
      rewards: [
    { type: 'money', name: 'Roubles', amount: 75000 },
    { type: 'item', name: 'Geiger-Muller counter', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 5900 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of AKS-74U PBS-4 sound suppressor at Prapor LL3' },
    { type: 'unlock', name: 'Purchase of Hexagon 12K 12ga sound suppressor at Skier LL2' },
  ],
    objectives: [
      {id: 'teller_item', description:'obtain the vaulable item in dorm room 203', type:'checkbox'},
      {id: 'teller_handover', description:'hand over the vaulable item', type: 'checkbox',}
    ],
    requiredItems:[
      {id:'dorm203k', name: 'dorm 203 key', quantity: 1}
    ],
    optionalItems:[
      {id:'dorm214k', name:'dorm room 214 key', quantity: 1}
    ]
  },
  {
    id:'no_place_renegades',
    name: 'No Place For Renegades',
    description:'"kill raiders in the bunker on reserve',
    leadsTo:['documents'],
    map: 'Reserve',
    requiredForKappa: true,
    levelRequired: 17,
      rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'item', name: 'Kalashnikov AK-103 7.62x39 assault rifle', amount: 1 },
    { type: 'item', name: 'AK-103 7.62x39 30-round magazine', amount: 3 },
    { type: 'item', name: '7.62x39mm PP gzh ammo pack (20 pcs)', amount: 7 },
    { type: 'xp', name: 'Experience', amount: 15300 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'renegade_raiders', description:'kill 5 raiders in the bunker on reserve', type: 'counter',required: 5}
    ]
  },
  {
    id:'your_mail',
    name: "you've got mail",
    description:'obtain the registered mail on streets of tarkov',
    leadsTo:['Glory to the CPSU-part 1'],
    map: 'Streets of Tarkov',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 28000 },
    { type: 'item', name: '6B47 Ratnik-Bsh helmet (Olive Drab)', amount: 1 },
    { type: 'item', name: '5.45x39mm BP gs ammo pack (30 pcs)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 4800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of 9x18mm PM SP7 gzh at Prapor' }
  ],
    objectives:[
      {id:'streets_mail', description:'obtain the registered mail', type: 'checkbox'},
      {id:'streets_mail_hand', description:'hand over the letter', type:'checkbox'}
    ]
  },
  {
    id:'possessor',
    name: 'Possessor',
    description:'locate and obtain the helicopter logbook on Factory',
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 49000 },
    { type: 'item', name: 'Metal fuel tank', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 7300 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'heli_poss', description:'locate the helicopter logbook on factory', type: 'checkbox'}
    ]
  },
  {
    id:'pun1',
    name: 'The Punisher-part 1',
    description:'eliminate 15 scavs on shoreline with a AKM series weapon',
    leadsTo:['The Punisher-part 2'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 17,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 40000 },
    { type: 'item', name: '6B43 Zabralo-Sh body armor (EMR)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 10200 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of SV-98 7.62x54R bolt-action sniper rifle at Prapor LL3' },
    { type: 'unlock', name: 'Purchase of 7.62x39mm PS gzh at Prapor LL3' }
  ],
    objectives:[
      {id:'pun1_task', description:'kill 15 scavs with a AKM series weapon on shoreline', type:'counter', required: 15}
    ]
  },
  {
    id:'perf_med',
    name: 'Perfect Mediator',
    description:'reach level 4 loyalty with all traders',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 35,
      rewards: [
    { type: 'money', name: 'Roubles', amount: 55000 },
    { type: 'item', name: 'T H I C C Weapon case', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 20900 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of SR-3M 9x39 compact assault rifle at Prapor LL4' }
  ],
    objectives:[
      {id:'ragman_lvl', description:'reach level 4 loyalty with Ragman', type: 'checkbox'},
      {id:'skier_lvl', description:'Reach level 4 loyalty with Skier', type: 'checkbox'},
      {id:'mechanic_lvl', description:'Reach level 4 loyalty with Mechanic', type: 'checkbox'},
      {id:'Peacekeeper_lvl', description:'Reach level 4 loyalty with Peacekeeper', type: 'checkbox'},
      {id:'prapor_lvl', description:'Reach level 4 loyalty with Prapor', type: 'checkbox'},
      {id:'therapist_lvl', description:'Reach level 4 loyalty with Therapist', type: 'checkbox'},
      {id:'jaeger_lvl', description:'Reach level 4 loyalty with Jaeger', type: 'checkbox'}
    ]
  },
  {
    id:'anethesia',
    name: 'Anethesia',
    description:'Mark the trading posts on shoreline',
    leadsTo: ['Rigged Game', 'Samples', 'Chemsitry Closet'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'item', name: 'AS VAL 9x39 special assault rifle', amount: 1 },
    { type: 'item', name: '9x39mm SPP gs ammo pack (20 pcs)', amount: 5 },
    { type: 'item', name: '9x39mm SP-6 gs ammo pack (20 pcs)', amount: 5 },
    { type: 'xp', name: 'Experience', amount: 18100 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.04' },
  ],
    objectives: [
      {id: 'trad_post1', description:'Mark the first trading post next to the ambulance at resort',type: 'checkbox'},
      {id: 'trad_post2', description:'Mark the second trading post in the backyard of the locked cottage', type: 'checkbox'},
      {id: 'trad_post3', description:'Mark the second trading post in front of the office building at the pier', type:'checkbox'}
    ],
    requiredItems:[
      {id:'ms_marker', name: 'MS2000 Marker', quantity: 3}
    ],
  },

   {
    id:'documents',
    name: 'Documents',
    description:'Locate and obtain 3 military folders',
    leadsTo: ['Special Comms'],
    map: 'Reserve',
    requiredForKappa: true,
    levelRequired: 19,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 45000 },
    { type: 'item', name: 'NSPU-M 3.5x dovetail night vision scope', amount: 1 },
    { type: 'item', name: 'Zenit Klesch-2P flashlight with laser', amount: 1 },
    { type: 'item', name: 'AKM PBS-1 7.62x39 sound suppressor', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 7800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.04' },
    { type: 'unlock', name: 'English herringbone Hideout floor style' }
  ],
    objectives: [
      {id: 'fold1', description:'locate and obtain the first folder located in the glassed in command room next to D2 power lever', type:'checkbox',},
      {id: 'fold2', description:'Loacate and obtain the second folder is in the room connected to the glassed in command room in the bottom of a shelf in the corner of the room', type: 'checkbox',},
      {id: 'fold3', description:'Locate and obtain the thrid folder in the wardrobe in the large central hallway', type: 'checkbox',}
    ],
  },
  {
    id:'special_comms',
    name: 'Special Comms',
    description:'Stash gear at different locations on woods and reserve',
    map: 'Multiple',
    requiredForKappa: false,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 32000 },
    { type: 'item', name: ' Lobaev Arms DVL-10 7.62x51 bolt-action sniper rifle (variant Urbana)', amount: 1 },
    { type: 'item', name: 'DVL-10 7.62x51 10-round magazine', amount: 3 },
    { type: 'item', name: '7.62x51mm BCP FMJ ammo pack (20 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 12800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'mil_cable1', description:'stash a military cable at the boulder next to the RUAF gate on woods', type: 'checkbox'},
      {id:'bulbex1', description:'stash a bulbex cable cutter at the boulder next to the RUAF gate on woods', type: 'checkbox'},
      {id:'transit_woods_comm', description:'transit from woods to reserve', type: 'checkbox'},
      {id:'mil_cable2', description:'Stash a military cable at the sandbags next to the LAV III aboce the storage warehouse on reserve', type: 'checkbox'},
      {id:'bulbex2', description:'Stash a bulbex cable cutter at the sandbags next to the LAV III aboce the storage warehbouse on reserve', type: 'checkbox'}
    ],
  },
  {
    id:'pun2',
    name: 'The Punisher-part 2',
    description:'Eliminate 12 scavs  with a suppressed weapon and hand over lower half masks',
    leadsTo: ['The Punisher-part 3', 'Easy Job-part 1'],
    map: 'Reserve',
    requiredForKappa: true,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'item', name: 'Kalashnikov AK-104 7.62x39 assault rifle', amount: 1 },
    { type: 'item', name: 'Military cable', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 13100 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
    objectives: [
      {id: 'pun2_scavs', description:'Eliminate 15 scavs using a suppressed weapon on reserve', type:'counter', required: 12},
      {id: 'pun2_masks', description:'Find and turn in 7 lower half masks', type: 'counter', required: 7, foundInRaid: true}
    ],
  },
   {
    id:'cpsu1',
    name: 'Glory to CPSU-part 1',
    description:'Locate the apartment ofprapors friend on streets of tarkov',
    leadsTo: ['Glory to CPSU - Part 2'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 15,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 42000 },
    { type: 'item', name: 'Bottle of Tarkovskaya vodka', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 7300 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'cpsu_apartment', description:'locate the apartment across the street from lexos across the hall of cell # 5', type: 'checkbox'},
      {id:'cpsu1_survive', description:'survive and extract from streets of tarkov', type: 'checkbox'}
    ],
  },
   {
    id:'pun3',
    name: 'The Punisher-part 3',
    description:'kills 25 scavs on customs with a aks-74u series rifle on customs',
    leadsTo: ['the Punisher part 4'],
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 19,
    rewards: [
    { type: 'money', name: 'Dollars', amount: 2500 },
    { type: 'item', name: ' Lobaev Arms DVL-10 7.62x51 bolt-action sniper rifle (variant Urbana)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 11700 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.04' },
    { type: 'rep', name: 'Skier Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Craft for 5.45x39mm PP gs at Workbench level 2' }
  ],
    objectives:[
      {id:'pun3_kill', description:'kill 25 scavs on customs while using a aks-74u series rifle', type: 'counter', required: 25}
    ],
  },
    {
    id:'easy1',
    name: 'Easy Job-part 1',
    description:'Locate and mark the helicopeter in the water treatment plant on lighthouse',
    leadsTo: ['Easy Job-part 2', 'Reconnaissance'],
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 18,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 120000 },
    { type: 'item', name: '6Sh118 raid backpack (EMR)', amount: 1 },
    { type: 'item', name: 'Kalashnikov AK-12 5.45x39 assault rifle', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 15000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'heli-locate', description:'locate the helicopter in the water treatment plant', type:'checkbox'},
      {id: 'heli-mark', description:'mark the helicopter in the water treatment plant', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'ms_marker', name: 'MS2000 Marker', quantity: 1}
    ],
  },
  
  {
    id:'pun4',
    name: 'The Punisher-part 4',
    description:'Eliminate scavs and pmc while wearing specific equipment',
    leadsTo: ['The Punisher-part 5', 'King of the Rooftops'],
    map: 'Lighthouse',
    requiredForKappa: true,
    requiredForNetworkProvider: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 100000 },
    { type: 'item', name: ' Colt M4A1 5.56x45 assault rifle (variant SOPMOD II)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 18000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
    objectives: [
      {id: 'pun4_scav', description:'Eliminate 10 scavs using a 12ga shotgun on Lighthouse', type:'counter', required: 10},
      {id: 'pun4_pmc', description:'Eliminate 10 PMC operatives while wearing a balaclava(any type) and scav vest on Lighthouse', type: 'counter', required: 10},
      {id: 'pun4_knife', description:'Find 5 bars-a-2607 95kh18 knifes(brown handle)', type: 'counter', required: 5, foundInRaid: true}
    ],
  },
  {
    id:'easy2',
    name: 'Easy job-part 2',
    description:'Eliminate 20 targets around the helicopter area at the water treatment plant on Lighthouse',
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 18,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 155000 },
    { type: 'xp', name: 'Experience', amount: 18000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of AK 7.62x39 Molot Arms 75-round drum magazine at Prapor LL3' },
    { type: 'unlock', name: 'Dirty Hideout ceiling style' }
  ],
    objectives:[
      {id:'easy2', description:'Eliminate any 20 targets around the helicopter area at the water treatment facility on Lighthouse', type: 'counter', required: 20}
    ],
  },
  {
    id:'cpsu2',
    name: 'Glory to CPSU-part 2',
    description:'Obtain any information about the fate of Prapors friend',
    leadsTo: ['Properties All Around'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'item', name: 'Tokarev SVT-40 7.62x54R rifle', amount: 1 },
    { type: 'item', name: 'SVT-40 7.62x54R 10-round magazine', amount: 2 },
    { type: 'item', name: '7.62x54mm R PS gzh ammo pack (20 pcs)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 10100 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.01' },
    { type: 'unlock', name: 'Barter for Tokarev AVT-40 7.62x54R automatic rifle at Prapor LL3' }
  ],
    objectives: [
      {id: 'cpsu2_locate', description:'locate the place of work of Prapors friend on Streets of Tarkov', type:'checkbox',},
      {id: 'cpsu2_find', description:'Obtain any information about the fate of Prapors friend', type: 'checkbox',},
      {id: 'cpsu2_survive', description:'Survive and extract from Streets of Tarkov', type:'checkbox',}
    ],
  },
  {
    id:'reconn',
    name: 'Reconnaissance',
    description:'Recon the rooftops at the water treatment facility on Lighthouse',
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 18,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 155000 },
    { type: 'item', name: 'NPP KlASS Korund-VM body armor (Black)', amount: 1 },
    { type: 'item', name: 'NPP KlASS Condor glasses', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 18000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Barter for Korund-VM ballistic plates (Front) at Prapor LL3' }
  ],
    objectives: [
      {id: 'recon_roof1', description:'recon the roof of the first water treatment plant on Lighthouse', type:'checkbox',},
      {id: 'recon_roof2', description:'recon the roof of the second water treatment plant on Lighthouse', type: 'checkbox',},
      {id: 'recon_roof3', description:'Recon the roof of the thrid water treatment plant on Lighthouse', type: 'checkbox',},
      {id: 'recon_survive', description:'Survive and extract from Lighthouse', type: 'checkbox',}
    ],
  },
  {
    id:'pun5',
    name: 'The Punisher-part 5',
    description:'find required FIR gear and eliminate PMC operatives while wearing specific gear',
    leadsTo: ['The Punisher-part 6', 'Our Own Land'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Dollars', amount: 5000 },
    { type: 'item', name: 'Pistol case', amount: 1 },
    { type: 'item', name: 'Documents case', amount: 1 },
    { type: 'item', name: '7.62x39mm BP gzh ammo pack (20 pcs)', amount: 6 },
    { type: 'xp', name: 'Experience', amount: 18200 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
    objectives: [
      {id: 'pun5_ak', description:'find any AK-74 assault rifle', type:'counter', required: 1, foundInRaid: true},
      {id: 'pun5_m4', description:'Find any M4AI assault rifle', type: 'counter', required: 1, foundInRaid: true},
      {id: 'pun5_pm', description:'Find any 2 Makarov PM pistols', type:'counter', required: 2, foundInRaid: true},
      {id: 'pun5_kill', description:'Eliminate 10 PMC operatives while wearing a PACA body armor and a 6B47 helmet', type:'counter', required: 10}
    ],
    requiredItems:[
      {id:'pun_paca', name: 'PACA Body Armor', quantity: 1},
      {id:'pun_helm', name: '6B47 Ratnik helmet', quantity: 1}
    ],
  },
  {
    id:'kings_roof',
    name: 'Kings of the Rooftops',
    description:'',
    leadsTo: ['Best Job in the World'],
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 77000 },
    { type: 'xp', name: 'Experience', amount: 14700 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'kings_roof_scav', description:'Eliminate 10 sniper scavs on the rooftops on Streets of Tarkov', type:'counter', required: 10},
      {id: 'kings_roof_survive', description:'Survive and extract from Streets of Tarkov', type: 'checkbox',}
    ],
  },
  {
    id:'properties_around',
    name: 'Properties All Around',
    description:'locate and obtain the real estate transctions document on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 80000 },
    { type: 'item', name: 'SR-2M Veresk 9x21 submachine gun', amount: 1 },
    { type: 'item', name: 'SR-2M 9x21 30-round magazine', amount: 3 },
    { type: 'item', name: '9x21mm PS gzh ammo pack (30 pcs)', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 11600 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'prop_building', description:'Locate the real estate fund on Streets of Tarkov', type:'checkbox',},
      {id: 'prop_document', description:'Locate and obtain the Tarkoc real estate transactions document', type: 'checkbox',},
      {id: 'prop_survive', description: 'Survive and extract from Streets of Tarkov', type: 'checkbox'}
    ],
    requiredItems:[
      {id:'estate_key', name: 'Real Estate Agency Office room key', quantity: 1}
    ],
  },

   {
    id:'pun6',
    name: 'The Punisher-part 6',
    description:'Eliminate 15 PMC operatives while using the SVD rifle(excluding Factory',
    leadsTo: ['capturing outposts', 'intimidator', 'Escort', 'The Choice', 'Gandarmerie-Mall Cop', 'Best Job in the World'],
    map: 'Any(except factory)',
    requiredForKappa: true,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 250000 },
    { type: 'item', name: 'Secure container Epsilon', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 19400 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.04' },
    { type: 'rep', name: 'Therapist Rep', amount: '+0.05' },
    { type: 'rep', name: 'Skier Rep', amount: '+0.01' },
    { type: 'unlock', name: 'Purchase of 7.62x54mm R PS gzh at Prapor LL4' }
  ],
    objectives: [
      {id: 'pun6_kill', description:'Eliminate 15 PMC operatives hile using the SVD rifle', type:'counter',required: 15},
      {id: 'pun6_usec', description:'find and hand over 7 USEC dogtags', type: 'counter',required: 7, foundInRaid: true},
      {id: 'pun6_bear', description:'find and hand over 7 Bear dogtags', type: 'counter',required: 7, foundInRaid: true},
    ],
    requiredItems:[
      {id:'pun_svd', name: 'SVD rifle', quantity: 1}
    ],
  },

  {
    id:'best_job',
    name: 'Best Job in the World',
    description:'Eliminate any 30 enemeies from over 100 meters away while using AK-74 series weapons',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 22,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 77000 },
    { type: 'xp', name: 'Experience', amount: 14700 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'job_kill', description:'Eleminate any 30 emies from over 100 meters away while using an AK-74 sereis weapon', type:'counter',required: 30}
    ],
    requiredItems:[
      {id:'job_ak74', name: 'AK-74(any)', quantity: 1}
    ],
  },
   {
    id:'cap_out',
    name: 'Capturing Outposts',
    description:'Eliminate PMC operatives at specific locations',
    map: 'Multiple',
    requiredForKappa: false,
    levelRequired: 42,
    rewards: [
    { type: 'item', name: 'Armband (RFARMY)', amount: 1 },
    { type: 'item', name: ' Armband (USEC)', amount: 1 },
    { type: 'item', name: 'Rys-T bulletproof helmet (Black)', amount: 1 },
    { type: 'item', name: 'Rys-T face shield', amount: 2 },
    { type: 'item', name: '6B43 Zabralo-Sh body armor (EMR)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 69999 },
    { type: 'unlock', name: 'Purchase of 9x39mm SP-6 gs at Prapor LL4' }
  ],
    objectives: [
      {id: 'customs_outpost', description:'Eliminate 8 PMC operatives at the Skellator on Customs', type:'counter',required:8},
      {id: 'woods_outpost', description:'Eliminate 8 PMC operatives at the med camp FOB on Woods', type: 'counter',required: 8},
      {id: 'shoreline_outpost', description:'Eliminate 8 PMC operatives at the health resort', type: 'counter',required: 8}
    ],
  },
   {
    id:'intem',
    name: 'Intimidator',
    description:'Eliminate 40 scavs with headshots',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 45,
    rewards: [
    { type: 'xp', name: 'Experience', amount: 84000 },
    { type: 'skill', name: 'Aim Drills Skill', amount: '+ 3 levels' },
    { type: 'skill', name: 'Endurance', amount: '+ 3 levels' },
    { type: 'unlock', name: 'Craft for 7.62x39mm BP gzh at Workbench level 3' }
  ],
    objectives: [
      {id: 'intem_kills', description:'Eliminate 40 scavs with headshots on any map', type:'counter',required: 40}
    ],
  },
   {
    id:'escort',
    name: 'Escort',
    description:'Eliminate PMC operatives on all maps',
    map: 'Multiple',
    requiredForKappa: false,
    levelRequired: 60,
      rewards: [
    { type: 'item', name: '6B43 Zabralo-Sh body armor (EMR)', amount: 1 },
    { type: 'item', name: 'Rys-T bulletproof helmet (Black)', amount: 1 },
    { type: 'item', name: 'Rys-T face shield', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 177000 },
    { type: 'skill', name: 'Melee', amount: '+ 5 Levels' },
    { type: 'skill', name: 'Endurance', amount: '+ 5 Levels' },
    { type: 'skill', name: 'Endurance', amount: '+ 5 Levels' },
    { type: 'unlock', name: 'Craft for Rys-T bulletproof helmet (Black) at Lavatory level 3' }
  ],
    objectives: [
      {id: 'escort_factory', description:'Eliminate 4 PMC operatives on daytime Factory', type:'counter',required: 4},
      {id: 'escort_customs', description:'Eliminate 4 PMC operatives on Customs', type: 'counter',required: 4},
       {id: 'escort_shoreline', description:'Eliminate 4 PMC operatives on Shoreline', type:'counter',required: 4},
      {id: 'escort_reserve', description:'Eliminate 4 PMC operatives on Reserve', type: 'counter',required: 4},
       {id: 'escort_woods', description:'Eliminate 4 PMC operatives on Woods', type:'counter',required: 4},
      {id: 'escort_interchange', description:'Eliminate 4 PMC operatives on on Interchange', type: 'counter',required: 4},
       {id: 'escort_lab', description:'Eliminate 4 PMC operatives in the Lab', type:'counter',required: 4},
      {id: 'escort_groundzero', description:'Eliminate 4 PMC operatives on Ground zero', type: 'counter',required: 4}
    ],
  },
   {
    id:'mall_cop',
    name: 'Gendarmerie-Mall Cop',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 120000 },
    { type: 'item', name: 'SR-2M Veresk 9x21 submachine gun', amount: 1 },
    { type: 'item', name: 'SR-2M 9x21 30-round magazine', amount: 4 },
    { type: 'item', name: '9x21mm PS gzh ammo pack (30 pcs)', amount: 5 },
    { type: 'xp', name: 'Experience', amount: 21500 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'barter for Serdyukov SR-1MP Gyurza 9x21 pistol (variant Tactical 2) at Prapor LL4' }
  ],
    description:'Eliminate any 15 targets at the Stylobate building while using pistols on Streets of Tarkov',
    leadsTo: ['Gendarmerie-Tickets Please'],
    objectives: [
      {id: 'mall_kill', description:'Eliminate any 15 targets in the mall while using pistols on Streets of Tarkov', type:'counter',required: 15}
    ],
  },
   {
    id:'gend_ticket',
    name: 'Gendarmerie-Tickets, Please',
    description:'Eliminate any 25 targets at the Rodina cineme while using SMGs on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 150000 },
    { type: 'item', name: 'Kalashnikov AK-103 7.62x39 assault rifle', amount: 2 },
    { type: 'item', name: 'AK-103 7.62x39 30-round magazine', amount: 4 },
    { type: 'item', name: '7.62x39mm PP gzh ammo pack (20 pcs)', amount: 9 },
    { type: 'xp', name: 'Experience', amount: 22600 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'unlock', name: 'Barter for SR-2M Veresk 9x21 submachine gun (variant FSB) at Prapor LL4' }
  ],
    leadsTo: ['Gendarmerie-District Patrol'],
    objectives: [
      {id: 'Tickets_kill', description:'Eliminate any 25 targets at the cineme while using SMGs on Streets of Tarkov', type:'counter',required: 25}
    ],
  },
   {
    id:'gendar_patrol',
    name: 'Gendarmerie-District Patrol',
    description:'Eliminate any 30 targets at the Cardinal apartment complex while using Assault rifles or Assault carbines on Streets of Tarkov',
    map: 'Streets of Tarkov',
    requiredForKappa: false,
    levelRequired: 21,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 184000 },
    { type: 'item', name: 'Bottle of Tarkovskaya vodka', amount: 16 },
    { type: 'item', name: 'BNTI Zhuk body armor (EMR)', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 25000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.04' },
    { type: 'unlock', name: 'Barter for Kalashnikov AK-12 5.45x39 assault rifle at Prapor LL4' },
    { type: 'unlock', name: 'Craft for 5.45x39mm BP gs at Workbench level 3' }
  ],
    objectives: [
      {id: 'gend_patrol_kill', description:'Eliminate any 30 targets at the cardinal apartment complex while using an assault rifle or assualt carbine on Streets of Tarkov', type:'counter',required: 30}
    ],
  },
   {
    id:'grenadier',
    name: 'Grenadier',
    description:'Eliminate 8 PMC operatives with grenades',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 75000 },
    { type: 'item', name: '12.7x55mm PS12B (10 pcs)', amount: 10 },
    { type: 'item', name: 'F-1 hand grenade', amount: 5 },
    { type: 'item', name: 'VOG-17 Khattabka improvised hand grenade', amount: 5 },
    { type: 'item', name: 'VOG-25 Khattabka improvised hand grenade', amount: 5 },
    { type: 'item', name: 'RGN hand grenade', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 18000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Craft for VOG-17 Khattabka improvised hand grenade at Workbench level 2' }
  ],
    leadsTo: ['Test Drive-part 1', 'The Art of Explosion'],
    objectives: [
      {id: 'gren_kill', description:'Eliminate 8 PMC operatives with grenades on any map', type:'counter',required: 8}
    ],
  },
   {
    id:'art_explosion',
    name: 'The Art of Explosion',
    description:'Eliminate any 35 targets while using grenades or grenade launchers',
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 33,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 92000 },
    { type: 'item', name: 'RShG-2 72.5mm rocket launcher', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 19200 },
    { type: 'unlock', name: 'purchase of RShG-2 72.5mm rocket launcher at Prapor LL4' }
  ],
    objectives: [
      {id: 'art_kill', description:'Eliminate any 35 targets while using grenades or grenade launchers', type:'counter',required: 35}
    ],
  },
   {
    id:'test_drive1',
    name: 'Test Drive- part 1',
    description:'Eliminate 5 PMC operatives from over 60 meters away while using specified gear',
    leadsTo: ['Test drive part 2'],
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 30,
    cooldown: '12 Hours',
    rewards: [
    { type: 'item', name: 'VSS Vintorez 9x39 special sniper rifle', amount: 1 },
    { type: 'item', name: '9x39mm PAB-9 gs ammo pack (20 pcs)', amount: 6 },
    { type: 'item', name: 'VSS/VAL 9x39 30-round magazine', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 18200 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Craft for 9x39mm PAB-9 gs at Workbench level 2' }
  ],
    objectives: [
      {id: 'test1_kill', description:'Eliminate 5 PMC operatives from over 60 meters away while using an M1A rifle with Hybrid 46 suppressor and Schmidt & bender PMII 1-8x24 scope', type:'counter',required:5,},
    ],
    requiredItems: [
      {id:'test1_scope', name: 'Schmidt & Bender PM II 1-8x24 scope', quantity: 1},
      {id:'test1_suppress', name: 'Hybrid 46 Suppressor', quantity: 1},
      {id:'tes1_gun', name: 'Springfield M1A', quantity: 1}
    ],
  },
  {
    id:'test2',
    name: 'Test Drive-part 2',
    description:'Eliminate 20 PMC operatives while using specified gear on Streets of Tarkov',
    leadsTo: ['Test Drive-part 3'],
    map: 'Streets of Tarkov',
    requiredForKappa: true,
    levelRequired: 30,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 300000 },
    { type: 'item', name: 'ASh-12 12.7x55 assault rifle', amount: 1 },
    { type: 'item', name: 'ASh-12 12.7x55 20-round magazine', amount: 3 },
    { type: 'item', name: '12.7x55mm PS12B (10 pcs)', amount: 6 },
    { type: 'item', name: 'Golden neck chain', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 28000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Purchase of 9x21mm BT gzh at Prapor LL3' }
  ],
    objectives: [
      {id: 'test2_kill', description:'Eliminate 20 PMC operatives while using an SR-2M with a suppressor on Streets of Tarkov', type:'counter',required: 20},
    ],
    requiredItems:[
      {id:'test2_gun', name: 'SR-2M', quantity: 1},
       {id:'test2_sight', name: 'KP-SR2 reflex sight', quantity: 1},
        {id:'test2_suppressor', name: 'SR-2M 9X21 SV-1381 sound suppressor', quantity: 1},
    ],
  },
  {
    id:'test3',
    name: 'Test Drive-part 3',
    description:'Eliminate 20 PMC operatives while using specified gear on Lighthouse',
    leadsTo: ['Test Drive-part 4'],
    map: 'Lighthouse',
    requiredForKappa: true,
    levelRequired: 30,
      rewards: [
    { type: 'money', name: 'Roubles', amount: 400000 },
    { type: 'item', name: 'RPK-16 5.45x39 light machine gun', amount: 1 },
    { type: 'item', name: 'AK-74 5.45x39 6L31 60-round magazine', amount: 4 },
    { type: 'item', name: '5.45x39mm 7N40 ammo pack (30 pcs)', amount: 8 },
    { type: 'xp', name: 'Experience', amount: 35300 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'test3_kill', description:'Eliminate 20 PMC operatives while using an AK-12 with a suppressor and a Valday PS-320 1/6x scope on Lighthouse', type:'counter',required: 20}
    ],
    requiredItems:[
      {id:'test3_gun', name: 'AK-12', quantity: 1},
      {id:'test3_suppressor', name: 'Any suppressor', quantity: 1},
      {id:'test3_sight', name: 'Valday ps-320 1/6x scope', quantity: 1}
    ],
  },
  {
    id:'test4',
    name: 'Test Drive- part 4',
    description:'Eliminate any 30 targets while using specified gear on Shoreline',
    leadsTo: ['Test Drive-part 5'],
    map: 'Shoreline',
    requiredForKappa: true,
    levelRequired: 40,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 460000 },
    { type: 'item', name: 'Tokarev AVT-40 7.62x54R automatic rifle', amount: 1 },
    { type: 'item', name: '7.62x54mm R SNB gzh ammo pack (20 pcs)', amount: 3 },
    { type: 'item', name: 'AVT-40 7.62x54R 15-round magazine', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 40000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'test4_kill', description:'Eliminate any 30 targets while using an RPDN with 1P78-1 scope on Shoreline', type:'counter',required: 30}
    ],
    requiredItems:[
      {id:'test4_gun', name: 'RPDN', quantity: 1},
      {id:'test4_sight', name: '1P78-1 scope', quantity: 1}
    ],
  },
  {
    id:'test5',
    name: 'Test Drive-part 5',
    description:'Eliminate any 50 targets on factory while using the specified gear',
    leadsTo: ['Test Drive-part 6'],
    map: 'Factory',
    requiredForKappa: true,
    levelRequired: 40,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 500000 },
    { type: 'item', name: 'AS VAL 9x39 special assault rifle', amount: 1 },
    { type: 'item', name: 'VSS/VAL 9x39 30-round magazine', amount: 3 },
    { type: 'item', name: '9x39mm BP ammo pack (20 pcs)', amount: 6 },
    { type: 'xp', name: 'Experience', amount: 50000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'test5_kill', description:'Eliminate any 50 targets while using an UZI PRO with 240mm barrel, SBR stock and BOSS Xe reflex sight on factory', type:'counter',required: 50}
    ],
    requiredItems:[
      {id:'test5_gun', name: 'UZI PRO', quantity: 1},
      {id:'test_barrel', name: 'UZI PRO 9X19 240mm barrel', quantity: 1},
      {id:'test5_stock', name: 'UZI PRO SBR buttstock', quantity: 1},
      {id:'test5_sight', name: 'Wilcox BOSS Xe reflex sight', quantity: 1}
    ],
  },
  {
    id:'test6',
    name: 'Test Drive-part 6',
    description:'Eliminate any 50 targets while using specified gear on customs',
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 40,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 65000 },
    { type: 'item', name: 'BNTI Zhuk body armor (EMR)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 65000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives: [
      {id: 'test6_kill', description:'Eliminate any 50 targets while using an Aklys Defense Velociraptor on customs', type:'counter',required: 50}
    ],
    requiredItems:[
      {id:'test6_gun', name: 'Aklys Defense Velociraptor', quantity: 1}
    ],
  },
   {
    id:'hobo',
    name: 'Polikhim Hobo',
    description:'Eliminate 25 scavs on Customs',
    map: 'Customs',
    requiredForKappa: true,
    levelRequired: 10,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 50000 },
    { type: 'item', name: 'F-1 hand grenade', amount: 3 },
    { type: 'item', name: 'RGD-5 hand grenade', amount: 3 },
    { type: 'item', name: 'Zarya stun grenade', amount: 1 },
    { type: 'xp', name: 'Experience', amount: 5900 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'rep', name: 'Jaeger Rep', amount: '+0.01' },
  ],
    leadsTo: ['Regulated Materials'],
    objectives: [
      {id: 'hobo_kills', description:'Eliminate 35 scavs on Customs', type:'counter',required: 25}
    ],
  },
  {
    id:'regu_materials',
    name: 'Regulated Materials',
    description:'Find and hand over the specified items',
    map: 'Any',
    requiredForKappa: true,
    levelRequired: 25,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 150000 },
    { type: 'item', name: '12.7x55mm PS12B (10 pcs)', amount: 10 },
    { type: 'xp', name: 'Experience', amount: 14800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
    { type: 'unlock', name: 'Barter for ASh-12 12.7x55 assault rifle at Prapor LL4' }
  ],
    objectives: [
      {id: 'regu_battery', description:'Find and hand over a 6-STEN-140-M tank battery', type:'counter', required: 1, foundInRaid: true},
      {id: 'regu_shell', description:'find and hand over 5 OFZ 30X165mm shells', type: 'counter', required: 5, foundInRaid: true}
    ],
  },
   {
    id:'big_customer',
    name: 'Big Customer',
    description:'Locate and mark the transport van with the chemicals on Customs',
    leadsTo: ['Trust Rrgain','Loyalty Buyout','Safe Corridor'],
    objectives: [
      {id: 'customer_transport', description:'locate the transport with the chemicals(warehouse with scav sniper) on Customs', type:'checkbox',}
    ],
    requiredItems:[
      {id:'big_marker', name: 'MS2000 marker', quantity: 1}
    ],
  },
  {
    id:'no_offence',
    name: 'No Offence',
    description:'hand over 10 M67 grenades',
    map: 'Customs',
    requiredForKappa:true,
    requiredForNetworkProvider: true,
    levelRequired: 11,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 200000},
    { type: 'item', name: '6B2 body armor (Flora)', amount: 1 },
    { type: 'item', name: 'Ammunition case', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 8100 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
  ],
    objectives:[
      {id:'offence_grenade', description:'Find and havdover 10 M67 grenades', type: 'counter',required: 10}
    ]
    //add a notification to alert the user that this is an optional quest that can be
    //turned into multiple different traders for different rewards and penalty quests
  },
  {
    id:'ship_dlay1',
    name: 'Shipping Delay-part 1',
    description:'hand over the packge from the depot on woods',
    map: 'Woods',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 57000 },
    { type: 'item', name: ' 7.62x54mm R PS gzh ammo pack (20 pcs)', amount: 3 },
    { type: 'item', name: '5.45x39mm 7N40 ammo pack (30 pcs)', amount: 3 },
    { type: 'xp', name: 'Experience', amount: 11000 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'ship1_pack', description:'hand over the package form the depot on woods. must take BTR to get there', type: 'checkbox'}
    ]
  },
  {
    id:'forge_friend',
    name: 'Forge a Friendship',
    description:'Locate and obtain Prapors cargo on Shoreline and then hand over the cargo',
    leadsTo: ['Half Empty'],
    map: 'Shoreline',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 95000 },
    { type: 'item', name: 'Kalashnikov AK-12 5.45x39 assault rifle', amount: 1 },
    { type: 'item', name: 'AK-74 5.45x39 6L26 45-round magazine', amount: 3 },
    { type: 'item', name: '5.45x39mm BP gs ammo pack (120 pcs)', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 18800 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id:'friend_task', description:'locate and obtain the cargo at the pier building on Shoreline and hand over to Prapor', type: 'checkbox'}
    ]
  },
  {
    id:'helf_empty',
    name: 'Half Empty',
    description:'Find and hand over specified items',
    leadsTo:['Stick in the Wheel'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 123000 },
    { type: 'item', name: 'Altyn bulletproof helmet (Olive Drab)', amount: 2 },
    { type: 'item', name: 'Altyn helmet face shield', amount: 2 },
    { type: 'xp', name: 'Experience', amount: 14900 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.02' },
  ],
    objectives:[
      {id: 'half_electronic', description:'Hand over 5 military electonic items(mil cable, iridium, COFDM, Mil circut board etc)', type:'counter', required: 5, foundInRaid: true},
      {id: 'half_pc', description:'Hand over 5 PC components', type: 'counter', required: 5, foundInRaid: true}
    ]
  },
  {
    id:'stick_wheel',
    name: 'Stick in the Wheel',
    description:'Eliminate any 30 targets on any location',
    leadsTo: ['Battery Change'],
    map: 'Any',
    requiredForKappa: false,
    levelRequired: 20,
    rewards: [
    { type: 'money', name: 'Roubles', amount: 112000 },
    { type: 'item', name: 'AS VAL 9x39 special assault rifle', amount: 1 },
    { type: 'item', name: 'VSS/VAL 9x39 6L25 20-round magazine (Plum)', amount: 3 },
    { type: 'item', name: '9x39mm PAB-9 gs ammo pack (20 pcs)', amount: 4 },
    { type: 'xp', name: 'Experience', amount: 21500 },
    { type: 'rep', name: 'Prapor Rep', amount: '+0.03' },
    { type: 'unlock', name: '' }
  ],
    objectives:[
      {id:'stick_kill', description:'Eliminate any 30 targets on any location', type: 'counter',required: 30}
    ]
  },
  // Add more quests as needed...
];
// ===== PraporQuestList Component =====
// Displays Prapor's quests with objectives, checkboxes, counters, FIR tags, required items, optional items (with checkboxes), and visual completion cues
// ===== PraporQuestList Component =====
function PraporQuestList() {
  // ===== State: Quest Completion =====
  const [completed, setCompleted] = React.useState<{ [id: string]: boolean }>(() => {
    const saved = localStorage.getItem('praporQuestProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Objective Progress =====
  const [objectiveProgress, setObjectiveProgress] = React.useState<{ [questId: string]: { [objId: string]: number | boolean } }>(() => {
    const saved = localStorage.getItem('praporObjectiveProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Optional Item Progress =====
  const [optionalItemProgress, setOptionalItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
    const saved = localStorage.getItem('praporOptionalItemProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Required Item Checkbox Progress =====
  const [requiredItemProgress, setRequiredItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
    const saved = localStorage.getItem('praporRequiredItemProgress');
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
      localStorage.setItem('praporRequiredItemProgress', JSON.stringify(updated));
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
      localStorage.setItem('praporObjectiveProgress', JSON.stringify(updated));
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
      localStorage.setItem('praporObjectiveProgress', JSON.stringify(updated));
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
      localStorage.setItem('praporOptionalItemProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Effect: Auto-complete Quest if All Objectives Complete =====
  React.useEffect(() => {
    praporQuests.forEach(quest => {
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
          localStorage.setItem('praporQuestProgress', JSON.stringify(updated));
          return updated;
        });
      } else if (!allComplete && completed[quest.id]) {
        setCompleted(prev => {
          const updated = { ...prev, [quest.id]: false };
          localStorage.setItem('praporQuestProgress', JSON.stringify(updated));
          return updated;
        });
      }
    });
    // eslint-disable-next-line
  }, [objectiveProgress]);

  // ===== RENDER: Quest List =====
  const uniqueMaps = [...new Set(praporQuests.map(q => q.map).filter(Boolean))];
  const filteredQuests = selectedMap
    ? praporQuests.filter(q => q.map === selectedMap)
    : praporQuests;

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
                        localStorage.setItem('praporQuestProgress', JSON.stringify(updated));
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
            {reward.amount !== undefined
              ? `${typeof reward.amount === "number" ? reward.amount.toLocaleString() : reward.amount} `
              : ''}
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
   export default PraporQuestList;