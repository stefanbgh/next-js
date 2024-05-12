'use client';

import { FC, MouseEventHandler, useEffect } from 'react'

interface IProps {
    error: string;
    reset: () => void;
}

const Error: FC<IProps> = ({ error, reset }): JSX.Element => {
    useEffect(() => console.log(error), [error]);

    const handleReset: MouseEventHandler = (): void => reset();

    return (
        <div>
            <h2>{error}</h2>
            <button onClick={handleReset}>
              Try again
            </button>
        </div>
    )
}

export default Error