import { FC, Suspense } from 'react'

import dynamic from 'next/dynamic'
const Link = dynamic(() => import("next/link"));
const Loading = dynamic(() => import("./loading"));

const Products: FC = (): JSX.Element => {
    return (
        <article>
            <h3>Product One</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, architecto.</p>
            <Link href={"/dashboard/products/1"}>View details</Link>
            <Suspense fallback={<Loading />} />
        </article>
    )
}

export default Products