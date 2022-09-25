import axios from 'axios';

const endPoints = {
  apiKey: process.env.REACT_APP_apiKey,
  baseUrl: 'https://api.themoviedb.org/3',
};

endPoints.popular = async function (language = 'en-US', page = 1, region = '') {
  try {
    return await axios.get(`${this.baseUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        language,
        page,
        region,
      },
    });
  } catch {
    return false;
  }
}.bind(endPoints);

endPoints.latest = async function (language = 'en-US') {
  try {
    return await axios.get(`${this.baseUrl}/movie/latest`, {
      params: {
        api_key: this.apiKey,
        language,
      },
    });
  } catch {
    return false;
  }
}.bind(endPoints);

endPoints.topRated = async function (
  language = 'en-US',
  page = 1,
  region = ''
) {
  try {
    return await axios.get(`${this.baseUrl}/movie/top_rated`, {
      params: {
        api_key: this.apiKey,
        language,
        page,
        region,
      },
    });
  } catch {
    return false;
  }
}.bind(endPoints);

endPoints.upcoming = async function (
  language = 'en-US',
  page = 1,
  region = ''
) {
  try {
    return await axios.get(`${this.baseUrl}/movie/upcoming`, {
      params: {
        api_key: this.apiKey,
        language,
        page,
        region,
      },
    });
  } catch {
    return false;
  }
}.bind(endPoints);

endPoints.trending = async function (mediaType = 'all', timeWindow = 'day') {
  try {
    return await axios.get(
      `${this.baseUrl}/trending/${mediaType}/${timeWindow}`,
      {
        params: {
          api_key: this.apiKey,
        },
      }
    );
  } catch {
    return false;
  }
}.bind(endPoints);

export default endPoints;
