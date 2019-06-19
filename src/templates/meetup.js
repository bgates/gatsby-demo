import React from "react"
import { graphql } from "gatsby"

export default ({ pageContext: { meetup } }) => (
  <section>
    <h1>{meetup.title}</h1>
    <p>{meetup.group}</p>
  </section>
)

export const meetupQuery = graphql`
  query($title: String!) {
    meetupsJson(title: { eq: $title }) {
      title
      group
    }
  }
`
