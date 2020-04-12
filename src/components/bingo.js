import React from "react"

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default class Bingo extends React.Component{
    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z','å','ä','ö']
    constructor(props){
      super(props)
      this.letters = shuffleArray(this.letters)
      this.state = {
        buttonText: "-----"
      }
    }

    handleClick = () => {
      let buttonText = this.letters.length > 0 ? this.letters.pop() : "Alla bokstäver har dragits"
      this.setState({buttonText: buttonText})
    }

    render(){
      return (
        <div>
            <p>Tryck på knappen för att ta fram en ny bokstav</p>
            <button onClick={this.handleClick}>Snurra</button>
            <div>
                {this.state.buttonText}
            </div>
        </div>
      )
    }
}
