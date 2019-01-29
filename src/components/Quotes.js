import React,{Component} from 'react'
import Quote from './Quote'

class Quotes extends Component{
  state={
    limit:8,
    page:0,
    showButton:true
  }
  componentDidMount(){    
    this.props.loadQuotes(this.state)
    this.setState({
      page:this.state.page+1
    })
  }

  loadMore = () =>{
    this.setState({
      page:this.state.page+1
    })
    this.props.loadQuotes(this.state)
    this.showButton()
  }

  showButton = () =>{
    const {quotes} = this.props
    let total = this.state.limit * this.state.page+1
    if(quotes.length < total){
      this.setState({
        showButton:false
      }) 
    }else{
      this.setState({
        showButton:true
      }) 
    }    
  }

  render(){
    const {quotes} = this.props
    return(
      <div className="row">        
        {quotes.map((quote) => <Quote key={quote.id} quote={quote}/>)}
        <div className="col text-center">
          {this.state.showButton && <button className="btn btn-primary" onClick={this.loadMore}>Ver mais</button>}
        </div>
      </div>
    )
  }
}

export default Quotes