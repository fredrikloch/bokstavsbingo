import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bingo from "../components/bingo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Välkomen till bokstavsbingo</h1>
    <br></br>
      <Bingo/>
  </Layout>
)

export default IndexPage
