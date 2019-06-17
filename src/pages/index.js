import React from "react"
import { Link } from "gatsby"

export default () => (
  <section>
    <h1>Hello Meetups!</h1>
    <p>
      Having these links hard-coded doesn't make much sense. We should move this
      file to the templates folder and have gatsby-node populate the links.
    </p>
    <ul>
      <li>
        <Link to="meetups/wordpress-orlando">WordPress-Orlando</Link>
      </li>
      <li>
        <Link to="meetups/onetug">ONETUG</Link>
      </li>
    </ul>
  </section>
)
