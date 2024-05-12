import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const SettingsTemplate: FC<IProps> = ({ children }): JSX.Element => <div>{children}</div>

export default SettingsTemplate