import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Footer from "./components/footer";

import cards from "./cards.json";


class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      topScore: 0,
      currentScore: 0,
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }
  
  checkIfClicked(id) {
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let cardsCopy = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
      
      this.setState({
        cards: cardsCopy,
        currentScore: this.state.currentScore + 1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
      });
    }
    
    else {
      
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: resetCardsCopy,
        currentScore: 0,
      });
    } 
  }
  
  render() {
    return (
      <div className="container">
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <Wrapper>  
          {this.state.cards.map(card => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;