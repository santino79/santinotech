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
            <h4>We are not afraid to challenge the status quo.</h4>
            <img src="/undraw_analysis_4jis.png" alt="Man and woman doing analysis" />
          </div>

            <div className="u-textLeft">
            <h3>Santinotech is a boutique business analytics and data analysis consultancy.</h3>
  
            <h2 className="home__section__header">Our Purpose.</h2>
            
              <h3>The Problem.</h3> 
              The robots are coming to take our jobs. 
              Algorithms will replace all humans rendering us worthless in the workplace. 
              And your data is being collected, snooped on and sold to whoever pays the highest price <strong>EVERYWHERE</strong> you go.
              <br /><br />
              Sounds pretty grim, doesn't it?
              <h3>It doesn't have to be that way.</h3> 
              We support businesses and organisations moving towards a more data-driven future. 
              That doesn't mean getting rid of all of their human workers and handing the keys over to the machines though.
              <br /><br />
              It's about melding the business knowledge and experience of your people with the right tools, systems and technology 
              to make real differences to your customers lives.
              <br /><br />
              Business isn't a battle of "us" vs. "them" where it's all about fleecing the customer for as much as we can 
              and doing a runner with the loot. That's a zero sum game. There are no winners there, only losers.
              <h3>Our Mission.</h3>
              Our mission is to help promote <strong>data literacy</strong> and the <strong>ethical use of data and technology</strong> across the world.
              <br /><br />
              That means improving how we capture, collate, transform and use data to build better data-driven businesses. 
              Ones where our customers don't have to worry that we are spying on them or selling their personal data. 
              Places where technology improves their customer experience, not destroys it.
              <br /><br />
              We help transform businesses and deliver results - the right way. Simple as that.


            <h2 className="home__section__header">Our Team.</h2>
            <h2>Alan Hylands (Director)</h2>

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

            <h2>The Network.</h2>              
            We work with a network of seasoned professionals and consultants across a range of disciplines. From data engineers and data analysts to UI/UX consultants and marketing experts.
            <h4>Join our network.</h4>
            If you would like to get added to our roster of partners for future projects please <a href="/contact">get in touch</a>.

            </div>
          </div>
        </div>


        <div className="MainStripe1">
          <div className="MainContent u-textCenter">

            <h2 className="home__section__header">Want to learn more?</h2>
                <p>
                  Get in touch for more information on any of the data services we offer and 
                  find out how we can help push your business to a new level. 
                  <br /><br />
                <a href="/contact" className="button">Book a free consultation now</a>
                </p>
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
