import React from 'react'
import {shallow} from 'enzyme'
import Quotes from './Quotes'
import Quote from './Quote'

describe('<Quotes />',()=>{   
  it("Should render Quotes", () => {
    const quotes = [
      {id:'22',message:'Teste', created_date:new Date('2019-01-01'),username:'teste',display_name:'Teste User'},
      {id:'21',message:'Teste 2', created_date:new Date('2019-01-02'),username:'teste',display_name:'Teste User 2'},
    ]
    
    const api = { 
      loadQuotes: jest.fn()
    }
    const wrapper = shallow(<Quotes loadQuotes={api.loadQuotes}  quotes={quotes}/>)
    expect(wrapper).toMatchSnapshot() 
    expect(wrapper.find(Quote).length).toBe(2)
    expect(wrapper.find(Quote).get(1).key).toBe(quotes[1].id)    
    //Get author username from quote 1
    const element = shallow(wrapper.find(Quote).get(0))
    expect(element.find('.card-body .card-text.font-weight-bold.name').text()).toEqual(quotes[0].display_name);
    expect(element.find('.card-body .card-text.capitalize').text()).toEqual(quotes[0].message);
    
  });   
})