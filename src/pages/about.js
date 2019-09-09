import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Twitter, LinkedIn } from '../components/social'


class AboutIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Who We Are"
          keywords={[`blog`, `data`, `analytics`, `business`,`about`]}
        />

        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1 className="bigText">Who We Are</h1>
            <img src="/undraw_analysis_4jis.png" alt="Man and woman doing analysis" />
            
            </div>

            <div className="u-textLeft">
            <h1>Alan Hylands</h1>

            <div className="row">
              <div className="col-5">
              <img src="/profile-pic2.jpg" alt="Alan Hylands" />
              <h2 className="bigQuote">"I prefer simple solutions to complex problems. That doesn't mean easy.
              <br /><br />
              It just means cutting right down to the most important 
              business problem and using your data to solve it."</h2>
              </div>
              <div className="col-7">
              Alan graduated in Accounting before switching focus to software development and analytics. He has worked in tech, data and analytics for almost twenty years. 
              <br /><br />
              As a data analyst, analytics manager and data consultant, Alan has built up a wealth of knowledge and experience in many industries, including:
              <br /><br />
              <ul>
                <li>Banking</li>
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>E-commerce</li>
                <li>Health and Fitness</li>
              </ul>

              He specialises in finding the intersection of business expertise and analytics to really create value for clients. 
              From investigating large datasets to bringing the power of automation to business processes, he firmly believes 
              in the life-changing potential of data and technology.
              <br /><br />
              Alan writes a data blog called <a href="https://simpleanalytical.com">Simple Analytical</a> where he shares regular hints, tips, stories and strategies to help 
              build readers into better data analysts. He is also a contributor to industry leading websites such as Towards Data Science and Hacker Noon.
              
                <div className="social-holder">
                  <Twitter />
                  <LinkedIn />
                </div>
              </div>
            </div>              


            <h2 className="home__section__header">Get In Touch.</h2>
              <p>
                Want more information on any of the data services we offer? 
                <br /><br />
              <a href="/contact" className="button">Book a free consultation now</a>
              </p>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
