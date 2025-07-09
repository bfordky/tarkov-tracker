// ===== Type Definitions =====

export type RequiredItem = {
  id: string;
  name: string;
  quantity: number;
  foundInRaid?: boolean;
  showCheckbox?: boolean;
};

export type ItemSpawnLocation = {
  image: string;
  description: string;
};

export type Objective = {
  id: string;
  description: string;
  type: 'checkbox' | 'counter';
  required?: number;
  foundInRaid?: boolean;
};

export type QuestReward = {
  type: 'item' | 'money' | 'xp' | 'rep' | 'unlock' | 'skill'| string;
  name: string;
  amount?: number | string;
  icon?: React.ReactNode;
};
export type GunsmithSpec = {
  label: string; // e.g. "Durability"
  value: string; // e.g. "60+"
};

// ===== Hideout Zone Types =====
export type TraderRequirement = {
  trader: string;
  loyaltyLevel: number;
};

export type SkillRequirement = {
  skill: string;
  level: number;
};

export type HideoutZoneRequirement = {
  zone: string;
  level: number;
};

export type HideoutUpgrade = {
  level: number;
  name: string;
  description: string;
  requirements: {
    items?: RequiredItem[];
    money?: number;
    traders?: TraderRequirement[];
    skills?: SkillRequirement[];
    hideoutZones?: HideoutZoneRequirement[];
  };
  benefits: string[];
  craftTime?: string; // e.g. "2 hours"
  note?: string;
};

export type HideoutZone = {
  id: string;
  name: string;
  description: string;
  upgrades: HideoutUpgrade[];
  maxLevel: number;
  category?: string; // e.g., "Essential", "Production", "Comfort"
};

export type Quest = {
  id: string;
  name: string;
  description: string;
  leadsTo?: string[];
  objectives?: Objective[];
  requiredItems?: RequiredItem[];
  optionalItems?: RequiredItem[];
  levelRequired?: number;
  requiredForKappa?: boolean;
  requiredForNetworkProvider?: boolean;
  map?: string;
  transit?: string;
  cooldown?: string;
  rewards?: QuestReward[];
  note?: string;
  itemSpawnLocations?: ItemSpawnLocation[];
  requirements?: string[];
  gunsmithSpecs?: GunsmithSpec[];   // <--- add this
  requiredParts?: string[];         // <--- add this
};