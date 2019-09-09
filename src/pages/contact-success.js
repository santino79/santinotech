import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Message Sent Successfully"
          keywords={[`blog`, `data`, `analytics`, `business`, `contact`]}
        />

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1 className="bigText">Message Sent Successfully.</h1>

              <h2 className="home__section__header">Thanks! We'll get back to you soon.</h2>

              <h3>Company Information</h3>
              Santinotech Ltd is a limited company registered in Northern Ireland (Company Reg No: NI654431).
              <br />
              Our registered office is 20 Upper Water St, Newry BT34 1DJ.

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default ContactIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
