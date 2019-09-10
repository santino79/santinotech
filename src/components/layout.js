import React from 'react'
import SEO from './seo'
import { StaticQuery, graphql } from 'gatsby'

import Banner from './banner'
import Navigation from './navigation'
import Footer from './footer'

import '../graphql/fragments'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          ...Index_siteMetadata
        }
      }
    `}
    render={data => (
      <>
        <div className="Header">
          <Banner />
          <SEO />
        </div>
          <div className="Navigation">
          <Navigation />
        </div>
        <div className="BodyContent">
          {children}
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </>
    )}
  />
)
