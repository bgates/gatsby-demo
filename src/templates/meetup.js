import React from "react"

export default ({ pageContext: { meetup } }) => (
  <section>
    <h1>{meetup.title}</h1>
    <p>{meetup.group}</p>
  </section>
)
