// ============================================================
// STATSLEUTH — DAILY CONFIG
// Update this file each day with the player + clues
// ============================================================

const STATSLEUTH_CONFIG = {

  mlb: {
    answer: "Josh Bell",
    clues: [
      { label: "Year", value: "2022" },
      { label: "Batting Average", value: ".266" },
      { label: "Position / Throws", value: "(1B/DH) / Right" },
      { label: "League", value: "National League" },
      { label: "Team", value: "San Diego Padres/Washington Nationals" }
    ],
    players: MLB_PLAYERS
  },

  nba: {
    answer: "Christian Wood",
    clues: [
      { label: "Year", value: "2022-2023" },
      { label: "Draft Year / Position", value: "2015 / PF" },
      { label: "Season PPG", value: "16.6" },
      { label: "Conference", value: "Western" },
      { label: "Team", value: "Dallas Mavericks" }
    ],
    players: NBA_PLAYERS
  },

  nfl: {
    answer: "Ezekiel Elliott",
    clues: [
      { label: "Year", value: "2022" },
      { label: "Draft Year / Position", value: "2016 / RB" },
      { label: "Rushing Yards", value: "876" },
      { label: "Conference", value: "NFC" },
      { label: "Team", value: "Dallas Cowboys" }
    ],
    players: NFL_PLAYERS
  }

};
