import { Box, Button, Container, Typography } from "@mui/material";
import type { Player } from "./types/players";
import { newPlayer } from "./utils/newPlayer";
import PlayerColumn from "./components/PlayerColumn";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { players, setValue, setKeypathValue, deletePlayer } = useLocalStorage<
    Player[]
  >("players", []);

  function onRandomize() {
    const newPlayers = [...(players ?? [])];
    for (let i = 0; i < players.length; i++) {
      const randomPrimaryWeapon =
        players[i].primary_weapons_unlocked?.[
          Math.floor(
            Math.random() * (players[i].primary_weapons_unlocked?.length ?? 1),
          )
        ] ?? players[i].primary_weapon;
      const randomSecondaryWeapon =
        players[i].secondary_weapons_unlocked?.[
          Math.floor(
            Math.random() *
              (players[i].secondary_weapons_unlocked?.length ?? 1),
          )
        ] ?? players[i].secondary_weapon;
      const randomGrenade =
        players[i].grenades_unlocked?.[
          Math.floor(
            Math.random() * (players[i].grenades_unlocked?.length ?? 1),
          )
        ] ?? players[i].grenade;

      newPlayers[i].primary_weapon = randomPrimaryWeapon;
      newPlayers[i].secondary_weapon = randomSecondaryWeapon;
      newPlayers[i].grenade = randomGrenade;
      setValue(newPlayers);
    }
  }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Far Far West Loadouts
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${(players ?? []).length}, minmax(0px, 400px))`,
            gap: 2,
            mx: "auto",
          }}
        >
          {(players ?? []).map((player: Player, index: number) => (
            <PlayerColumn
              key={player.id}
              player={player}
              setValue={setKeypathValue}
              index={index}
              deletePlayer={deletePlayer}
              last={index === (players ?? []).length - 1}
            />
          ))}
        </Box>
        {(players ?? []).length < 4 && (
          <Button
            variant="contained"
            onClick={() => setValue([...(players ?? []), newPlayer()])}
          >
            Add Player
          </Button>
        )}
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onRandomize}
        >
          Randomize Loadouts
        </Button>
      </Box>
    </Container>
  );
}

export default App;
