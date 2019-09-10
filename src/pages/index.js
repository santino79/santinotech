import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class STIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Business analytics and data analysis services to help your business grow"
          keywords={[`blog`, `data`, `analytics`, `business`]}
        />

        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1 className="bigText">Think business analytics is just for the big boys?<br />Think again.</h1>
            <h3>We can help you get to know your best customers better. Starting today.</h3>
            
            <p>
              <br />
              <a href="/contact" className="button">Book your free introductory call</a>
            </p>

            <img src="/undraw_predictive_analytics_kf9n.png" alt="Man drawing graph on board" />

            <h2 className="home__section__header">Becoming an ethical, data-driven business doesn't happen by accident.</h2>
            <h3>But you don't have to do it on your own.</h3>
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
                  Let's cut out the technical jargon. We work with you to make your business run better. Automating 
                  boring processes to free up your highly skilled team members. Building reporting systems that let 
                  you put your finger on the pulse of your business - right when you need it.
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
              <h2 class="home__big__header">Want to find out more?</h2>
              <br />
              <a href="/contact" className="button">Book a free consultation now</a>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default STIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
