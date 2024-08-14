import React, { Component } from 'react';
import './App.css';

const data = [
  { id: 'snare', letter: 'Q', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { id: 'bongo', letter: 'E', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { id: 'tom tom', letter: 'A', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { id: 'bass 3', letter: 'S', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { id: 'shotgun', letter: 'D', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { id: 'high hat', letter: 'Z', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'},
  { id: 'drum hit', letter: 'X', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { id: 'laser', letter: 'C', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'  },
]


class DrumPad extends Component {
  
  handleClick =() => { 
    this.audio.play()
    
    this.props.handleDisplay(this.props.id)
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown= e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      
      this.props.handleDisplay(this.props.id)
    }
  }


  render(){
    return (
        <div className='drum-pad' id={this.props.id} onClick={this.handleClick}>
          <button className="btn btn-danger">{this.props.letter}</button>
          <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
        </div>
    )
  }
}



class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      display:'Click bellow or press key',

    }
  }

 
  handleDisplay = display => this.setState({ display })
 
  render() {
    return (
      <div className="container">
        <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
      </div>
    </div>
    );
  }
}

export default App;