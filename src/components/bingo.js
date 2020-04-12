import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bingo = () => {
    return  <div>
                <p>Tryck på knappen för att ta fram en ny bokstav</p>
                <button>Snurra</button>
                <div id="letterbox">
                    A
                </div>
            </div>
}
export default Bingo