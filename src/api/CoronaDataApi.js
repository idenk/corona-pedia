// import axios from 'axios';
import fetch from 'node-fetch';
import { CORONA_API_KEY, DATA_PORTAL_API_KEY } from '../config/key';


export async function getCoronaData() {
  // Date
  const today = new Date();
  // const yesterday = new Date(today.setDate(today.getDate() - 1));
  const todayFormat = today.toISOString().split('T')[0];  // YYYY-MM-DD

  // Url
  const mainUrl = 'https://api.corona-19.kr/korea/?serviceKey=' + CORONA_API_KEY;
  const localUrl = 'https://api.corona-19.kr/korea/country/new/?serviceKey=' + CORONA_API_KEY;
  const vaccineUrl = `https://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=18&cond%5BbaseDate%3A%3AEQ%5D=${todayFormat}%2000%3A00%3A00&serviceKey=` + DATA_PORTAL_API_KEY;

  const urls = [mainUrl, localUrl, vaccineUrl];

  //* use axios
  // const responses = await Promise.all(urls.map((url) => axios(url)));
  // return responses

  //* use fetch
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const result = await Promise.all(responses.map((res) => res.json()));
  return result;
}