import axios from 'axios'
const api =  axios.create({
    baseURL:'https://novaquotes-novatics.herokuapp.com/'
})
const apis ={
  loadQuotes:(limit,page) => api.get('quotes?limit='+limit+'&page='+page)   
}

export default apis