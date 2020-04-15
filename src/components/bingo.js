import React from "react"
import containerStyles from "./container.module.css"

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
    letters = ['B','C','D','F','G','H','K','P','Q','T','U','W','X','Y','Z','Å','Ä','Ö','b','c','d','f','g','h','k','p','q','t','u','w','x','y','z','å','ä','ö']
    played = ""
    constructor(props){
      super(props)
      this.letters = shuffleArray(this.letters)
      this.state = {
        buttonText: "-----"
      }
    }

    handleClick = () => {
        let buttonText = this.letters.length > 0 ? this.letters.pop() : "Alla bokstäver har dragits"
        if(buttonText != "Alla bokstäver har dragits"){
          this.played += " " + buttonText
        }
        this.setState({buttonText: buttonText})
    }

    render(){
      return (
        <div>
            <p>Tryck på knappen för att ta fram en ny bokstav</p>
            <button className={containerStyles.button} onClick={this.handleClick}>Snurra</button>
            <br></br>
            <div className={containerStyles.card}>
                <p>
                    {this.state.buttonText}
                </p>
            </div>
            <br></br>
            <div><p>Spelade bokstäver:</p> {this.played}
            </div>
        </div>
      )
    }
}
