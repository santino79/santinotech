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
            <h1 className="u-textLeft">Get In Touch</h1>

            <div className="u-textLeft">

              <p>
                Complete the contact form below and we'll get back to you as soon as possible.
              </p>

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
                  <button type="submit">Send</button>
                </p>
              </form>

              

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
