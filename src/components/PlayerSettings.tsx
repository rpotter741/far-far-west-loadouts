import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  grenades,
  primaryWeapons,
  secondaryWeapons,
  type Player,
} from "../types/players";

const PlayerSettings = ({
  player,
  index,
  setShowSettings,
  deletePlayer,
  onChange,
  last = true,
}: {
  player: Player;
  index: number;
  setShowSettings: (show: boolean) => void;
  deletePlayer: (id: string) => void;
  onChange: (value: unknown, index: number, keypath: string) => void;
  last?: boolean;
}) => {
  //
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 750,
        px: 2,
        borderLeft: "1px solid",
        borderRight: last ? "1px solid" : "none",
        borderColor: "rgba(200, 200, 200, 0.2)",
      }}
    >
      <IconButton
        onClick={() => setShowSettings(false)}
        sx={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
      >
        <ArrowBack />
      </IconButton>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "background.default",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mt: 1.5 }}
        >
          Progress
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </Box>
      <Box sx={{ maxHeight: "650px", overflowY: "scroll" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Primary Weapons
        </Typography>
        {primaryWeapons.map((w) => {
          //
          return (
            <Box
              key={w + player.id}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Checkbox
                checked={player.primary_weapons_unlocked.includes(w)}
                onChange={(e) => {
                  const newUnlocked = e.target.checked
                    ? [...player.primary_weapons_unlocked, w]
                    : player.primary_weapons_unlocked.filter((uw) => uw !== w);
                  onChange(newUnlocked, index, `primary_weapons_unlocked`);
                }}
              />
              <Typography variant="body1">{w}</Typography>
            </Box>
          );
        })}
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
          Secondary Weapons
        </Typography>
        {secondaryWeapons.map((w) => {
          //
          return (
            <Box
              key={w + player.id}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Checkbox
                checked={player.secondary_weapons_unlocked.includes(w)}
                onChange={(e) => {
                  const newUnlocked = e.target.checked
                    ? [...player.secondary_weapons_unlocked, w]
                    : player.secondary_weapons_unlocked.filter(
                        (uw) => uw !== w,
                      );
                  onChange(newUnlocked, index, `secondary_weapons_unlocked`);
                }}
              />
              <Typography variant="body1">{w}</Typography>
            </Box>
          );
        })}
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
          Grenades
        </Typography>
        {grenades.map((w) => {
          //
          return (
            <Box
              key={w + player.id}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Checkbox
                checked={player.grenades_unlocked.includes(w)}
                onChange={(e) => {
                  const newUnlocked = e.target.checked
                    ? [...player.grenades_unlocked, w]
                    : player.grenades_unlocked.filter((uw) => uw !== w);
                  onChange(newUnlocked, index, `grenades_unlocked`);
                }}
              />
              <Typography variant="body1">{w}</Typography>
            </Box>
          );
        })}
      </Box>

      <Button
        variant="contained"
        color="error"
        onClick={() => deletePlayer(player.id)}
      >
        Delete Player
      </Button>
    </Box>
  );
};

export default PlayerSettings;
