import SpaceTourismImage from "./assets/space-tourism.png";
import RestCountriesImage from "./assets/rest-countries.png";
import UrlShorteningImage from "./assets/url-shortening.png";
import MusicPlayerImage from "./assets/music-player.png";

export const projectsData = () => {
  return [
    {
      title: "Space Tourism Website",
      image: SpaceTourismImage,
      live: "https://space-tourism-website-react-seven.vercel.app/",
      github: "https://github.com/pritamtirpude/space-tourism-website-react",
    },
    {
      title: "World Countries App",
      image: RestCountriesImage,
      live: "https://rest-countries-react-beta.vercel.app/",
      github: "https://github.com/pritamtirpude/rest-countries-react",
    },
    {
      title: "Music Player App",
      image: MusicPlayerImage,
      live: "https://music-player-react-five.vercel.app/",
      github: "https://github.com/pritamtirpude/music-player-react",
    },
    {
      title: "URL Shortening App",
      image: UrlShorteningImage,
      live: "https://url-shortening-api-jet.vercel.app/",
      github: "https://github.com/pritamtirpude/URL-Shortening-API",
    },
  ];
};
