import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <span>love</span> yourself.
        </h1>
        <p>I'm building my own careers, also I have to improve my skillsets!</p>
        <Link to="http://twitter.com/zabukeinc">watch yourself</Link>
        <div className="Logos">
          <img src={require("../images/icon-dota2.png")} width="50" />
          <img src={require("../images/icon-dota2.png")} width="50" />
          <img src={require("../images/icon-dota2.png")} width="50" />
          <img src={require("../images/icon-dota2.png")} width="50" />
          <img src={require("../images/icon-dota2.png")} width="50" />
          <img src={require("../images/icon-dota2.png")} width="50" />
        </div>
      </div>
      <svg
        width="100%"
        height="200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values="
            M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,224C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,320L48,272C96,224,192,128,288,80C384,32,480,32,576,69.3C672,107,768,181,864,224C960,267,1056,277,1152,277.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,96L48,122.7C96,149,192,203,288,213.3C384,224,480,192,576,154.7C672,117,768,75,864,101.3C960,128,1056,224,1152,234.7C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

            M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,224C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
      </svg>
    </div>
  </Layout>
)

export default IndexPage
