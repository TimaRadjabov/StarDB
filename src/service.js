export default class StarApi {
  _apiBase = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  };
  getAllPeople = async () => {
    const res = await this.getResource(`${this._apiBase}/people/`);
    return res.results.map(this._transformPerson);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`${this._apiBase}/people/${id}`);
    return this._transformPerson(person);
  };
  getAllPlanets = async () => {
    const res = await this.getResource(`${this._apiBase}/planets/`);
    return res.results.map(this._transformPlanet);
  };
  getPlanet = async (id) => {
    const planet = await this.getResource(`${this._apiBase}/planets/${id}`);
    return this._transformPlanet(planet);
  };
  getAllStarships = async () => {
    const res = await this.getResource(`${this._apiBase}/starships/`);
    return res.results.map(this._transformPlanet);
  };
  getStarship = async (id) => {
    const ship = await this.getResource(`${this._apiBase}/starships/${id}`);
    return this._transformPlanet(ship);
  };
  getImgPerson = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }
  getImgPlanet = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }
  getImgStarship = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }



  _extractId(item) {
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
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
