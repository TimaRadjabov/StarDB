export default class StarApi {
  _apiBase = "https://swapi.dev/api";

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  };
  getAllPeople = async () => {
    const res = await this.getResource(`${this._apiBase}/people/`);
    return res.results;
  };
  getPerson = (id) => {
    return this.getResource(`${this._apiBase}/people/${id}`);
  };
  getAllPlanets = async () => {
    const res = await this.getResource(`${this._apiBase}/planets/`);
    return res.results.map(this._transformPlanet);
  };
  getPlanet = async(id) => {
    const planet = await this.getResource(`${this._apiBase}/planets/${id}`);
    return this._transformPlanet(planet)
  };
  getAllStarships = async () => {
    const res = await this.getResource(`${this._apiBase}/starships/`);
    return res.results;
  };
  getStarship = (id) => {
    return this.getResource(`${this._apiBase}/starships/${id}`);
  };
  _extractId(item){
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotation: planet.rotation_period,
      diameter: planet.diameter,
    };
  };
}
