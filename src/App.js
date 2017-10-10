import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Grid, Row, Image, Badge, Glyphicon } from 'react-bootstrap'
import ScrollSnap from 'scroll-snap';

import './App.css';


class App extends Component {
  state = {
    message: 'Enter your message...',
    media: 'https://media.giphy.com/media/26BkNsQzs593dRzJ6/giphy.gif',
  };

  componentDidMount() {
    this.dotOne.focus();
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleEnhancementsCarouselRef = (ref) => {
    this.enhancementsCarousel = ref;
  }

  handleDotOneRef = (ref) => {
    this.dotOne = ref;
  }

  handleDotTwoRef = (ref) => {
    this.dotTwo = ref;
  }

  handleDotThreeRef = (ref) => {
    this.dotThree = ref;
  }

  handleEnhancementsCarouselScroll = () => {

      // this.dotOne.unfocus();
      // this.dotTwo.focus();
    }

  render() {
    const {
      message,
      media,
    } = this.state;

    return (
      <div className='webviewContainer'>
        <div className='webview'>
          <Grid>
            <Row>
              <MessageInput onChange={this.handleMessageChange} />
            </Row>
            <Row>
              <EnhancementsCarousel
                onScroll={this.handleEnhancementsCarouselScroll}
                carouselRef={this.handleEnhancementsCarouselRef}
              >
                <GifPanel
                  message={message}
                  media={media}
                />
                <LibraryPanel />
                <VideoPanel />
              </EnhancementsCarousel>
            </Row>
            <Row>
              <div className='circles'>
                <Dot ref={this.handleDotOneRef}/>
                <Dot ref={this.handleDotTwoRef}/>
                <Dot ref={this.handleDotThreeRef}/>
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

class Panel extends Component {
  state = {
    focused: false,
  }

  render() {
    const {
      children,
      panelStyle,
    } = this.props;

    return (
      <div className='panelContainer'>
        <div className='panel'
          style={panelStyle}
        >
          {children}
        </div>
      </div>
    )
  };
}

class GifPanel extends Component {
  render() {
    const {
      media,
      message,
    } = this.props;

    const backgroundImage = `url(${media})`;
    const inlineStyle = media ? { backgroundImage: backgroundImage } : {};

    return (
      <Panel panelStyle={inlineStyle}>
        <div className='gifsSearch'>
          <Badge>
            <Glyphicon glyph='search' />
          </Badge>
        </div>
        <div className='gifsText'>
          {message}
        </div>
      </Panel>
    );
  }
}

class LibraryPanel extends Component {
  render() {
    return (
      <Panel>
        <div className='libraryEnchancementButton'>
          <Button bsSize='large'>ACCESS MY GALLERY</Button>
        </div>
      </Panel>
    );
  }
}

class VideoPanel extends Component {
  render() {
    return (
      <Panel>
        <div className='videoEnhancementButton'>
          <Image src='record.png' responsive />
        </div>
      </Panel>
    );
  }
}

class EnhancementsCarousel extends Component {

  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: '100% 100%',
      scrollTimeout: 300,
      scrollTime: 200
    }
    const snapObject = new ScrollSnap(this.carousel, snapConfig)
    snapObject.bind(this);
  }

  handleRef = (ref) => {
    this.carousel = ref;
  }

  handleScroll = () => {
  }

  render() {
    const {
      children,
      onScroll,
      carouselRef,
    } = this.props;

    return (
      <div className='flexContainerWrapper'>
        <div
          className='enhancementsCarousel'
          onScroll={this.handleScroll}
          ref={this.handleRef}
        >
          {children}
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

class Dot extends Component {
  state = {
    isFocused: false,
  }

  focus = () => {
    this.setState({isFocused: true})
  }

  unfocus = () => {
    this.setState({isFocused: false})
  }

  render() {
    const {
      isFocused,
    } = this.state;

    const inlineStyle = isFocused ? { backgroundColor: 'whitesmoke'} : {backgroundColor: 'white'};

    return (
      <div className='circleContainer'>
        <div className='circle' 
          style={inlineStyle}
        />
      </div>
    );
  }
}


class TracksCarousel extends Component {

  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: '60% 60%',
      scrollTimeout: 300,
      scrollTime: 200
    }
    const snapObject = new ScrollSnap(this.tracksCarousel, snapConfig)
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
