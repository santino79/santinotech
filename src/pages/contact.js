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
          title="Get In Touch"
          keywords={[`blog`, `data`, `analytics`, `business`, `contact`]}
        />

        <div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">
            <h1>Get In Touch</h1>
              <p>
                Complete the contact form below and I'll get back to you as soon as possible.
              </p>

              <div className="ash-form">
                <form name="contact" method="POST" data-netlify="true" action="/contact-success">
                <input type="hidden" name="form-name" value="contact" />  
                <p>
                  <label><strong>Your Name:</strong></label>
                  <br />
                  <input type="text" name="name" />   
                </p>
                <p>
                  <label><strong>Your Email:</strong></label>
                  <br /> <input type="email" name="email" />
                </p>
                <p>
                  <label><strong>Message:</strong></label>
                  <br /><textarea name="message" cols="40" rows="8"></textarea>
                </p>
                <p>
                  <button type="submit" className="ash-button">Send</button>
                </p>
              </form>
              </div>
              

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
