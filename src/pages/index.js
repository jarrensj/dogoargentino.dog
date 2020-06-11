import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My name is Bash</h1>
    <p>I was born on February 8th, 2019.</p>
    <p>I currently live in the Bay Area!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p><a href="https://instagram.com/kwajidog">Instagram</a></p>
    <p><a href="https://photos.app.goo.gl/6CRM3G6QZUgsPgRp7">More photos of me</a></p>
  </Layout>
)

export default IndexPage
