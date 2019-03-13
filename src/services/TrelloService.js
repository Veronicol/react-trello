import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
})

const createColumn = (column) => {
  return http.post('/columns', column)
}

const getColumns = () => {
  return http.get('/columns')
}

const createCard = (card) => {
  const data = new FormData();
  Object.keys(card).forEach(key => {
    data.append(key, card[key]);
  })
//   for (var pair of data.entries()) {
//     console.log(pair[0]+ ', ' + typeof(pair[1])); 
// }
  return http.post('/cards', data)
}

export default {getColumns, createColumn, createCard};
