import axios from "axios";

export const getLeagues = async () => {
  const config = {
    method: "get",
    url: "https://v3.football.api-sports.io/leagues",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFixtures = async () => {
  const today = new Date();
  const dateString = today.toISOString().split("T")[0];
  const config = {
    method: "get",
    url: "https://v3.football.api-sports.io/fixtures",
    params: {
      live: "94-95",
      //league: 94,
    },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getFixtureLineups = async (fixtureId) => {
  const config = {
    method: "get",
    url: "https://v3.football.api-sports.io/fixtures/lineups",
    params: { fixture: fixtureId },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
