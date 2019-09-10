import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ServIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="What We Do"
          keywords={[`blog`, `data`, `analytics`, `business`,`services`]}
        />

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1 className="bigText">What We Do</h1>
            <img src="/undraw_financial_data_es63.png" alt="Man drawing graph on board" />
            </div>

            <div className="u-textLeft">
                <h2 className="home__section__header">Feel like you are drowning in a data lake?</h2>

                Making sense of the mountain of data crushing your business isn't easy. And every day you find yourself
                getting buried under more and more of it.
                <br /><br />
                Excel spreadsheets. Emails. I.T. systems that don't talk to other systems. And staff who can't get a proper handle on who they should be serving and why.
                <br /><br />
                It's a mess but you're too deep in the weeds to know where to start fixing it.
                You know the answers to some of your biggest business problems are in there.
                <br /><br />
                But how do you find them? <strong>That's where we come in.</strong>

                <h2>SERVICES.</h2>

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

export default ServIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
