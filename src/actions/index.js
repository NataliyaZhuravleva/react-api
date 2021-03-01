import * as c from './ActionTypes';

export const requestHeadlines = () => ({
  type: c.REQUEST_HEADLINES
});

export const getHeadlinesSuccess = (headlines) => ({
  type: c.GET_HEADLINES_SUCCESS,
  headlines
});

export const getHeadlinesFailure = (error) => ({
  type: c.GET_HEADLINES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestHeadlines);
    return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-115.13722&lat=36.17497&kinds=bars&apikey=${process.env.REACT_APP_API_KEY}`)

    // return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    
    //https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-115.13722&lat=36.17497&kinds=bars&apikey=${process.env.REACT_APP_API_KEY}`)
    
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse.features);
          dispatch(getHeadlinesSuccess(jsonifiedResponse.features));//.results));
          
        })
      .catch((error) => {
        dispatch(getHeadlinesFailure(error));
      });
  }
}
//const xid=properties.xid;
//https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=


// {
//   "xid": "Q61906139",
//   "name": "Las Vegas Rocks Cafe",
//   "address": {
//     "city": "Las Vegas",
//     "road": "Fremont Street",
//     "house": "Neonopolis",
//     "state": "Nevada",
//     "county": "Clark County",
//     "suburb": "Five Points",
//     "country": "United States of America",
//     "postcode": "89101",
//     "country_code": "us",
//     "house_number": "450",
//     "neighbourhood": "Cultural Corridor"
//   },
//   "rate": "2",
//   "wikidata": "Q61906139",
//   "kinds": "cultural,theatres_and_entertainments,nightclubs,interesting_places,adult,music_venues,foods,bars,tourist_facilities",
//   "sources": {
//     "geometry": "wikidata",
//     "attributes": [
//       "wikidata"
//     ]
//   },
//   "otm": "https://opentripmap.com/en/card/Q61906139",
//   "image": "https://commons.wikimedia.org/wiki/File:Las_Vegas_2009_39_-_panoramio.jpg",
//   "preview": {
//     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Las_Vegas_2009_39_-_panoramio.jpg/400px-Las_Vegas_2009_39_-_panoramio.jpg",
//     "height": 300,
//     "width": 400
//   },
//   "point": {
//     "lon": -115.141235,
//     "lat": 36.169872
//   }
// }