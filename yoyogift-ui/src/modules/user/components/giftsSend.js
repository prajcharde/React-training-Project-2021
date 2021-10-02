// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import { Grid, AutoSizer, Table, Column, InfiniteLoader } from 'react-virtualized';
// import {DateFormatter} from '../../common/components/DateFormatter';
// import 'react-virtualized/styles.css';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     //overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   tablecell: {
//     border: '1px solid black',
//     lineHeight: '30px',
//     textAlign: 'center',
//     padding: '0 4px',
//   }
// });


// class GiftsSend extends React.PureComponent {

//   constructor(props) {
//     super(props);
//     this.state = {
//       prevStaterows: [],
//       rows: []
//     };
//     // this.generateData();
//   }

//   componentDidMount() {
//     debugger;
//     if(this.props.data)
//       this.generateData([]);
//   }

//   componentDidUpdate(prevProps) {
//     debugger;
//     // Typical usage (don't forget to compare props):
//     if (JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)) {
//       this.generateData(prevProps.data);
//     }
//   }

//   componentWillReceiveProps (nextProps) {
//     if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
//       this.generateData(this.props.data);
//        }
//   }

//   generateData = (arr) => {
//     debugger;
//     let rowes = arr;
//     // this.setState(
//     //   prevState => {
//     //     return {
//     //       prevStaterows: prevState.rows
//     //     };
//     //   },() => {rowes = [...this.state.prevStaterows]}
//     // );
//   //  rowes = [...this.state.prevStaterows];
//    this.props.data.forEach((row,i) => {
//      let a = {
//        "cardName":row.cardName,
//        "points": row.cardPoints,
//        "receiveTo":row.senderEmail,
//        "issueDate":DateFormatter(row.cardIssueDate),
//        "expiryDate":DateFormatter(row.cardExpiryDate)
//      }    
//       // rowes[i] = [];
//       // let b = Object.values(a);
//       // for (let j = 0; j < Object.entries(a).length; j++) {
//       //   rowes[i].push(b[j]);
//       // }
//       rowes.push(a);
//    });

//     this.setState({rows:rowes});
//   }

//   loadMore = () => {
//     debugger;
//     this.props.fetchSentCards();
//   }

// //  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {    
// //   return (
// //     <div key={key} style={style}>
// //       <div className={this.props.classes.tablecell}>
// //         {this.state.rows[rowIndex][columnIndex]}
// //       </div>
// //     </div>
// //   );
      
// //   };

//   render() {
//   const {classes, data, totalCount} = this.props;
//     return (
//       <Paper className={classes.root}>
//         {/* <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>CARD NAME</TableCell>
//               <TableCell >POINTS</TableCell>
//               <TableCell >SENT TO</TableCell>
//               <TableCell >ISSUE DATE</TableCell>
//               <TableCell >EXPIRY DATE</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map(row => (
//               <TableRow key={row.id}>
                
//                 <TableCell>{row.cardName}</TableCell>
//                 <TableCell >{row.cardPoints}</TableCell>
//                 <TableCell >{row.receiverEmail}</TableCell>
//                 <TableCell>{DateFormatter(row.cardIssueDate)}</TableCell>
//                 <TableCell>{DateFormatter(row.cardExpiryDate)}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table> */}
//         {/* <div style={{width:"100%", height:"74vh"}}>
//           <AutoSizer>
//             {({width, height}) =>(
//               // <List width={width} height={height} rowHeight={50} rowCount={data.length} 
//               // rowRenderer={({key, index, style, parent}) =>{
//               //   const row = data[index];
//               //   return (<div key={key} style={style}>
//               //    <tr> <div>{row.cardName}</div>
//               //     <div>{row.cardPoints}</div>
//               //     <div>{row.receiverEmail}</div>
//               //     <div>{DateFormatter(row.cardIssueDate)}</div>
//               //     <div>{DateFormatter(row.cardExpiryDate)}</div> 
//               //     </tr>
//               //   </div>);
    
//               // }} />
//               // <Grid
//               //   cellRenderer={this.cellRenderer}
//               //   overscanRowCount={2}
//               //   columnCount={5}
//               //   columnWidth={200}
//               //   height={height}
//               //   rowCount={data.length}
//               //   rowHeight={30}
//               //   width={width}
//               // />

//               <Table
//     width={width}
//     height={height}
//     headerHeight={40}
//     rowHeight={40}
//     rowCount={this.state.rows.length}
//     rowGetter={({index}) => this.state.rows[index]}>
//     <Column label="Card Name" dataKey="cardName" width={200} />
//     <Column width={200} label="Card Points" dataKey="points" />
//     <Column label="Receiver Email" dataKey="receiveTo" width={400} />
//     <Column width={300} label="Card Issue Date" dataKey="issueDate" />
//     <Column width={300} label="Card Expiry Date" dataKey="expiryDate" />
//   </Table>

//             )}
//           </AutoSizer>
//         </div> */}

// <div style={{width:"100%", height:"74vh"}}>
//      <InfiniteLoader
//               isRowLoaded={({index}) => !!this.state.rows[index]}
//                loadMoreRows={this.loadMore}
//                rowCount={totalCount}
//             >
//                {({onRowsRendered, registerChild}) => (
//                   <AutoSizer>
//                      {({ width, height}) => (
//                         <Table
//                            ref={registerChild}
//                            onRowsRendered={onRowsRendered}
//                            rowClassName='table-row'
//                            headerHeight={40}
//                            width={width}
//                            height={height}
//                            rowHeight={40}
//                            rowCount={this.state.rows.length}
//                            rowGetter={({ index }) => this.state.rows[index]}
//                         >
//                         <Column label="Card Name" dataKey="cardName" width={200} />
//                         <Column width={200} label="Card Points" dataKey="points" />
//                         <Column label="Receiver Email" dataKey="receiveTo" width={400} />
//                         <Column width={300} label="Card Issue Date" dataKey="issueDate" />
//                         <Column width={300} label="Card Expiry Date" dataKey="expiryDate" />
//                      </Table>
//                      )}
//                   </AutoSizer>
//                )}
//             </InfiniteLoader>
//             </div>
    




//       </Paper>
//     );
//   }
  
// }


// GiftsSend.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(GiftsSend);



import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Table, Column, InfiniteLoader } from 'react-virtualized';
import {DateFormatter} from '../../common/components/DateFormatter';
import 'react-virtualized/styles.css';

const styles = theme => ({
  root: {
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


function GiftsSend (props) {

  const { classes } = props;

  const [rows, setRows] = useState([]);
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = rows;
  });
  const loadMore = () =>{
    props.fetchSentCards();      
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
        "receiveTo":row.senderEmail,
        "issueDate":DateFormatter(row.cardIssueDate),
        "expiryDate":DateFormatter(row.cardExpiryDate)
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


  // generateData =() => {
  //   debugger;
  //   let rowes = [];
  //   // this.setState(
  //   //   prevState => {
  //   //     return {
  //   //       prevStaterows: prevState.rows
  //   //     };
  //   //   },() => {rowes = [...this.state.prevStaterows]}
  //   // );
  //   rowes = [...this.state.prevStaterows]
  //  this.props.data.forEach((row,i) => {
  //    let a = {
  //      "cardName":row.cardName,
  //      "points": row.cardPoints,
  //      "receiveTo":row.senderEmail,
  //      "issueDate":DateFormatter(row.cardIssueDate),
  //      "expiryDate":DateFormatter(row.cardExpiryDate)
  //    }    
  //     // rowes[i] = [];
  //     // let b = Object.values(a);
  //     // for (let j = 0; j < Object.entries(a).length; j++) {
  //     //   rowes[i].push(b[j]);
  //     // }
  //     rowes.push(a);
  //  });

  //   this.setState({rows:rowes});
  // }

  // loadMore = () => {
  //   debugger;
  //   this.props.fetchSentCards();
  // }

//  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {    
//   return (
//     <div key={key} style={style}>
//       <div className={this.props.classes.tablecell}>
//         {this.state.rows[rowIndex][columnIndex]}
//       </div>
//     </div>
//   );
      
//   };

  // render() {
  // const {classes, data, totalCount} = this.props;
    return (
      <Paper className={classes.root}>
        {/* <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>CARD NAME</TableCell>
              <TableCell >POINTS</TableCell>
              <TableCell >SENT TO</TableCell>
              <TableCell >ISSUE DATE</TableCell>
              <TableCell >EXPIRY DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                
                <TableCell>{row.cardName}</TableCell>
                <TableCell >{row.cardPoints}</TableCell>
                <TableCell >{row.receiverEmail}</TableCell>
                <TableCell>{DateFormatter(row.cardIssueDate)}</TableCell>
                <TableCell>{DateFormatter(row.cardExpiryDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
        {/* <div style={{width:"100%", height:"74vh"}}>
          <AutoSizer>
            {({width, height}) =>(
              // <List width={width} height={height} rowHeight={50} rowCount={data.length} 
              // rowRenderer={({key, index, style, parent}) =>{
              //   const row = data[index];
              //   return (<div key={key} style={style}>
              //    <tr> <div>{row.cardName}</div>
              //     <div>{row.cardPoints}</div>
              //     <div>{row.receiverEmail}</div>
              //     <div>{DateFormatter(row.cardIssueDate)}</div>
              //     <div>{DateFormatter(row.cardExpiryDate)}</div> 
              //     </tr>
              //   </div>);
    
              // }} />
              // <Grid
              //   cellRenderer={this.cellRenderer}
              //   overscanRowCount={2}
              //   columnCount={5}
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
    rowCount={this.state.rows.length}
    rowGetter={({index}) => this.state.rows[index]}>
    <Column label="Card Name" dataKey="cardName" width={200} />
    <Column width={200} label="Card Points" dataKey="points" />
    <Column label="Receiver Email" dataKey="receiveTo" width={400} />
    <Column width={300} label="Card Issue Date" dataKey="issueDate" />
    <Column width={300} label="Card Expiry Date" dataKey="expiryDate" />
  </Table>

            )}
          </AutoSizer>
        </div> */}

<div style={{width:"100%", height:"74vh"}}>
     <InfiniteLoader
               isRowLoaded={({index}) => !!rows[index]}
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
                        <Column label="Receiver Email" dataKey="receiveTo" width={400} />
                        <Column width={300} label="Card Issue Date" dataKey="issueDate" />
                        <Column width={300} label="Card Expiry Date" dataKey="expiryDate" />
                     </Table>
                     )}
                  </AutoSizer>
               )}
            </InfiniteLoader>
            </div>
    




      </Paper>
    );
  //}
  
}


GiftsSend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiftsSend);







