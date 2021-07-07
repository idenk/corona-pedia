// import axios from 'axios';
import fetch from 'node-fetch';
// import { CORONA_API_KEY, DATA_PORTAL_API_KEY } from '../config/key';


export async function getCoronaData() {
  // Date
  const today = new Date();       
  const baseDate = new Date(today.setDate(today.getDate()-1)); // base date: yesterday //? 백신 API는 09시 35분경 업데이트
  //  toISOString(): YYYY-MM-DDThh:mm:ss.zzzZ 형식으로 변환 (UTC시간 기준. 한국 시간보다 9시간 느림)
  //  getTimezoneOffset(): 현재 시간과의 차이를 분 단위로 반환 => -540분 = -9시간
  //  new Date는 밀리 초 단위를 인자로 받으므로 오프셋 값에 1000(밀리초) * 60(1분) = 60000을 곱하여 전달
  let baseDateFormat = new Date(baseDate.getTime() - (baseDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0] + ' 00:00:00';
  // console.log(baseDateFormat); // YYYY-MM-DD 00:00:00 (어제 날짜)
  
  // Url
  const coronaDataUrl = 'https://api.corona-19.kr/korea/?serviceKey=' + process.env.REACT_APP_CORONA_API_KEY;
  const localCoronaDataUrl = 'https://api.corona-19.kr/korea/country/new/?serviceKey=' + process.env.REACT_APP_CORONA_API_KEY;
  const vaccineUrl = `https://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=36&cond%5BbaseDate%3A%3AGTE%5D=${baseDateFormat}&serviceKey=` + process.env.REACT_APP_DATA_PORTAL_API_KEY;

  const urls = [coronaDataUrl, localCoronaDataUrl, vaccineUrl];

  //* use axios
  // const responses = await Promise.all(urls.map((url) => axios(url)));
  // return responses

  //* use fetch
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const result = await Promise.all(responses.map((res) => res.json()));
  
  //? 백신 API 파라미터의 시간 오류 방지
  // 0시 ~ 9시 35분에는 currentCount: 18, 이후 시간에는 전날 데이터를 포함한 36개가 응답되므로 뒷부분(갱신된 데이터)를 사용
  if (result[2].currentCount === 36) {
    result[2].currentCount = 18;
    result[2].data = result[2].data.slice(18);  
  }
  
  // 백신 데이터 정렬
  const localOrder = ['전국', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
  const orderedData = new Array(18).fill(0);
  for (let i = 0; i < localOrder.length; i++) {
    // localOrder의 각 이름이 한 글자씩 백신 데이터 이름에 모두 포함되는 경우로 인덱스를 찾고 해당 요소를 순차적으로 orderedData에 입력
    let idx = result[2].data.findIndex((el) => el.sido.includes(localOrder[i][0]) && el.sido.includes(localOrder[i][1]));
    orderedData[i] = result[2].data[idx];    
  }

  result[2].data = orderedData.slice();
  
  return result;
}

//? 23일 오전 1시 기준  06-22 데이터