import React, { useState, useEffect } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");

  const players_sorted =
    sort_by == "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (id == player.id) {
        return {
          ...player, //{ id: 1, name: "Violeta", score: 11 }
          score: player.score + 1, //{ id: 1, name: "Violeta", score: 12 }
        };
      } else {
        return player;
      }
    });
    set_players(new_players_array);
  };

  const reset_score = () => {
    const reset_scores = players.map((player) => {
      return {
        ...player,
        score: 0,
      };
    });
    set_players(reset_scores);
  };

  const randomize_score = () => {
    const randomized_players = players.map((player) => {
      const randomNumber = Math.floor(Math.random() * 101);
      return {
        ...player,
        score: randomNumber,
      };
    });
    set_players(randomized_players);
  };

  const addPlayer = (name) => {
    const new_player_added = [
      ...players,
      { id: players.length + 1, name, score: 0 },
    ];
    set_players(new_player_added);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        {" -- "}
        <button onClick={reset_score}>Reset score</button>
        {" -- "}
        <button onClick={randomize_score}>Randomize score</button>
      </p>
      <h3>Player's scores!</h3>
      <ul>
        {players_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
