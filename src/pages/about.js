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
          title="About Santinotech"
          keywords={[`blog`, `data`, `analytics`, `business`,`about`]}
          
        />

        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1 className="bigText">About</h1>
            <h4>I am not afraid to challenge the status quo.</h4>
            <img src="/undraw_analysis_4jis.png" alt="Man and woman doing analysis" />
          </div>

            <div className="u-textLeft">
            
  
            <h2 className="home__section__header">My Purpose.</h2>
              Helping small teams solve their difficult data problems.
            
              <h3>The Problem.</h3> 
              The robots are coming to take our jobs. 
              Algorithms will replace all humans rendering us worthless in the workplace. 
              And your data is being collected, snooped on and sold to whoever pays the highest price <strong>EVERYWHERE</strong> you go.
              <br /><br />
              Sounds pretty grim, doesn't it?
              <h3>It doesn't have to be that way.</h3> 
              I support businesses and organisations moving towards a digital, data-informed future. 
              That doesn't mean getting rid of all of their human workers and handing the keys over to the machines.
              <br /><br />
              It's about melding the business knowledge and experience of your people with the right tools, systems and technology 
              to make real differences to your customers lives.
              <br /><br />
              Business isn't a battle of "us" vs. "them" where it's all about fleecing the customer for as much as we can 
              and doing a runner with the loot. That's a zero sum game. There are no winners there, only losers.
              <h3>My Mission.</h3>
              My mission is to promote <strong>data literacy</strong> and the <strong>ethical use of data and technology</strong> across the world. 
              And help build some damn fine businesses I can be proud to be associated with while I'm doing that.
              <br /><br />
              That means improving how we all capture, collate, transform and use data to build better data-informed businesses. 
              Ones where our customers don't have to worry that we are spying on them or selling their personal data. 
              Places where technology improves their customer experience, not destroys it.
              <br /><br />
              I help transform businesses and deliver results - the right way. Simple as that.


            <h2 className="home__section__header">Who I Am.</h2>
            <h2>Alan Hylands</h2>

            <div className="row">
              <div className="col-5">
              <img src="/profile-pic2.jpg" alt="Alan Hylands" />
              <h2 className="bigQuote">"I prefer simple solutions to complex problems. That doesn't mean easy.
              <br /><br />
              It just means cutting right down to the most important 
              business problem and using your data to solve it."</h2>
              </div>
              <div className="col-7">
              I graduated in Accounting before switching focus to software development and analytics. 
              I have worked in tech, data and analytics for almost twenty years. 
              <br /><br />
              As a data analyst, analytics manager and data consultant, 
              I have built up a wealth of knowledge and experience in many industries, including:
              <br /><br />
              <ul>
                <li>Banking</li>
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>E-commerce</li>
                <li>Health and Fitness</li>
              </ul>

              I specialise in finding the intersection of business expertise and analytics to really create value for clients. 
              From investigating large datasets to bringing the power of digital automation to business processes, I firmly believe 
              in the life-changing potential of data and technology.
              <br /><br />
              I write a data blog called <a href="https://simpleanalytical.com">Simple Analytical</a> where I share regular hints, tips, stories and strategies to help 
              build readers into better data analysts. I am also a contributor to industry leading websites such as Towards Data Science and Hacker Noon.
              
                <div className="social-holder">
                  <Twitter />
                  <LinkedIn />
                </div>
              </div>
            </div>

            <h2>The Network.</h2>              
            I work with a network of seasoned professionals and consultants across a range of disciplines. From data engineers and data analysts to UI/UX consultants and marketing experts.
            <br /><br />
            If you would like to get added to the roster of partners for future projects please <a href="/contact/">get in touch</a>.

            </div>
          </div>
        </div>


        <div className="MainStripe1">
          <div className="MainContent u-textCenter">

            <h2 className="home__section__header">Want to learn more?</h2>
                <p>
                  Get in touch for more information on any of the data services I offer and 
                  find out how I can help push your business to a new level. 
                  <br /><br />
                <a href="/contact/" className="button">Book a free consultation now</a>
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
