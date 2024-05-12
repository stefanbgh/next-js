import { FC } from 'react'

const Link = dynamic(() => import("next/link"));
import dynamic from 'next/dynamic';
import "./style.scss"

const NotFound: FC = (): JSX.Element => {
    return (
        <section className='not-found'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Back to Home</Link>
        </section>
    )
}

export default NotFound