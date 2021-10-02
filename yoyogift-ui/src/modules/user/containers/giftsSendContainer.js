import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSentCards } from './../state/actions/index';
import GiftsSent from '../components/giftsSend.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

class GiftsSendContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getRecordNumber: 30,
      records:[]
    };
  }

  componentDidMount() {
    if(this.props.user)
    this.props.fetchSentCards(this.props.user.email, 0, this.state.getRecordNumber);
  }


  // componentDidUpdate(prevProps) {
  //   debugger
  //   if (JSON.stringify(this.props.sentCards) !== JSON.stringify(prevProps.sentCards)) {
  //     let rec = this.props.data;
  //        this.setState({records:{...this.state.records,rec}});
  //       }
  // }

  componentDidCatch(error, info) {
    console.log(error)
  }

  fetchSentCards = () =>{
    let previousindex = this.state.getRecordNumber;
    this.setState({getRecordNumber : this.state.getRecordNumber + 30}); 
    this.props.fetchSentCards(this.props.user.email, previousindex, previousindex+30);
     
  }

  render() {
    if (this.props.isLoggedIn) {
      if(!(this.props.sentCards) || (this.props.sentCards.length < 0)) {
        return <CircularProgress style={{marginLeft: '50%', marginTop: '10%'}} />
      } else if (this.props.sentCards.length === 0) {
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
        } else {
        return (
          <div>
            <GiftsSent data={this.props.sentCards} 
            fetchSentCards={this.fetchSentCards} 
            totalCount={this.props.totalCount} />
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
        user:state.login.detailsObject,
        isLoggedIn: state.login.loginStatus,
        sentCards: state.users.cards,
        totalCount: state.users.totalCount
    }
}

export default connect(mapStateToProps, {fetchSentCards})(GiftsSendContainer);
