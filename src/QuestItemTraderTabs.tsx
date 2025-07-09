import React from 'react';
import { Box, Tabs, Tab, Typography, Checkbox, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { traderList } from './traders';

type QuestItem = {
  id: string;
  name: string;
  type: 'counter' | 'checkbox';
  required?: number;
  foundInRaid?: boolean;
  note?: string;
};

const praporQuestItems: QuestItem[] = [
  { id: 'ak60', name: 'AK-74 5.45x39 6L31 60-round magazine', type: 'counter', required: 3, foundInRaid: true, },
  { id: 'lower_mask', name: 'Lower half-mask', type: 'counter', required: 7, foundInRaid: true },
  { id: 'brown_bars', name: 'Bars A-2607 95Kh18 knife', type: 'counter',required: 5, foundInRaid: true },
  { id: 'ak74n', name: 'Kalashnikov AK-74N 5.45x39 assault rifle', type: 'checkbox', foundInRaid: true },
  { id: 'm4a1_stand', name: 'Colt M4A1 5.56x45 assault rifle', type: 'checkbox', foundInRaid: true },
  { id: 'pm_pistol', name: 'Makarov PM 9x18PM pistol', type: 'counter', required: 2, foundInRaid: true },
  { id: 'tank_batt', name: '6-STEN-140-M military battery', type: 'checkbox', foundInRaid: true },
  { id: 'tank_shell', name: 'OFZ 30x165mm shell', type: 'counter', required: 5, foundInRaid: true },
  {id: 'mp133', name: 'MP-133 12ga pump-action shotgun', type: 'counter', required: 2},
  {id: 'usec_tag', name: 'USEC Dogtag', type: 'counter', required: 7},
  {id: 'bear_tag', name: 'BEAR Dogtag', type: 'counter', required: 7},
  {id: 'm67_gre', name: 'M67 hand grenade', type: 'counter', required: 10},
];

const skierQuestItems: QuestItem[] = [
  { id: 'white_arm', name: 'BNTI Module-3M body armor', type: 'checkbox', foundInRaid: true },
  { id: 'toz106', name: 'TOZ-106 20ga bolt-action shotg', type: 'checkbox', foundInRaid: true },
  { id: 'flash_drive', name: 'Secure Flash drive', type: 'counter', required: 2, foundInRaid: true },
  { id: 'respirator', name: 'Respirator', type: 'counter', required: 4 , foundInRaid: true },
  { id: 'bloodset', name: 'Medical bloodset', type: 'counter', required: 3 , foundInRaid: true },
  { id: 'cult_knife', name: 'Cultist knife', type: 'counter', required: 12 , foundInRaid: true },
  { id: 'propane', name: 'Propane tank (5L)', type: 'checkbox', foundInRaid: true },
  { id: 'sv98', name: 'SV-98 7.62x54R bolt-action sniper rifle', type: 'checkbox' },
  { id: 'usec_tag', name: 'USEC Dogtag', type: 'counter', required: 7 },
  { id: 'gold_chain', name: 'Golden neck chain', type: 'counter', required: 9 },
  { id: 'roler_nonfir', name: 'Roler Submariner gold wrist watch', type: 'checkbox' },
  { id: 'rub', name: 'Roubles', type: 'counter', required: 1000000 },
  { id: 'euro', name: 'Euro', type: 'counter', required: 6000},

];

const therapistQuestItems: QuestItem[] = [
  { id: 'salewa', name: 'Salewa first aid kit', type: 'counter', required: 3, foundInRaid: true },
  { id: 'gas', name: 'Gas', type: 'counter', required: 3, foundInRaid: true },
  { id: 'morphine', name: 'Morphine Injector', type: 'counter', required: 4, foundInRaid: true },
  { id: 'little_beef', name: 'Can of beed stel (Small)', type: 'counter', required: 15 , foundInRaid: true },
  { id: 'spark_plug', name: 'Spark plug', type: 'counter', required: 8 , foundInRaid: true },
  { id: 'oscope', name: 'Ophthalmoscop', type: 'counter', required: 4, foundInRaid: true },
  { id: 'ledx', name: 'LEDX Skin Transilluminator', type: 'counter', required: 3, foundInRaid: true },
  { id: 'defib', name: 'Portable defibrillator', type: 'counter', required: 3, foundInRaid: true },
  { id: 'pile_meds', name: 'Pile of meds', type: 'counter', required: 20, foundInRaid: true },
  { id: 'ololo', name: 'Bottle of OLOLO Multivitamins', type: 'counter', required: 14, foundInRaid: true },
  { id: 'nacl', name: 'Bottle of saline solution', type: 'counter', required: 3, foundInRaid: true },
  { id: 'adren', name: 'Adrenaline injector', type: 'counter', required: 4, foundInRaid: true },
  { id: 'ahf1', name: 'AHF1-M stimulant injector', type: 'checkbox', foundInRaid: true, note: 'not needed if huntsman path: sadist is not turned in' },
  { id: '3btg', name: '3-(b-TG) stimulant injector', type: 'checkbox', foundInRaid: true, note: 'Not needed if huntsman path sadist is not turned in' },
  { id: 'labs_card', name: 'TerraGroup Labs Access keycard', type: 'counter', required: 10, foundInRaid: true, note: 'not needed if huntsman path sadist is not turned in' },
  { id: 'kite', name: 'Gunpowder "Kite"', type: 'counter', required: 3 },
  { id: 'usd', name: 'Dollars', type: 'counter', required: 500 },
  { id: 'rub', name: 'Roubles', type: 'counter', required: 400000 },
];

const peaceKeeperQuestItems: QuestItem[] = [
  { id: 'wd40_100', name: 'WD-40 (100ml)', type: 'checkbox', foundInRaid: true },
  { id: 'clin', name: 'Clin window cleaner', type: 'counter', required: 2, foundInRaid: true },
  { id: 'bleach', name: 'Ox bleach', type: 'counter', required: 2, foundInRaid: true },
  { id: 'morphine', name: 'Morphine Injector', type: 'counter', required: 4, foundInRaid: true },
  { id: 'alkali', name: 'Alkaline cleaner for heat exchangers', type: 'counter', required: 2, foundInRaid: true },
  { id: 'hose', name: 'Corrugated hose', type: 'counter', required: 4, foundInRaid: true },
  { id: 'propane', name: 'Propane tank (5L)', type: 'counter', required: 2, foundInRaid: true },
  { id: 'cofdm', name: 'Military COFDM Wireless Signal Transmitter', type: 'counter', required: 6, foundInRaid: true },
  { id: 'virtex', name: 'Virtex programmable processor', type: 'counter', required: 7, foundInRaid: true },
  { id: 'ahf11', name: 'AHF1-M stimulant injector', type: 'checkbox', foundInRaid: true },
  { id: '3_btg', name: '3-(b-TG) stimulant injector', type: 'checkbox', foundInRaid: true },
  { id: 'l1', name: 'L1 (Norepinephrine) injector', type: 'checkbox', foundInRaid: true },
  { id: 'p22', name: 'P22 (Product 22) stimulant injector', type: 'checkbox', foundInRaid: true },
  { id: 'meldonin', name: 'Meldonin injector', type: 'checkbox', foundInRaid: true },
  { id: 'mule', name: 'M.U.L.E. stimulant injector', type: 'checkbox', foundInRaid: true },
  { id: 'usec50', name: 'USEC Dogtags level 50+', type: 'counter', required: 20, foundInRaid: true },
  { id: 'bear50', name: 'BEAR Dogtags level 50+', type: 'counter', required: 20, foundInRaid: true },
  { id: 'bear', name: 'BEAR Dogtags any level', type: 'counter', required: 20, foundInRaid: true },
  { id: 'mre', name: 'MRE ration pack', type: 'counter', required: 5},
  { id: 'euro', name: 'Euros', type: 'counter', required: 50000 },
  { id: 'usd', name: 'Dollars', type: 'counter', required: 8000 },

];

const mechanicQuestItems: QuestItem[] = [
  { id: 'pow_cord', name: 'Power Cord', type: 'counter', required: 2, foundInRaid: true },
  { id: 'tplug', name: 'T-Shaped plug', type: 'counter', required: 4, foundInRaid: true },
  { id: 'pcb', name: 'Printed circuit board', type: 'counter', required: 5, foundInRaid: true},
  { id: 'gpu', name: 'Graphics card', type: 'counter', required: 3, foundInRaid: true },
  { id: 'cpu_fan', name: 'CPU fan', type: 'counter', required: 15, foundInRaid: true },
  { id: 'cpu', name: 'PC CPU', type: 'counter', required: 3, foundInRaid: true },
  { id: 'recbat', name: 'Rechargeable battery', type: 'counter', required: 3, foundInRaid: true },
  { id: 'gphone', name: 'Broken Gphone smartphone', type: 'counter', required: 7, foundInRaid: true },
  { id: 'malboro', name: 'Malboro Cigarettes', type: 'counter', required: 5, foundInRaid: true },
  { id: 'strike', name: 'Strike Cigarettes', type: 'counter', required: 5, foundInRaid: true },
  { id: 'wilston', name: 'Wilston Cigarettes', type: 'counter', required: 5, foundInRaid: true },
  { id: 'rfid', name: 'UHF RFID Reader', type: 'checkbox', foundInRaid: true },
  { id: 'vpx', name: 'VPX Flash Storage Module', type: 'checkbox', foundInRaid: true },
  { id: 'wires', name: 'Bundle of wires', type: 'counter', required: 5, foundInRaid: true },
  { id: 'caps', name: 'Capacitors', type: 'counter', required: 5, foundInRaid: true },
  { id: 'ecomp', name: 'Electronic components', type: 'counter', required: 4, foundInRaid: true },
  { id: 'cofdm', name: 'Military COFDM Wireless Signal Transmitter', type: 'counter', required: 5, foundInRaid: true },
  { id: 'gas', name: 'Gas Analyzer', type: 'counter', required: 4, foundInRaid: true },
  { id: 'sj1', name: 'SJ1 TGLabs combat stimulant injector', type: 'counter', required: 15, foundInRaid: true },
  { id: 'sj6', name: 'SJ6 TGLabs combat stimulant injecto', type: 'counter', required: 5, foundInRaid: true },
  { id: 'sj9', name: 'SJ9 TGLabs combat stimulant injector', type: 'checkbox', foundInRaid: true },
  { id: 'blue_tape', name: 'Insulating tape', type: 'checkbox', foundInRaid: true },
  { id: 'work_lcd', name: 'Working LCD', type: 'checkbox', foundInRaid: true },
  { id: 'toolset_nonfir', name: 'Toolset', type: 'counter', required: 5},
  { id: 'reap_nonfir', name: 'Trijicon REAP-IR thermal scope', type: 'counter', required: 2},

];

const ragmanQuestItems: QuestItem[] = [
  { id: 'russ_hat', name: 'Ushanka ear flap hat', type: 'counter', required: 2, foundInRaid: true },
  { id: 'cowboy', name: 'Kinda cowboy hat', type: 'counter', required: 2, foundInRaid: true },
  { id: 'shmaska', name: 'Ski hat with holes for eyes', type: 'checkbox', foundInRaid: true },
  { id: 'blackrock', name: 'Blackrock chest rig', type: 'counter', required: 2, foundInRaid: true },
  { id: 'wtrig', name: 'WARTECH TV-109 + TV-106 chest rig (A-TACS FG)', type: 'counter', required: 2, foundInRaid: true },
  { id: 'fcond', name: 'Fuel conditioner', type: 'counter', required: 4, foundInRaid: true },
  { id: 'aramid', name: 'Aramid fiber fabric', type: 'counter', required: 5, foundInRaid: true },
  { id: 'ripstop', name: 'Ripstop fabirc', type: 'counter', required: 5, foundInRaid: true },
  { id: 'cordura', name: 'Cordura polyamide fabric', type: 'counter', required: 5, foundInRaid: true },
  { id: 'fleece', name: 'Fleece fabric', type: 'counter', required: 10, foundInRaid: true },
  { id: 'paracord', name: 'Paracord', type: 'counter', required: 3, foundInRaid: true },
  { id: 'kek', name: 'KEKTAPE duct tape', type: 'counter', required: 5, foundInRaid: true},
  { id: 'vodka', name: 'Bottle of Tarkovskaya vodka', type: 'counter', required: 10, foundInRaid: true },
  { id: 'whiskey', name: 'Bottle of Dan Jackiel whiskey', type: 'counter', required: 10, foundInRaid: true },
  { id: 'pevko', name: 'Bottle of Pevko Light beer', type: 'counter', required: 20, foundInRaid: true },
  { id: '6b13', name: '6B13 Assault armor (Flora or EMR)', type: 'counter', required: 2, foundInRaid: true },
  { id: 'avete', name: 'Crye Precision AVS plate carrier (Tagilla Edition)', type: 'checkbox', foundInRaid: true },
  { id: 'lbcege', name: 'LBT-1961A Load Bearing Chest Rig (Goons Edition)', type: 'checkbox', foundInRaid: true },
  { id: 'sanitar_bag', name: 'Sanitars bag', type: 'checkbox', foundInRaid: true },
  { id: 'comm3', name: 'Mystery Ranch NICE COMM 3 BVS frame system (Coyote)', type: 'checkbox', foundInRaid: true },
  { id: 'cpcge', name: 'Crye Precision CPC plate carrier (Goons Edition)', type: 'checkbox', foundInRaid: true },
  { id: 'pilgrim', name: 'Pilgrim tourist backpack', type: 'checkbox', foundInRaid: true },
  { id: 'lion', name: 'Bronze lion figurine', type: 'counter', required: 2, foundInRaid: true },
  { id: 'vase', name: 'Antique vase', type: 'counter', required: 2, foundInRaid: true },
  { id: 'cat', name: 'Cat figurine', type: 'checkbox', foundInRaid: true },
  { id: 'horse', name: 'Horse figurine', type: 'counter', required: 2, foundInRaid: true },
  { id: 'teapot', name: 'Antique teapot', type: 'counter', required: 3, foundInRaid: true },
  { id: 'roler', name: 'Roler Submariner gold wrist watch', type: 'checkbox', foundInRaid: true },
  { id: 'egg', name: 'Golden egg', type: 'checkbox', foundInRaid: true},
  { id: 'axel', name: 'Axel parrot figurine', type: 'checkbox', foundInRaid: true },
  { id: 'raven', name: 'Raven figurine', type: 'counter', required: 2, foundInRaid: true },
  { id: 'superwater', name: 'Canister with purified water', type: 'counter', required: 3, foundInRaid: true },
  { id: 'gzhel', name: 'BNTI Gzhel-k body armor', type: 'counter', required: 2, },
  { id: 'comtac2', name: 'Peltor ComTac II headset', type: 'counter', required: 2 },
  { id: 'ratnik', name: '6B47 Ratnik-BSh helmet', type: 'counter', required: 2},
  { id: 'raybench', name: 'RayBench Hipster Reserve sunglasses', type: 'counter', required: 2 },
  { id: 'rglass', name: 'Round frame sunglasses', type: 'checkbox' },
  { id: 'ghost', name: 'Ghost balaclava', type: 'checkbox' },
  { id: 'greenshemagh', name: 'Shemagh (Green)', type: 'checkbox' },
  { id: 'bomber', name: 'Bomber beanie', type: 'checkbox' },
  { id: 'usd', name: 'Dollars', type: 'counter', required: 50000 },
  { id: 'bitcoin_unheard', name: 'Physical Bitcoin', type: 'counter', required:15, note: 'Not required for unheard edition owners' },



];

const jaegerQuestItems: QuestItem[] = [
  { id: 'iskra_fir', name: 'Iskra ration pack', type: 'counter', required: 3, foundInRaid: true },
  { id: 'noods', name: 'Pack of instant noodles', type: 'counter', required: 2, foundInRaid: true },
  { id: 'bigtush', name: 'Can of beef stew (large)', type: 'counter', required: 2, foundInRaid: true },
  { id: 'goldtt', name: 'TT-33 7.62x25 TT pistol (Golden)', type: 'checkbox', foundInRaid: true },
  { id: 'ssk', name: 'Shturmans stash key', type: 'checkbox', foundInRaid: true },
  { id: 'killa_mask', name: 'Maska-1SCh bulletproof helmet (Killa Edition)', type: 'checkbox', foundInRaid: true },
  { id: 'redcap', name: 'BOSS cap', type: 'checkbox', foundInRaid: true },
  { id: 'baton', name: 'PR-Taran police baton', type: 'checkbox', foundInRaid: true },
  { id: 'flash_drive', name: 'Secure Flash drive', type: 'counter', required: 3, foundInRaid: true },
  { id: 'labs', name: 'TerraGroup Labs access keycard', type: 'counter', required: 2, foundInRaid: true },
  { id: 'cms', name: 'CMS surgical kit', type: 'counter', required: 2, foundInRaid: true },
  { id: 'defib', name: 'Portable defibrillator', type: 'checkbox', foundInRaid: true },
  { id: 'sausage', name: 'Salty Dog beef sausage', type: 'checkbox', foundInRaid: true },
  { id: 'iskra_nonfir', name: 'Iskra ration pack', type: 'counter', required: 2 },
  { id: 'water', name: 'Bottle of water (0.6L)', type: 'counter', required: 2 },
  { id: 'cultist_nonfir', name: 'Cultist knife', type: 'checkbox' },

];

const fenceQuestItems: QuestItem[] = [
  { id: 'old_fire', name: 'Old firesteel', type: 'checkbox', foundInRaid: true },
  { id: 'axe', name: 'Antique axe', type: 'checkbox', foundInRaid: true },
  { id: 'antbook', name: 'Battered antique book', type: 'checkbox', foundInRaid: true },
  { id: 'fireklean', name: '#FireKlean gun lube', type: 'checkbox', foundInRaid: true },
  { id: 'badge', name: 'Silver badge', type: 'checkbox', foundInRaid: true },
  { id: 'beardoil', name: 'Deadlyslobs beard oil', type: 'checkbox', foundInRaid: true },
  { id: '1gphone', name: 'Golden iGPhone smartphone', type: 'checkbox', foundInRaid: true },
  { id: 'mayo', name: 'Jar of DevilDog mayo', type: 'checkbox', foundInRaid: true },
  { id: 'mustache', name: 'Fake mustache', type: 'checkbox', foundInRaid: true },
  { id: 'lupo', name: 'Can of Dr. Lupos coffee beans', type: 'checkbox', foundInRaid: true },
  { id: '42nd', name: '42 Signature Blend English Tea', type: 'checkbox', foundInRaid: true },
  { id: 'smoke', name: 'Smoke Balaclava', type: 'checkbox', foundInRaid: true },
  { id: 'ratcola', name: 'Can of RatCola soda', type: 'checkbox', foundInRaid: true },
  { id: 'egg', name: 'Golden egg', type: 'checkbox', foundInRaid: true },
  { id: 'axel', name: 'Axel parrot figurine', type: 'checkbox', foundInRaid: true },
  { id: 'baddie', name: 'baddies red beard', type: 'checkbox', foundInRaid: true },
  { id: 'bakezy', name: 'BakeEzy cook book', type: 'checkbox', foundInRaid: true },
  { id: 'danex', name: 'Missam forklift key', type: 'checkbox', foundInRaid: true },
  { id: 'tamatthi', name: 'Tamatthi kunai knife replica', type: 'checkbox', foundInRaid: true },
  { id: 'inseq', name: 'Inseq gas pipe wrench', type: 'checkbox', foundInRaid: true },
  { id: 'rooster', name: 'Rooster', type: 'checkbox', foundInRaid: true },
  { id: 'lootlord', name: 'Loot Lord plushie', type: 'checkbox', foundInRaid: true },
  { id: 'pestily', name: 'Pestily plague mask', type: 'checkbox', foundInRaid: true },
  { id: 'raven', name: 'Raven figurine', type: 'checkbox', foundInRaid: true },
  { id: 'sprats', name: 'Can of sprats', type: 'checkbox', foundInRaid: true },
  { id: 'kotton', name: 'Kotton beanie', type: 'checkbox', foundInRaid: true },
  { id: 'shroud', name: 'Shroud half-mask', type: 'checkbox', foundInRaid: true },
  { id: 'veritas', name: 'Veritas guitar pick', type: 'checkbox', foundInRaid: true },
  { id: 'evasion', name: 'Armband (Evasion)', type: 'checkbox', foundInRaid: true },
  { id: 'willerz', name: 'WZ Wallet', type: 'checkbox', foundInRaid: true },
  { id: 'ratpoison', name: 'LVNDMARKs rat poison', type: 'checkbox', foundInRaid: true },
  { id: 'bearbuddy', name: 'BEAR buddy plush toy', type: 'checkbox', foundInRaid: true },
  { id: 'gingy', name: 'Gingy keychain', type: 'checkbox', foundInRaid: true },
  { id: 'drd', name: 'DRD body armor', type: 'checkbox', foundInRaid: true },
  { id: 'glorius', name: 'Glorious E lightweight armored mask', type: 'checkbox', foundInRaid: true },
  { id: 'johnb', name: 'JohnB Liquid DNB glasses', type: 'checkbox', foundInRaid: true },
  { id: 'vhs', name: 'Video cassette with the cybork killer movie', type: 'checkbox', foundInRaid: true },
  { id: 'viibiin', name: 'Viibiin sneaker', type: 'checkbox', foundInRaid: true },
  { id: 'rhzhy', name: 'Ryzhy figurine', type: 'checkbox', foundInRaid: true },
  { id: 'scavfig', name: 'Scav figurine', type: 'checkbox', foundInRaid: true },
  { id: 'tagilla', name: 'Tagilla figurine', type: 'checkbox', foundInRaid: true },
  { id: 'cultistfig', name: 'Cultist figurine', type: 'checkbox', foundInRaid: true },
  { id: 'den', name: 'Den figurine', type: 'checkbox', foundInRaid: true },
  { id: 'dedmoroz', name: 'Ded Moroz figurine', type: 'checkbox', foundInRaid: true },
  { id: 'reshala', name: 'Reshala Figurine', type: 'checkbox', foundInRaid: true },
  { id: 'killafig', name: 'Killa firurine', type: 'checkbox', foundInRaid: true },
  { id: 'mutkevish', name: 'Politician Mutkevich figurine', type: 'checkbox', foundInRaid: true },
  { id: 'custist_nonfir', name: 'Cultist knife', type: 'counter', required: 4, },

];
const lightkeeperQuestItems: QuestItem[] = [
  { id: 'blue_fold', name: 'Blue Folder', type: 'counter', required: 2},
  { id: 'sausage_nonfir', name: 'Salty Dog beef sausage', type: 'checkbox' },
  { id: 'moonshine_nonfir', name: 'Bottle of Fierce Hatchling moonshine', type: 'checkbox' },
  { id: 'tsm338', name: 'AI .338 LM Tactical Sound Moderator', type: 'checkbox' },
  { id: 'reapir_nonfir', name: 'Trijicon REAP-IR thermal scope', type: 'checkbox' },
  { id: 'tp_nonfir', name: 'Toilet paper', type: 'checkbox' },
];

const refQuestItems: QuestItem[] = [
    { id: 'vodka', name: 'Bottle of Tarkovskaya vodka', type: 'counter', required: 2, foundInRaid: true },
    { id: 'pevko', name: 'Bottle of Pevko Light beer', type: 'counter', required: 7, foundInRaid: true },
    { id: 'alyonka', name: 'Alyonka chocolate bar', type: 'counter', required: 2, foundInRaid: true },
    { id: 'tarker', name: 'Pack of Tarker dried meat', type: 'counter', required: 5, foundInRaid: true },
    { id: '6b33 front', name: '6B33 ballistic plate (Front)', type: 'checkbox', foundInRaid: true },
    { id: 'spartn_omega', name: 'SPRTN Omega ballistic plate', type: 'checkbox', foundInRaid: true },
    { id: 'kournefront', name: 'Korund-VM ballistic plates (Front)', type: 'checkbox', foundInRaid: true},
    { id: 'tp-200', name: '', type: 'counter', required: 6 },

]

const traderQuestItemsMap: { [key: string]: QuestItem[] } = {
  Prapor: praporQuestItems,
  Skier: skierQuestItems,
  Therapist: therapistQuestItems,
  Peacekeeper: peaceKeeperQuestItems,
  Mechanic: mechanicQuestItems,
  Ragman: ragmanQuestItems,
  Jaeger: jaegerQuestItems,
  Fence: fenceQuestItems,
  Lightkeeper: lightkeeperQuestItems,
  Ref: refQuestItems,
};

const tabList = ['Total Items Needed', ...traderList];

// Aggregation function for total items needed
function getTotalQuestItems(traderQuestItemsMap: { [key: string]: QuestItem[] }) {
  const totals: { [id: string]: QuestItem & { totalRequired: number } } = {};

  Object.values(traderQuestItemsMap).forEach(itemList => {
    itemList.forEach(item => {
      if (item && item.id) {
        if (!totals[item.id]) {
          totals[item.id] = { ...item, totalRequired: 0 };
        }
        if (item.type === 'counter') {
          totals[item.id].totalRequired += item.required ?? 1;
        } else {
          totals[item.id].totalRequired += 1;
        }
        if (item.foundInRaid) {
          totals[item.id].foundInRaid = true;
        }
        // --- Merge notes safely ---
        if (item.note) {
          const currentNote = totals[item.id].note ?? '';
          if (!currentNote) {
            totals[item.id].note = item.note;
          } else if (item.note && !currentNote.includes(item.note)) {
            totals[item.id].note = currentNote + ' / ' + item.note;
          }
        }
      }
    });
  });

  return Object.values(totals);
}


function QuestItemTraderTabs() {
  const [traderTab, setTraderTab] = React.useState(0);
  const [itemProgress, setItemProgress] = React.useState<{ [itemId: string]: number | boolean }>({});
  const [totalItemProgress, setTotalItemProgress] = React.useState<{ [itemId: string]: number | boolean }>({});

  const handleTraderChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTraderTab(newValue);
  };

  // For per-trader tabs
  const handleItemCheck = (itemId: string) => {
    setItemProgress(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  const handleItemCounter = (itemId: string, value: number) => {
    setItemProgress(prev => ({
      ...prev,
      [itemId]: value,
    }));
  };

  // For total tab
  const handleTotalItemCheck = (itemId: string) => {
    setTotalItemProgress(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  const handleTotalItemCounter = (itemId: string, value: number) => {
    setTotalItemProgress(prev => ({
      ...prev,
      [itemId]: value,
    }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={traderTab}
        onChange={handleTraderChange}
        aria-label="quest item trader tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {tabList.map((tabName, idx) => (
          <Tab key={tabName} label={tabName} id={`questitem-trader-tab-${idx}`} aria-controls={`questitem-trader-tabpanel-${idx}`} />
        ))}
      </Tabs>
      {tabList.map((tabName, idx) => (
        <div
          key={tabName}
          role="tabpanel"
          hidden={traderTab !== idx}
          id={`questitem-trader-tabpanel-${idx}`}
          aria-labelledby={`questitem-trader-tab-${idx}`}
        >
          {traderTab === idx && (
            <Box sx={{ p: 2 }}>
              {idx === 0 ? (
                // Total Items Needed tab
                getTotalQuestItems(traderQuestItemsMap).map(item => {
                    if (!item) return null;
                  const isCounter = item.type === 'counter';
                  const progress = Number(totalItemProgress[item.id] || 0);
                  const requiredAmount = isCounter ? Number(item.totalRequired) : 1;
                  const isChecked = isCounter
                    ? progress >= requiredAmount
                    : !!totalItemProgress[item.id];

                  return (
                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Checkbox
                        checked={isChecked}
                        disabled={isCounter}
                        onChange={
                          isCounter
                            ? undefined
                            : () => handleTotalItemCheck(item.id)
                        }
                        sx={{
                          color: isChecked ? 'success.main' : undefined,
                          '&.Mui-checked': {
                            color: 'success.main',
                          },
                        }}
                      />
                      {isCounter && (
                        <>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleTotalItemCounter(item.id, Math.max(0, progress - 1))
                            }
                            disabled={progress <= 0}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <TextField
                            type="number"
                            size="small"
                            value={progress}
                            onChange={e =>
                              handleTotalItemCounter(item.id, Math.max(0, Number(e.target.value)))
                            }
                            inputProps={{
                              min: 0,
                              max: requiredAmount || 99,
                              style: { width: 40, textAlign: 'center' },
                            }}
                            sx={{ mx: 1, width: 60 }}
                          />
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleTotalItemCounter(
                                item.id,
                                Math.min(requiredAmount || 99, progress + 1)
                              )
                            }
                            disabled={progress >= (requiredAmount || 99)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          ml: 1,
                          color: isChecked ? 'text.disabled' : 'text.primary',
                          textDecoration: isChecked ? 'line-through' : 'none',
                        }}
                      >
                        {item.name}
                        {isCounter && ` (${progress}/${requiredAmount})`}
                        {item.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                        {item.note && (
                          <Box component="span" sx={{ color: 'warning.main', fontStyle: 'italic', ml: 2 }}>
                            {item.note}
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  );
                })
              ) : (
                traderQuestItemsMap[tabName as keyof typeof traderQuestItemsMap] &&
                traderQuestItemsMap[tabName as keyof typeof traderQuestItemsMap].length > 0 ? (
                  traderQuestItemsMap[tabName as keyof typeof traderQuestItemsMap].map(item => {
                    const isCounter = item.type === 'counter';
                    const progress = Number(itemProgress[item.id] || 0);
                    const requiredAmount = isCounter ? Number(item.required) : 1;
                    const isChecked = isCounter
                      ? progress >= requiredAmount
                      : !!itemProgress[item.id];

                    return (
                      <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Checkbox
                          checked={isChecked}
                          disabled={isCounter}
                          onChange={
                            isCounter
                              ? undefined
                              : () => handleItemCheck(item.id)
                          }
                          sx={{
                            color: isChecked ? 'success.main' : undefined,
                            '&.Mui-checked': {
                              color: 'success.main',
                            },
                          }}
                        />
                        {isCounter && (
                          <>
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleItemCounter(item.id, Math.max(0, progress - 1))
                              }
                              disabled={progress <= 0}
                            >
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <TextField
                              type="number"
                              size="small"
                              value={progress}
                              onChange={e =>
                                handleItemCounter(item.id, Math.max(0, Number(e.target.value)))
                              }
                              inputProps={{
                                min: 0,
                                max: requiredAmount || 99,
                                style: { width: 40, textAlign: 'center' },
                              }}
                              sx={{ mx: 1, width: 60 }}
                            />
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleItemCounter(
                                  item.id,
                                  Math.min(requiredAmount || 99, progress + 1)
                                )
                              }
                              disabled={progress >= (requiredAmount || 99)}
                            >
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </>
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            ml: 1,
                            color: isChecked ? 'text.disabled' : 'text.primary',
                            textDecoration: isChecked ? 'line-through' : 'none',
                          }}
                        >
                          {item.name}
                          {isCounter && ` (${progress}/${requiredAmount})`}
                          {item.foundInRaid && (
                            <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                              [FIR]
                            </Box>
                          )}
                          {item.note && (
                            <Box component="span" sx={{ color: 'warning.main', fontStyle: 'italic', ml: 2 }}>
                              {item.note}
                            </Box>
                          )}
                        </Typography>
                      </Box>
                    );
                  })
                ) : (
                  <Typography>No quest items listed yet for {tabName}.</Typography>
                )
              )}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
}
export default QuestItemTraderTabs;


