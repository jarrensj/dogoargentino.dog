import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My name is Bash</h1>

    <p>I was born on February 8th, 2019.</p>
    <p>I currently live in the Bay Area!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      <a href="https://instagram.com/kwajidog">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      
      <a href="https://www.youtube.com/channel/UCSgUrn2ojfTm7Fc_mS9Lbsw">
        <FontAwesomeIcon icon={faYoutube} size="1x" style={{marginLeft: `1.45rem`}}/>
      </a>

      <a href="https://www.twitch.tv/jarrensj">
        <FontAwesomeIcon icon={faTwitch} size="1x" style={{marginLeft: `1.45rem`}}/>
      </a>

      <a href="https://www.tiktok.com/@jarrensj">
        <FontAwesomeIcon icon={faTiktok} size="1x" style={{marginLeft: `1.45rem`}}/>
      </a>

      <a href="https://photos.app.goo.gl/6CRM3G6QZUgsPgRp7">
        <FontAwesomeIcon icon={faPhotoVideo} size="1x" style={{marginLeft: `1.45rem`}}/>
      </a>

    </p>
  </Layout>
)

export default IndexPage
