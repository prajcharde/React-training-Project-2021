import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import {
//   usePositioner,
//   useResizeObserver,
//   useContainerPosition,
//   MasonryScroller
// } from "masonic";
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  AutoSizer,
  InfiniteLoader,
  WindowScroller
} from "react-virtualized";
//import {useWindowSize} from "@react-hook/window-size";
import Paper from "@material-ui/core/Paper";
import GiftCard from "../../common/components/GiftCard";

const styles = theme => ({
  root: {
    width: "90%",
    margin: '2%',
    padding: '1%'
  },
  // table: {
  //   minWidth: 100
  // },
  // tableWrapper: {
  //   overflow: "hidden"
  // }
});

// function GiftsList (props){
//   const containerRef = React.useRef(null);
//   const [windowWidth, windowHeight] = useWindowSize();
//   const { offset, width } = useContainerPosition(containerRef, [
//     windowWidth,
//     windowHeight
//   ]);
// const giftCard = ({index, data: {id,cardName,cardPoints,cardImage,cardCount,cardShortDesc}}) => {
//     const giftCardData = {id,cardName,cardPoints,cardImage,cardCount,cardShortDesc};
//     return <GiftCard key={index} giftCard={giftCardData} 
//               userEmail={props.userDetails.email}
//               //classes={props.classes}
//               />  
//   };

//   const positioner = usePositioner(
//     { width, columnWidth: 200, columnGutter: 4 },
//     [props.giftCardsFiltered]
//   );

//   const resizeObserver = useResizeObserver(positioner);
//     return (
//       <Paper className={props.classes.root}>
//         {/* <Masonry
//           // Provides the data for our grid items
//           items={giftCardsFiltered}
//           // Adds 8px of space between the grid cells
//           columnGutter={3}
//           // Sets the minimum column width to 172px
//           columnWidth={172}
//           // Pre-renders 5 windows worth of content
//           overscanBy={5}
//           // This is the grid item component
//           render={this.FakeCard}
//         /> */}

//           <MasonryScroller
//             positioner={positioner}
//             resizeObserver={resizeObserver}
//             containerRef={containerRef}
//             items={props.giftCardsFiltered}
//             height={windowHeight}
//             offset={offset}
//             overscanBy={3}
//             render={giftCard}
//           />

//       </Paper>
//     );
// }

//const limit = 1000;
// let fetchCount = 1;
// let imageId = 10;

//******************************* */

const CARD = {
  WIDTH: 180,
  HEIGHT: 280
};

class GiftsList extends React.Component {
  state = {
    columnCount: 0,
    items: [],
    pastitems:[]
  };

  getCollections = () => {
    //const newImages = [];
    // for (let i = 0; i < 50; i++) {
    //   const image = (
    //     <img
    //       width="180px"
    //       height="230px"
    //       src={`https://picsum.photos/180/280?image=${imageId++}`}
    //       alt="gallery image"
    //     />
    //   );
    //   newImages.push(image);
    // }
    const { items, pastitems } = this.state;
    // items.forEach(element => {
    //   newImages.push(element);
    // });   
    const newitems = pastitems.concat(items);
    this.setState({ items: newitems });
  };

  // componentDidMount() {
  //   debugger;
  //   this.setState({items:this.props.giftCards});
  // }

  componentWillUnmount() {
    this.setState({items:[], pastitems:[]});
  }

  _cache = new CellMeasurerCache({
    fixedHeight: true,
    fixedWidth: true,
    defaultHeight: CARD.HEIGHT
  });

  _config = {
    columnWidth: CARD.WIDTH,
    gutterSize: 10,
    overscanByPixels: CARD.HEIGHT
  };

  getPositionerConfig = width => {
    const { gutterSize } = this._config;
    const columnCount = this.getColumnCount(width);
    return {
      columnCount,
      columnWidth: CARD.WIDTH,
      spacer: gutterSize
    };
  };

  resetCellPositioner = width => {
    const config = this.getPositionerConfig(width);
    this._cellPositioner.reset(config);
  };

  getColumnCount = width => {
    const { columnWidth, gutterSize } = this._config;
    const columnCount = Math.floor(width / (columnWidth + gutterSize));
    this.setState({ columnCount });
    return columnCount;
  };

  initCellPositioner(width) {
    if (typeof this._cellPositioner === "undefined") {
      const config = this.getPositionerConfig(width);
      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        ...config
      });
    }
  }

  onResize = ({ width }) => {
    this.resetCellPositioner(width);
    this._masonry.recomputeCellPositions();
  };

  isRowLoaded = ({ index }) => {
    return this.state.items[index];
  };

  componentWillReceiveProps(nextProps){
    if(this.props.giftCards !== nextProps.giftCards){
      console.log("this.props.giftCards=======>>>", this.props.giftCards);
      console.log("nextProps.giftCards=========>", nextProps.giftCards);
      //let currentItems = this.state.items ? this.state.items : []
       this.setState({
          items: [...this.state.items,...nextProps.giftCards],
          pastitems: this.props.giftCards
       });
    }
 }

  loadMoreRows = async () => {
    let { items } = this.state;
    if (items.length < this.props.totalCount) {
      this.props.fetchMorecards();
      //this.getCollections();
    }
  };

  cellRenderer = (config) => {
    const { index, key, parent, style } = config;
    const item = this.state.items[index];
    let content;
    content = item ? (
      <div
        style={{
          width: "180px",
          height: "280px",
          textAlign: "center",
          backgroundColor: "#ccc"
        }}
      >
        <GiftCard key={index} giftCard={item} 
              userEmail={this.props.userDetails.email}
              classes={this.props.classes}
              />
      </div>
    ) : null;
    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div
          style={{
            ...style,
            width: CARD.WIDTH,
            height: CARD.HEIGHT
          }}
        >
          {content}
        </div>
      </CellMeasurer>
    );
  };

  renderMasonry = (registerChild, onRowsRendered, height, scrollTop) => ({
    width
  }) => {
    this.initCellPositioner(width);
    const { items } = this.state;

    return (
      <Paper className={this.props.classes.root}>
      <Masonry
        cellCount={items.length}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this.cellRenderer}
        autoHeight
        height={height}
        scrollTop={scrollTop}
        overscanByPixels={CARD.HEIGHT}
        ref={ref => (this._masonry = ref)}
        onCellsRendered={onRowsRendered}
        width={width}
      />
      </Paper>
    );
  };

  renderAutoSizer = () => ({ registerChild, onRowsRendered }) => {
    return (
      <WindowScroller overscanByPixels={CARD.HEIGHT}>
        {({ height, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={this.onResize}
            height={height}
            scrollTop={scrollTop}
          >
            {this.renderMasonry(
              registerChild,
              onRowsRendered,
              height,
              scrollTop
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    );
  };

  renderInfiniteLoader = () => {
    const { items } = this.state;
    const hasMore = items.length < this.props.totalCount;
    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={hasMore ? items.length + 1 : items.length}
      >
        {this.renderAutoSizer()}
      </InfiniteLoader>
    );
  };

  render() {
    const { items } = this.state;
    if (!items) return null;

    return (
      <div>
        {this.renderInfiniteLoader()}
      </div>
    );
  }
}






GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);
