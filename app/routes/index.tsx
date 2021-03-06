import type { LinksFunction, MetaFunction } from 'remix'
import { Link } from 'remix'
import stylesUrl from '../styles/index.css'

export let links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon,ico',
      type: 'image/x-icon',
    },
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: "Remix: So great, it's funny",
    description: 'Remix jokes app. Learn Remix and laugh at the same time!',
  }
}

export default function IndexRoute() {
  return (
    <div className='container'>
      <div className='content'>
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='jokes'>Jokes!</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
