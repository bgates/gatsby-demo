import React from "react"
import { Link } from "gatsby"

export default () => (
  <section>
    <h1>Hello world!</h1>
    <p>
      Open the DevTools Network tab and watch what happens when you mouse over a
      link.
    </p>
    <ul>
      <li>
        <Link to="page-2">Page 2</Link>
      </li>
      <li>
        <Link to="page-3">Page 3</Link>
      </li>
      <li>
        <Link to="page-4">Page 4</Link>
      </li>
    </ul>
  </section>
)
