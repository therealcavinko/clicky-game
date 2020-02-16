import React, { Component } from "react";
import ImageFileNames from "./images";
//---------------------------------------------------
class App extends Component {
	state = {
    images: images,
    clickedImages: [],
    score: 0,
    topScore: 0,
    game: 0
  };
//----------------------------------------------------
  componentDidMount() {
    this.setState({
      images: this.shuffle(this.state.images)
    }, () => {
    });
  }
//-------------------------------------------------------
  handleClick = event => {

    const clickedImage = event.target.alt;
 
    const wasImageClickedBefore = this.imageClickedBefore(clickedImage);
    if (wasImageClickedBefore) {
      this.setState({
        images: this.shuffle(this.state.images),
        clickedImages: [],
        score: 0,
        game: 2
      }, () => {
      });

    } 
    
    else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.images.length) {
        this.setState({
        images: this.shuffle(this.state.images),
          clickedImages: [],
          score: 0,
          topScore: newScore,
          game: 1
          });
      } 
      else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedImageFileName);
        const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
        this.setState({
        imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: clickedImagesCopy,
          score: newScore,
          topScore: newTopScore,
          game: 0
          }, () => {
        });
      }
    }
  };
//--------------------------------------------------------------------
  imageClickedBefore = (clickedImages) => {
  	for (let index=0; index<this.state.clickedImages.length; index++) {
  		if (this.state.clickedImages[index] === clickedImages) {
        return true;
      }
    }
    return false;
  };
//------------------------------------------------------------------------
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
//----------------------------------------------------------------------
 
export default App;