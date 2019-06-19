import React from "react"
import { Link, graphql } from "gatsby"

export default ({
  data: {
    allMeetupsJson: { nodes },
  },
}) => (
  <section>
    <h1>Hello Meetups!</h1>
    <ul>
      {nodes.map(meetup => (
        <li key={meetup.group}>
          <Link to={`/meetups/${meetup.group.toLowerCase()}`}>
            {meetup.group}
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

export const allMeetupsQuery = graphql`
  query {
    allMeetupsJson {
      nodes {
        group
      }
    }
  }
`
