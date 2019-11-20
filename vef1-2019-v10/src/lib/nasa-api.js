import { randomNumber } from "./helpers";

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'NdM9Rze3zqwIMk1Xq8Gn2XJe0pKsQrldMO8dTwSD';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';

//NdM9Rze3zqwIMk1Xq8Gn2XJe0pKsQrldMO8dTwSD



/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {

  const start = new Date(1995, 6, 16);
  const end = new Date();
  const randomDate = new Date(start.getTime() + randomNumber(start.getTime(), end.getTime()));
  randomDate.toISOString().slice(0, 10);
  
  fetch(`${URL}?api_key=${API_KEY}&date=${randomDate}`)
    .then((response) => {
      if(!response.ok) {
        throw new Error('Non 200 status');
      }
      return response.json();
    })

}
