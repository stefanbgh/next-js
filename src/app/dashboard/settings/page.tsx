import { FC } from 'react'

import { routeParam } from '@/constants/routeParam'

import dynamic from 'next/dynamic'
const SettingsTemplate = dynamic(() => import("./template"));

const Settings: FC = (): JSX.Element => 
    <SettingsTemplate key={routeParam} >
        <div>These are settings</div>
    </SettingsTemplate>

export default Settings