import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <section>
    <Img fluid={data.file.childImageSharp.fluid} alt="Meetup" />
    <h1>{data.meetupsJson.title}</h1>
    <p>{data.meetupsJson.group}</p>
  </section>
)

export const meetupQuery = graphql`
  query($group: String!, $image: String!) {
    meetupsJson(group: { eq: $group }) {
      title
      group
    }
    file(sourceInstanceName: { eq: "images" }, name: { eq: $image }) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          src
          srcSet
          sizes
          originalImg
        }
      }
    }
  }
`
