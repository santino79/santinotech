import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Building ethical, data-driven businesses from the ground up"
          keywords={[`digital`, `transformation`, `technology`, `services`, `data`, `analytics`, `business`]}
        />
        <div className="MainStripe2">
          <div className="MainContent">

            <div className="u-textCenter">
              <h1 className="bigText">¡Viva la Revolución Digital!</h1>
              <h2>Building ethical, data-driven businesses from the ground up.</h2>

              <p>
                <br />
                <a href="/contact" className="button">Book your introductory call today</a>
              </p>

            </div>
        </div>
      </div>



      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
