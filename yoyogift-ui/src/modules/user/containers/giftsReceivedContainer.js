import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReceivedCards, redeemCard } from './../state/actions/index';
import GiftsReceived from '../components/giftsReceived';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

class GiftsReceivedContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getRecordNumber: 20
    };
  }

  componentDidMount() {
      if(this.props.user)
        this.props.fetchReceivedCards(this.props.user.email, 0, 20);
  }
  componentDidCatch(error, info) {
    console.log(error)
  }
  handleRedeemCard = (row) => {
    const rowId = row.id;
    const addObj = {
      id: row.id,
      senderEmail: row.senderEmail,
      receiverEmail: row.receiverEmail,
      cardName: row.cardName,
      cardPoints: row.cardPoints,
      cardShortDesc: row.cardShortDesc,
      cardImage: row.cardImage,
      cardIssueDate: row.cardIssueDate,
      cardExpiryDate: row.cardExpiryDate,
      isRedeemed: true
    }
    this.props.redeemCard(rowId, addObj);
  }

  fetchReceivedCards = () =>{
    let previousindex = this.state.getRecordNumber;
    this.setState({getRecordNumber : this.state.getRecordNumber + 20}); 
    this.props.fetchReceivedCards(this.props.user.email, previousindex, previousindex+20);
     
  }

  render() {
    if (this.props.isLoggedIn) {
      if(!(this.props.receivedCards) || (this.props.receivedCards.length < 0)) {
        return <CircularProgress style={{marginLeft: '50%', marginTop: '10%'}} />            
      } else if (this.props.receivedCards.length === 0) {
        return <h2 style={{
          height: '40px',
          background: '#b3d9f7',
          color: 'white',
          textAlign: 'center',
          verticalAlign: 'middle',
          paddingTop: '5px',
          fontSize: '20px',
          fontWeight: '500'
        }}>
        NO DATA
        </h2>
        } else{
        return (
        <div>
          <GiftsReceived data={this.props.receivedCards} redeemCard={this.handleRedeemCard} 
          fetchReceivedCards={this.fetchReceivedCards}  totalCount={this.props.totalCount}/>
        </div>
      )
    } 
  } else {
      return <Redirect to="/" />
  }   
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.loginStatus,
        receivedCards: state.users.cards,
        totalCount: state.users.totalCount,
        user:state.login.detailsObject
    }
}

export default connect(mapStateToProps, {fetchReceivedCards, redeemCard})(GiftsReceivedContainer);
