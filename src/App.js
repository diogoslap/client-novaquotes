import React, { Component } from 'react';
import Quotes from './components/Quotes'

class App extends Component {
  state ={
    quotes:[]
  }

  loadQuotes = ({limit,page}) =>{
    this.props.api.loadQuotes(limit,page)
    .then(res =>{           
      this.setState({
        quotes:[...this.state.quotes,...res.data.data]
      })
      console.log(this.state.quotes)
    })
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3'>
          <div className='container'>
              <a href='/' className='navbar-brand'>Nova Quotes</a>
          </div>
        </nav>
        <div className="container">
          <div className="container-fluid">
            <Quotes             
              loadQuotes={this.loadQuotes}  
              quotes={this.state.quotes} 
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
