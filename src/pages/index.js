import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="We build stronger small businesses"
          keywords={[`digital`, `transformation`, `technology`, `services`, `data`, `analytics`, `business`]}
        />

      <div className="Column">
          <div className="MainContent">
            
          <div className="u-textCenter">
            <h2>It's not personal...it's strictly business.</h2>

            <p>
              <Link to="/contact">Get in touch</Link>
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
