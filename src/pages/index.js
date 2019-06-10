import React from "react"
import data from "../../data.json"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const IndexPage = () => (
  <Layout>
    <div className="col left">
      <Sidebar {...data} />
    </div>
    <div className="col right">Second Column</div>
  </Layout>
)

export default IndexPage
