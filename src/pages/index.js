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
          title="We build stronger small businesses"
          keywords={[`digital`, `transformation`, `technology`, `services`, `data`, `analytics`, `business`]}
        />

      <div className="Column">
          <div className="MainContent">
            
          <div className="u-textCenter">
            <h2>
             Data + Technology = Power.
            </h2>

            <hr />
              
              <h2>Want to find out more?</h2>
              
              <a href="/contact/">Get in touch</a> to see what we are working on now or how we could help you bring 
              the power of data and technology to your small business.
              
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
