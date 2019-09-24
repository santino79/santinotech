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
          title="I help small teams solve their difficult data problems"
          keywords={[`digital`, `transformation`, `technology`, `services`, `data`, `analytics`, `business`]}
        />
        <div className="Index__Hero">
          <div className="MainContent">

            <div className="u-textCenter">
              <h1 className="bigText">I help small teams solve their difficult data problems.</h1>
              
                <br />
                <a href="/contact" className="button">Get in touch to find out more</a>

            </div>
        </div>
      </div>


      <div className="Column">
          <div className="MainContent">
            
          <div className="u-textCenter">
            <h2 className="home__section__header">
            Becoming a data-informed business isn't easy.
            </h2>
            <h3>I can help build yours from the ground up.</h3>

              I specialise in helping small teams harness the power of data and technology to reach their potential quickly.
              <br /><br />
              No jargon. No BS. No blinding you with (data) science. 
              Just solving your data problems as we find them. 
              And helping you use your data to get to know your best customers better.

            </div>
          </div>
        </div>

        <div className="MainStripe1">
          <div className="MainContent">

              <div className="row">
                <div className="col-5">
                <img src="/laptops-on-tables-900x600.jpg" alt="Laptops on tables" />
                </div>
                <div className="col-7">
                <h2 className="home__big__header">How Can I Help?</h2>
                <p>
                  I work with you to make your business run better and grow faster.
                   We'll build your data roadmap and strategy together. Get the proper infrastructure in place to make 
                  sure your finger is on the pulse of your business. And cut through the noise to find which signals 
                  you really need to listen to.
                  <br /><strong>It really is as simple as that.</strong>
                </p>
                </div>
              </div>              

            </div>
          </div>


        <div className="MainStripe2">
          <div className="MainContent">

            <div className="u-Textleft">

              <div className="row">
                <div className="col-7">
                  
                  <h2 className="home__big__header">What gets measured, gets managed.</h2>
                  <p>
                    But that doesn't mean drowning your management team in endless reports and dashboards. The key is 
                    finding which indicators really are key to your business performance - then making sure you 
                    have all of the insights you need to use that information to power up your business.
                   </p> 
                </div>
                <div className="col-5">
                <img src="/laptop-notebook-graph.jpg" alt="Laptop, notebook and graph" />

                </div>
              </div>              

            </div>

          </div>
        </div>        


        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
              <h2 className="home__big__header">Want to find out more?</h2>
              <br />
              <a href="/contact/" className="button">Book a free consultation now</a>
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
