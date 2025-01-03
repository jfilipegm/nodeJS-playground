import express from "express";
import { getFixtures, getFixtureLineups } from "./service.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.set("view engine", "ejs");

app.get("/", async (request, response) => {
  try {
    const fixtureData = await getFixtures();
    const liveFixtures = fixtureData?.response || [];

    // Fetch lineups for all fixtures
    const fixtureLineups = await Promise.all(
      liveFixtures.map(async (fixture) => {
        const lineups = await getFixtureLineups(fixture.fixture.id);
        return {
          fixtureId: fixture.fixture.id,
          lineups: lineups.response || [],
        };
      })
    );

    // Log structure for debugging
    console.log({ liveFixtures, fixtureLineups });

    response.render("home", { liveFixtures, fixtureLineups });
  } catch (err) {
    console.error(err);
    response.status(500).send("Sorry, out of order");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000 @ http://localhost:3000");
});
