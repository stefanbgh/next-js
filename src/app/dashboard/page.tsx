'use client';

import { FC } from 'react'

import { ErrorBoundary } from '@/error/ErrorBoundary'
import { resetFunc } from '@/helpers/resetFunc'

import dynamic from 'next/dynamic';
const Link = dynamic(() => import("next/link"));
const Error = dynamic(() => import("./error"));
const DashboardLayout = dynamic(() => import("./layout"));

const Dashboard: FC = (): JSX.Element => {
    return (
        <DashboardLayout>
            <ErrorBoundary fallback={ 
                <Error 
                    error={"Something went wrong!"} 
                    reset={resetFunc}
                /> 
            }>
                <p>Welcome to the Dashboard</p>
                <p>The value of customKey is: {process.env.nextCustomKey}</p>
                <Link href={"/dashboard/products"}>Products</Link>
                <Link href={"/dashboard/settings"}>Settings</Link>
            </ErrorBoundary>
        </DashboardLayout>
    )
}

export default Dashboard