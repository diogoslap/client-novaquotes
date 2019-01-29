import React,{Component} from 'react'
class Quote extends Component{
  state ={
    author:'',
    quote:{}
  }

  componentDidMount(){
    const {quote} = this.props
    this.setState({
      author:quote.author,
      quote:quote
    })
  }

  render(){
    const quote = this.state.quote    
    return(
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 generic">
        <div className="card no-border" >
          <div className="header-bg">
          </div>
          <div className="avatar">
            {!this.state.author && <img src={quote.profile_picture} alt={quote.display_name}/>}
            {this.state.author &&  <img src={this.state.author.profile_picture} alt={this.state.author.display_name}/>}
          </div>
          <div className="card-body">
            {this.state.author &&  <p className="card-text font-weight-bold name">{this.state.author.display_name}</p>}
            {!this.state.author && <p className="card-text font-weight-bold name">{quote.display_name}</p>}            
            <p className="card-text capitalize">{quote.message}</p>            
          </div>
          {this.state.author &&
          <div className="card-footer">
            <p className="card-text name">Sent by: {quote.display_name}</p>
          </div>
          }
        </div>
      </div>
  );
  }
}

export default Quote

