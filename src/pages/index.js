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
          title="Business analytics and data analysis services to help your business grow"
          keywords={[`blog`, `data`, `analytics`, `business`]}
        />
        <div className="MainStripe2">
          <div className="MainContent">

            <div className="u-textCenter">
              <h1 className="bigText">Meet your new analytics team.</h1>
              <h2>Top class data talent at your disposal when you need us.</h2>

              <p>
                <br />
                <a href="/contact" className="button">Book your introductory call today</a>
              </p>

            </div>
        </div>
      </div>


        <div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">

            <img className="u-textCenter" src="/undraw_predictive_analytics_kf9n.png" alt="Man drawing graph on board" />

            <h2 className="home__section__header">
            It's not easy becoming a data-driven business.</h2>
            <h3> We can help you build it from the ground up.</h3>

            <p>
              We are a boutique analytics consultancy. 
              We specialise in helping high growth start-ups and small corporate teams reach their potential quickly.
              <br /><br />
              No jargon. No BS. No blinding you with (data) science. Just solving your data problems as we find them. 
              And helping you use your data to get to know your best customers better.
            
            </p>

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
                <h2 className="home__big__header">How Can We Help?</h2>
                <p>
                  We work with you to make your business run better and grow faster.
                   We'll help build your data roadmap and strategy. Get the proper infrastructure in place to make 
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
                    <br /><br />
                    <a href="/services">Find out more about what we do.</a>
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
              <a href="/contact" className="button">Book a free consultation now</a>
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
