import React, { PureComponent }  from 'react'
import Link from 'next/link'

export default class Sell extends PureComponent {
  render() {
    return (
      <div>
        <p>sell</p>
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
      
    )
  }
}