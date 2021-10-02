import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table, Column, AutoSizer, InfiniteLoader } from 'react-virtualized';
import Paper from '@material-ui/core/Paper';
//import { Button } from '@material-ui/core';
import {DateFormatter} from '../../common/components/DateFormatter';
import 'react-virtualized/styles.css';
import { Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    // minHeight: '100vh',
     width: '100%',
    marginTop: theme.spacing.unit * 3,
    //overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tablecell: {
    border: '1px solid black',
    lineHeight: '30px',
    textAlign: 'center',
    padding: '0 4px',
  }
});

function GiftsReceived(props) {
  const { classes } = props;

  const [rows, setRows] = useState([]);
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = rows;
  });
  const loadMore = () =>{
    props.fetchReceivedCards();      
      // resolve the promise after data where fetched
     // this.promiseResolve();
  }

 useEffect(() =>{
  const generateData = () => {
    const rowes = [...prevCount.current];
   props.data.forEach((row,i) => {
     let a = {
       "cardName":row.cardName,
       "points": row.cardPoints,
       "sentTo":row.senderEmail,
       "shortDesc": row.cardShortDesc,
       "issueDate":DateFormatter(row.cardIssueDate),
       "expiryDate":DateFormatter(row.cardExpiryDate),
       "redeem" : row.isRedeemed ? 'Redeemed': 'notRedeemed'
     }    
      // rowes[i] = [];
      // let b = Object.values(a);
      // for (let j = 0; j < Object.entries(a).length; j++) {
      //   rowes[i].push(b[j]);
      // }
      rowes.push(a);
   });

    setRows(rowes);
  }
  generateData();
 },[props.data]);

// const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {    
//   return (
//     <div key={key} style={style}>
//       <div className={props.classes.tablecell}>
//         {rows[rowIndex][columnIndex] === 'notRedeemed' ? 
//         <Button variant="contained" color="primary" onClick={handleRedeem(rowIndex)}>
//           Redeem
//         </Button> : rows[rowIndex][columnIndex]}
//       </div>
//     </div>
//   );
      
//  };

// const handleRedeem = (index) =>{
//     props.redeemCard(rows[index])
//   }

  return (
    <Paper className={classes.root}>
      {/* <div style={{width:"100%", height:"74vh"}}>
          <AutoSizer>
            {({width, height}) =>(
              // <List width={width} height={height} rowHeight={200} rowCount={data.length} 
              // overscanRowCount={2}
              // rowRenderer={({key, index, style, parent}) =>{
              //   const row = data[index];
              //   return (<div key={key} style={style}>
              //    <tr> <div>{row.cardName}</div>
              //     <div>{row.cardPoints}</div>
              //     <div>{row.senderEmail}</div>
              //     <div>{row.cardShortDesc}</div>
              //     <div>{DateFormatter(row.cardIssueDate)}</div>
              //     <div>{DateFormatter(row.cardExpiryDate)}</div>
              //     <div>{row.isRedeemed ? 'Redeemed' : <Button variant="contained" color="primary" onClick={()=>props.redeemCard(row)}>Redeem</Button>}</div>
              //     </tr>
              //   </div>);
              // }
              // } />

              // <Grid
              //   cellRenderer={cellRenderer}
              //   overscanRowCount={2}
              //   columnCount={7}
              //   columnWidth={200}
              //   height={height}
              //   rowCount={data.length}
              //   rowHeight={30}
              //   width={width}
              // />

              <Table
    width={width}
    height={height}
    headerHeight={40}
    rowHeight={40}
    rowCount={rows.length}
    overscanRowCount={10}
    rowGetter={({index}) => rows[index]}>
    <Column label="Card Name" dataKey="cardName" width={200} />
    <Column width={200} label="Card Points" dataKey="points" />
    <Column label="Sender Email" dataKey="sentTo" width={400} />
    <Column label="Short Desc" dataKey="shortDesc" width={200} />
    <Column width={300} label="Card Issue Date" dataKey="issueDate" />
    <Column width={300} label="Card Expiry Date" dataKey="expiryDate" />
    <Column label="Status" dataKey="redeem" width={200} />
  </Table>
            )}
          </AutoSizer>
        </div> */}
     <div style={{width:"100%", height:"74vh"}}>
     <InfiniteLoader
               isRowLoaded={({ index}) => !!rows[index]}
               loadMoreRows={loadMore}
               rowCount={props.totalCount}
            >
               {({onRowsRendered, registerChild}) => (
                  <AutoSizer>
                     {({ width, height}) => (
                        <Table
                           ref={registerChild}
                           onRowsRendered={onRowsRendered}
                           rowClassName='table-row'
                           headerHeight={40}
                           width={width}
                           height={height}
                           rowHeight={40}
                           rowCount={rows.length}
                           rowGetter={({ index }) => rows[index]}
                        >
                        <Column label="Card Name" dataKey="cardName" width={200} />
                        <Column width={200} label="Card Points" dataKey="points" />
                        <Column label="Sender Email" dataKey="sentTo" width={400} />
                        <Column label="Short Desc" dataKey="shortDesc" width={200} />
                        <Column width={300} label="Card Issue Date" dataKey="issueDate" />
                        <Column width={300} label="Card Expiry Date" dataKey="expiryDate" />
                        <Column label="Status" dataKey="redeem" width={200} 
                        cellRenderer={
                          ({rowData}) => rowData.isRedeemed ? 'Redeemed' :
                            <Button color='primary' varient="contained" onClick={() =>{console.log(rowData)}}>
                              Redeem
                            </Button>
                        } />
                     </Table>
                     )}
                  </AutoSizer>
               )}
            </InfiniteLoader>
            </div>
    </Paper>
  );
}

GiftsReceived.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiftsReceived);