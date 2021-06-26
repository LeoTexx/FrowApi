import SpotifyWebApi from "spotify-web-api-node";
import { Request, Response } from "express";

const spotifyApi = new SpotifyWebApi({
  clientId: "21525f50179f41b191563b0c8a4d75d2",
  clientSecret: "d7719a929b44482e83461680beca7208",
});

export default async function getSpotifyData(req: Request, res: Response) {
  await spotifyApi.clientCredentialsGrant().then(
    function (data) {
      spotifyApi.setAccessToken(data.body["access_token"]);
    },
    function (err) {
      console.log("Something went wrong when retrieving an access token", err);
    }
  );

  spotifyApi.getNewReleases({ limit: 50, offset: 0, country: "US" }).then(
    function (data) {
      var albuns = data.body.albums.items;
      var organizedAlbuns: object[] = [];

      albuns.map((item) => {
        organizedAlbuns.push({
          albumId: item.id,
          artwork: item.images[0],
          albumName: item.name,
          albumUrl: item.uri,
          details: item.artists,
        });
      });
      return res.send(organizedAlbuns);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
}
