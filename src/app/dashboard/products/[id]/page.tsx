import { FC } from 'react'

interface IProps {
    params: { id: string };
}

const SingleProduct: FC<IProps> = ({ params: { id }}): JSX.Element => {
    return (
        <ul>
            <h3>Product Info</h3>
            <li>ID: {id}</li>
        </ul>
    )
}

export default SingleProduct