'use client';

import { FC, MouseEventHandler} from 'react';
import { useRouter } from 'next/navigation';
import wallpaper from "@/assets/wallpaper.jpg";

import dynamic from 'next/dynamic';
const Image = dynamic(() => import("next/image"));

import "./style.scss"

const Home: FC = (): JSX.Element => {
    const router = useRouter();

    const handleRouter: MouseEventHandler = () => router.push('/dashboard');

    return (
        <div className='home'>
            <button
                type="button"
                onClick={handleRouter}
                className="home__button"
            >
                Open Dashboard
            </button>
            <Image
                src={wallpaper}
                alt="Wallpaper.jpg"
                className="home__image"
                priority
            />
        </div>
    )
}

export default Home