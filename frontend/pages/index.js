import React, { PureComponent }  from 'react'
import Link from 'next/link'

export default class Root extends PureComponent {
  render() {
    return (
      <div>
        <p>hello there</p>
        <Link href="/sell">
          <a>sell</a>
        </Link>
      </div>
    )
  }
}