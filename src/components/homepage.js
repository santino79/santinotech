/**
 * Homepage component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

function HomePage() {
  return (
    <StaticQuery
      query={HomePageQuery}
      render={data => {
        return (
          <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1 className="bigText">Business analytics isn't just for the big boys.</h1>
            <h3>Get to know your best customers better and push your business to the next level.</h3>
            <h4>We can help you do that. Starting today.</h4>
            <img src="/undraw_predictive_analytics_kf9n.png" alt="Man drawing graph on board" />
            </div>

            <div className="u-textLeft">
              <Link name="services" />
              <h2 className="home__section__header">What We Do.</h2>

                Making sense of the mountain of data crushing your business isn't easy. And every day you find yourself
                getting buried under more and more of it.
                <br /><br />
                Excel spreadsheets. Emails. I.T. systems that don't talk to other systems. And staff who can't get a proper handle on who they should be serving and why.
                <br /><br />
                It's a mess but you're too deep in the weeds to know where to start fixing it.
                You know the answers to some of your biggest business problems are in there.
                <br /><br />
                But how do you find them? <strong>That's where we come in.</strong>

                <h3><em>Data strategy.</em></h3>
                A drains-up audit of what you have, what you need and how you should go about getting it.
                We'll look at your current systems and processes and work out a roadmap for how you can get control of your data back. 
                And get it working for you.

                <h3><em>Data engineering.</em></h3>
                Getting the right data in and making sure it is stored in the right place is key to a successful data strategy.
                Data warehouses, ETL pipelines, cleaning, wrangling, transforming and distributing - 
                we make sure your business analytics are operating off a solid foundation.


                <h3><em>Data analysis and insights.</em></h3>
                Collecting all of the data in the world is only of any use to your business if you can identify the 
                key insights it holds. From business intelligence reporting systems to data visualization, we get the 
                most important indicators of your business's performance in front of you and the people in your team 
                that can actually pull the levers to make a difference.

                <h3><em>Data product development.</em></h3>
                We can turn the firehose of data flowing through your business every day into a long-term competitive 
                advantage that really pushes your business to the next level.
                <br /><br />
                That can be customer facing web and mobile app development to gather the right data in the right way from your customers.
                 Or automated data models that use data science, machine learning and artificial intelligence to create real value 
                 from your company's internal data assets.

                <h3><em>Data literacy and technical skills training.</em></h3>
                All of the automation and technology available today is only as good as the people interpreting what it is telling them.
                We offer in-house workshops and training courses to build data literacy in your management team and up-skill your 
                business subject matter experts to become data analysts themselves.

              <Link name="about" />
              <h2 className="home__section__header">Who We Are.</h2>

              <h3 className="who__caps">Alan Hylands</h3>
              <p>
                <img src="/profile-pic.jpg" alt="Alan Hylands" />
              </p>
              Alan graduated in Accounting before switching focus to software development and analytics. He has worked in tech, data and analytics for almost twenty years. 
              <br /><br />
              As a data analyst, analytics manager and data consultant, Alan has built up a wealth of knowledge and experience in many industries, including:
              <ul>
                <li>Banking</li>
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>E-commerce</li>
                <li>Health and Fitness</li>
              </ul>

              He specialises in finding the intersection of business expertise and analytics to really create value for clients. 
              From investigating large datasets to bringing the power of automation to business processes, he firmly believes 
              in the life-changing potential of data and technolgoy.
              <br /><br />
              Alan writes a data blog called <a href="https://simpleanalytical.com">Simple Analytical</a> where he shares regular hints, tips, stories and strategies to help 
              build readers into better data analysts. He is also a contributor to industry leading websites such as Towards Data Science and Hacker Noon.

              <Link name="contact" />
              <h2 className="home__section__header">Get In Touch.</h2>
              <p>
                This is a brief description of how to get in touch.
              </p>

            </div>
          </div>
        </div>
          )
      }}
    />
  )
}

const HomePageQuery = graphql`
  query HomePageQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default HomePage
