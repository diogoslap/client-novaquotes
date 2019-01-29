import axios from 'axios'
const api =  axios.create({
    baseURL:'http://localhost'
})
const apis ={
  loadQuotes:(limit,page) => api.get('quotes?limit='+limit+'&page='+page)   
}

export default apis
