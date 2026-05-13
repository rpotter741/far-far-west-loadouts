import { useState } from "react";
import { set } from "lodash";
import type { Player } from "../types/players";

const useLocalStorage = <T extends object>(
  key: string,
  initialValue: Player[],
): {
  players: Player[];
  setValue: (value: Player[], keypath?: string) => void;
  setKeypathValue: (value: unknown, index: number, keypath: string) => void;
  deletePlayer: (id: string) => void;
} => {
  const [players, setPlayers] = useState<Player[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : initialValue;
      if (!Array.isArray(parsed)) {
        console.log(parsed);
        return initialValue;
      }
      return parsed;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setKeypathValue = (value: unknown, index: number, keypath: string) => {
    const newValue = { ...(players as unknown as T[])[index] };
    set(newValue, keypath, value);
    const newStoredValue = [...(players as unknown as T[])];
    newStoredValue[index] = newValue;
    setPlayers(newStoredValue as Player[]);
    window.localStorage.setItem(key, JSON.stringify(newStoredValue));
  };

  const deletePlayer = (id: string) => {
    const filteredValue = players.filter((p: Player) => p.id !== id);
    setPlayers(filteredValue);
    window.localStorage.setItem(key, JSON.stringify(filteredValue));
  };

  const setValue = (value: Player[]) => {
    try {
      setPlayers(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return { players, setValue, setKeypathValue, deletePlayer };
};

export default useLocalStorage;
