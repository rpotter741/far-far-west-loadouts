export type PrimaryWeapon =
  | "Quad Cylinder"
  | "Shotgun"
  | "Minigun"
  | "Long Ranger"
  | "Leveredge";

export const primaryWeapons: PrimaryWeapon[] = [
  "Quad Cylinder",
  "Shotgun",
  "Minigun",
  "Long Ranger",
  "Leveredge",
];

export type SecondaryWeapon =
  | "Boomerang"
  | "Bow"
  | "Dual Revolvers"
  | "Revolver"
  | "Sheriff Star";

export const secondaryWeapons: SecondaryWeapon[] = [
  "Boomerang",
  "Bow",
  "Dual Revolvers",
  "Revolver",
  "Sheriff Star",
];

export type Grenade =
  | "Ammo Pack"
  | "Bottle Crate"
  | "Healing Area"
  | "Impulse Grenade";

export const grenades: Grenade[] = [
  "Ammo Pack",
  "Bottle Crate",
  "Healing Area",
  "Impulse Grenade",
];

export type NormalJoker =
  | "Chickshot"
  | "Cushion Boots"
  | "Deadly Strong"
  | "Gold Tooth"
  | "Heavy Drinker"
  | "Helping Hand"
  | "Last Dance"
  | "Party Shot"
  | "Pigshot"
  | "Relentless"
  | "Rubber Duck"
  | "Shine Bright"
  | "Swift Shot";

export const NormalJokers: Joker[] = [
  {
    name: "Chickshot",
    rarity: "Normal",
    hero: false,
    max: 1,
    cost: 100,
    owned: 0,
    unlocked: false,
  },
  {
    name: "Cushion Boots",
    rarity: "Normal",
    hero: false,
    max: 1,
    cost: 100,
    owned: 0,
    unlocked: false,
  },
  {
    name: "Deadly Strong",
    rarity: "Normal",
    hero: false,
    max: 1,
    cost: 100,
    owned: 0,
    unlocked: false,
  },
];

export type FineJoker =
  | "Anti-Gravity Falls"
  | "Bell Shot"
  | "Bouncing Ball"
  | "Cactus Day"
  | "Care Package"
  | "Chad"
  | "Clutch"
  | "Fist Fight"
  | "Gold Prospector"
  | "Pick Pick"
  | "Rage"
  | "Rampage"
  | "Run & Gun"
  | "Run & Reload"
  | "Shroom Grave"
  | "Soul Reaper"
  | "Soul Siphon"
  | "Speedy Gunzales";

export type PrimeJoker =
  | "Ammo Supply"
  | "Cheapskate"
  | "Chonky"
  | "Destroyer"
  | "Disgrace"
  | "Explosive Rounds (Pyro)"
  | "Explosive Rounds (Acid)"
  | "Explosive Rounds (Elec)"
  | "Healthy Boi"
  | "Lucky Strike"
  | "Magic Friendship"
  | "Reload Mastery"
  | "Soul Eater"
  | "Stonks"
  | "Weak Link"
  | "Weakspot Refund";

export type MythicJoker =
  | "Acid Mastery"
  | "Battlemage"
  | "Cactus Mastery"
  | "Consumer"
  | "Elec Mastery"
  | "Extra Jump"
  | "Headbang"
  | "Hit Me"
  | "Hoarder"
  | "Joker Dealer"
  | "Lazy"
  | "Life Pact"
  | "Medicard"
  | "Moon Gravity"
  | "Pyro Mastery"
  | "Second Wind"
  | "Voodoo Mastery"
  | "West Wizard";

export type LegendaryJoker =
  | "Camper"
  | "Cantrip One-Trick"
  | "Dwarf"
  | "Extra Dash"
  | "Giant"
  | "Glass Cannon"
  | "Machine Gun"
  | "Ricochet"
  | "Speedster"
  | "Toolbox";

export type UniqueJoker =
  | "Aiming Burst"
  | "Chonky Throw"
  | "Eagle Lever"
  | "Eco Trick"
  | "Elemental Spin"
  | "Fanning Ace"
  | "Focus Shot"
  | "Frenzy Spin"
  | "Homing Burst"
  | "Jump Star"
  | "Lingering Throw"
  | "Mark Ace"
  | "Mindshot"
  | "Overblast"
  | "Overdraw"
  | "Rush Blast"
  | "Scavenger Star"
  | "StackedLever"
  | "Swamp Trick"
  | "Ultra Draw";

export interface Joker {
  name:
    | NormalJoker
    | FineJoker
    | PrimeJoker
    | MythicJoker
    | LegendaryJoker
    | UniqueJoker;
  rarity: "Normal" | "Fine" | "Prime" | "Mythic" | "Legendary" | "Unique";
  hero: boolean;
  weapon?: PrimaryWeapon | SecondaryWeapon;
  max: number;
  cost: 100 | 200 | 400 | 800 | 1600;
  owned: number;
  unlocked: boolean;
}

export interface Player {
  id: string;
  name: string;
  level: number;
  primary_weapon: PrimaryWeapon;
  primary_jokers: Joker[];
  primary_weapons_unlocked: PrimaryWeapon[];
  secondary_weapon: SecondaryWeapon;
  secondary_jokers: Joker[];
  secondary_weapons_unlocked: SecondaryWeapon[];
  grenade: Grenade;
  grenades_unlocked: Grenade[];
  jokers: Joker[];
  jokers_unlocked: Joker[];
}
