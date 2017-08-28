import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Grid, Row, Image, Badge, Glyphicon, Panel } from 'react-bootstrap'
import ScrollSnap from 'scroll-snap';
import './App.css';

class App extends Component {
  state = {
    data: {
      message: 'Enter your message...',
    },
  };

  handleMessageChange = (event) => {
    this.setState({
      data: {
        message: event.target.value,
      },
    });
  };

  render() {
    const image = 'https://media.giphy.com/media/26BkNsQzs593dRzJ6/giphy.gif'

    return (
      <div className='webviewContainer'>
        <div className='webview'>
          <Grid>
            <Row>
              <MessageInput onChange={this.handleMessageChange} />
            </Row>
            <Row>
              <EnhancementsCarousel
                message={this.state.data.message}
                image={image}
              />
            </Row>
            <Row>
              <div className='circles'>
                {Circle}
                {Circle}
                {Circle}
              </div>
            </Row>
            <Row>
              <TracksCarousel />
            </Row>
            <Row>
              {GenerateButton}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;

const GenerateButton = (
  <div className='flexContainerWrapper'>
    <div className='generateButton'>
      <Button bsSize='large' block>
        GENERATE MEME
    </Button>
    </div>
  </div>
);

class MessageInput extends Component {
  render() {
    return (
      <div className='flexContainerWrapper'>
        <div className='message'>
          <form>
            <FormGroup controlId='message'>
              <FormControl
                type='text'
                placeholder='Enter your message...'
                bsSize='large'
                onChange={this.props.onChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  };
}

const GifsEnhancementPanel = (props) => {
  const {
    message,
    image,
  } = props;

  const backgroundImage = `url(${image})`;
  const inlineStyle = image ? { backgroundImage: backgroundImage } : {};

  return (
    <div className='panelContainer'>
      <div className='panel'
        style={inlineStyle}
      >
        <div className='gifsSearch'>
          <Badge>
            <Glyphicon glyph='search' />
          </Badge>
        </div>
        <div className='gifsText'>
          {message}
        </div>
      </div>
    </div>
  );
};

const LibraryEnhancementPanel = (
  <div className='panelContainer'>
    <div className='panel'>
      <div className='libraryEnchancementButton'>
        <Button bsSize='large'>ACCESS MY GALLERY</Button>
      </div>
    </div>
  </div>
);

const VideoEnchancementPanel = (
  <div className='panelContainer'>
    <div className='panel'>
      <div className='videoEnhancementButton'>
        <Image src='record.png' responsive />
      </div>
    </div>
  </div>
);

class EnhancementsCarousel extends Component {
  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: '100% 0px',
      scrollTimeout: 100,
      scrollTime: 300
    }
    const snapObject = new ScrollSnap(this.carousel, snapConfig)
    snapObject.bind(this)
  }

  handleRef = (ref) => {
    this.carousel = ref;
  }

  handleGifsRef = (ref) => {
    this.gifs = ref;
  }

  handleScroll = () => {
  }

  render() {

    const {
      message,
      image,
    } = this.props;

    return (
      <div className='flexContainerWrapper'>
        <div
          className='enhancementsCarousel'
          onScroll={this.handleScroll}
          ref={this.handleRef}
        >
          <GifsEnhancementPanel
            message={message}
            ref={this.handleGifsRef}
            image={image}
          />
          {LibraryEnhancementPanel}
          {VideoEnchancementPanel}
        </div>
      </div>
    );
  };
}

const TrackPanel = (
  <div className='trackPanel'>
    <div className='track'>
      <Image src='imagdragons_radioactivesmall.png' />
    </div>
  </div>
);

const Circle = (
  <div className='circleContainer'>
    <div className='circle' />
  </div>
);

class TracksCarousel extends Component {
  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: '60% 0%',
      scrollTimeout: 100,
      scrollTime: 300,
    };
    const snapObject = new ScrollSnap(this.tracksCarousel, snapConfig);
    snapObject.bind(this);
  }

  handleRef = (ref) => {
    this.tracksCarousel = ref;
  }

  handleScroll = () => {
  }

  render() {
    return (
      <div
        className='tracksCarousel'
        onScroll={this.handleScroll}
        ref={this.handleRef}
      >
        { /* TODO: This should really be an array of tracks that are mapped to
         list items which are passed to component as props */ }
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
        {TrackPanel}
      </div>
    );
  };
}
