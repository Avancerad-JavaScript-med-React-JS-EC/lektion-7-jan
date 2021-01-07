import React from 'react';

import ShowInsult from './components/ShowInsult';

class App extends React.Component {

  //Våran konstruktor där man initierar state
  constructor() {
    //Inititera this i konstruktorn
    super();

    //Deklarera ett state med de egenskaper som ska finnas vid sidladdning
    this.state = {
      insults: [
        { 
          insult: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?',
          play: 'Macbeth' 
        },
        { 
          insult: 'Never hung poison on a fouler toad',
          play: 'Richard III' 
        },
        { 
          insult: 'He thinks too much: such men are dangerous.',
          play: 'Julius Ceasar' 
        },
        { 
          insult: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.',
          play: 'The Merchant of Venice' 
        },
        { 
          insult: 'Give me your hand...I can tell your fortune. You are a fool.',
          play: 'The Two Noble Kinsmen' 
        }
      ],
      currentInsult: {}
    }

    //this tappar sin referens och vi behöver binda this till funktionen handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNumber = Math.round(Math.random() * 4);
    const insult = this.state.insults[randomNumber];

    //Uppdatera state med den slumpade förolämpningen
    this.setState({ currentInsult: insult });
  }

  render() {
    return (
      <section>
        <h1>Shakespeare insult generator</h1>
        <button onClick={ this.handleClick }>Insult me!</button>
        {/* Skicka ner currentInsult från state som en prop till ShowInsult för att visa på sidan */}
        <ShowInsult currentInsult={ this.state.currentInsult } />
      </section>
    )
  }
}

export default App; 