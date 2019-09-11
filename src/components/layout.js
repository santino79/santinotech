import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './seo'
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
        <SEO 
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <div className="Header">
          <Banner />
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
