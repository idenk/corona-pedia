// import axios from 'axios';
import fetch from 'node-fetch';
import { CORONA_API_KEY } from '../config/key';


export async function getCoronaData() {
 
  const totalUrl = 'https://api.corona-19.kr/korea/?serviceKey=' + CORONA_API_KEY;
  const localUrl = 'https://api.corona-19.kr/korea/country/new/?serviceKey=' + CORONA_API_KEY;

  const urls = [totalUrl, localUrl];

  // const responses = await Promise.all(urls.map((url) => axios(url)));

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const result = await Promise.all(responses.map((res) => res.json()));

  return result;
}