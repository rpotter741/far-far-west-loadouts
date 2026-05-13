import {
  Autocomplete,
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  grenades,
  primaryWeapons,
  secondaryWeapons,
  type Player,
} from "../types/players";
import { Settings } from "@mui/icons-material";
import { useState } from "react";
import PlayerSettings from "./PlayerSettings";

const PlayerColumn = ({
  player,
  setValue,
  index,
  last = true,
  deletePlayer,
}: {
  player: Player;
  setValue: (value: unknown, index: number, keypath: string) => void;
  index: number;
  last?: boolean;
  deletePlayer: (id: string) => void;
}) => {
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings)
    return (
      <PlayerSettings
        player={player}
        setShowSettings={setShowSettings}
        deletePlayer={deletePlayer}
        onChange={setValue}
        index={index}
        last={last}
      />
    );

  return (
    <Box
      sx={{
        maxWidth: 400,
        minWidth: 300,
        height: 750,
        gap: 1,
        display: "flex",
        flexDirection: "column",
        px: 2,
        borderLeft: "1px solid",
        borderRight: last ? "1px solid" : "none",
        borderColor: "rgba(200, 200, 200, 0.2)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          fullWidth
          label="Name"
          value={player.name}
          onChange={(e) => {
            setValue(e.target.value, index, `name`);
          }}
        />
        <IconButton
          onClick={() => {
            setShowSettings((prev) => !prev);
          }}
        >
          <Settings />
        </IconButton>
      </Box>
      <Autocomplete
        value={player.primary_weapon}
        options={primaryWeapons.filter((w) =>
          player.primary_weapons_unlocked?.includes(w),
        )}
        renderInput={(params) => (
          <TextField {...params} label="Primary Weapon" />
        )}
        onChange={(_, value) => {
          setValue(value, index, `primary_weapon`);
        }}
      />
      <Autocomplete
        value={player.secondary_weapon}
        options={secondaryWeapons.filter((w) =>
          player.secondary_weapons_unlocked?.includes(w),
        )}
        renderInput={(params) => (
          <TextField {...params} label="Secondary Weapon" />
        )}
        onChange={(_, value) => {
          setValue(value, index, `secondary_weapon`);
        }}
      />
      <Autocomplete
        value={player.grenade}
        options={grenades.filter((g) => player.grenades_unlocked?.includes(g))}
        renderInput={(params) => <TextField {...params} label="Grenade" />}
        onChange={(_, value) => {
          setValue(value, index, `grenade`);
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Jokers
      </Typography>
      <Divider />
    </Box>
  );
};

export default PlayerColumn;
