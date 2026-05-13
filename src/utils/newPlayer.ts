import type { Player } from "../types/players";

export function newPlayer(): Player {
  return {
    id: crypto.randomUUID(),
    name: "New Player",
    level: 1,
    primary_weapon: "Quad Cylinder",
    primary_jokers: [],
    primary_weapons_unlocked: ["Quad Cylinder"],
    secondary_weapon: "Revolver",
    secondary_jokers: [],
    secondary_weapons_unlocked: ["Revolver"],
    grenade: "Ammo Pack",
    grenades_unlocked: ["Ammo Pack"],
    jokers: [],
    jokers_unlocked: [],
  };
}
