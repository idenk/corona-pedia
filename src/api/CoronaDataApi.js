// import axios from 'axios';
import fetch from 'node-fetch';
import { CORONA_API_KEY, DATA_PORTAL_API_KEY } from '../config/key';


export async function getCoronaData() {
  // Date
  const today = new Date();
  let todayFormat = today.toISOString().split('T')[0] + ' 00:00:00';  // YYYY-MM-DD

  const yesterday = new Date(new Date().setDate(new Date().getDate()-1));
  let yesterdayFormat = yesterday.toISOString().split('T')[0] += ' 00:00:00';
  // console.log(yesterday)
  // console.log(yesterdayFormat);

  // Url
  const coronaDataUrl = 'https://api.corona-19.kr/korea/?serviceKey=' + CORONA_API_KEY;
  const localCoronaDataUrl = 'https://api.corona-19.kr/korea/country/new/?serviceKey=' + CORONA_API_KEY;
  const vaccineUrl = `https://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=36&cond%5BbaseDate%3A%3AGTE%5D=${yesterdayFormat}&serviceKey=` + DATA_PORTAL_API_KEY;

  const urls = [coronaDataUrl, localCoronaDataUrl, vaccineUrl];

  //* use axios
  // const responses = await Promise.all(urls.map((url) => axios(url)));
  // return responses

  //* use fetch
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const result = await Promise.all(responses.map((res) => res.json()));
  
  // 백신 데이터 0시 ~ 9시 35분 데이터 오류 (base date unmatched)
  if (result[2].currentCount === 36) {
    result[2].currentCount = 18;
    result[2].data = result[2].data.slice(18);  
  }
  
  // 백신 데이터 정렬
  const localOrder = ['전국', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
  const orderedData = new Array(18).fill(0);
  for (let i = 0; i < localOrder.length; i++) {

    let idx = result[2].data.findIndex((el) => el.sido.includes(localOrder[i][0]) && el.sido.includes(localOrder[i][1]));
    orderedData[i] = result[2].data[idx];    
  }

  result[2].data = orderedData.slice();
  
  return result;
}