import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }): JSX.Element => {
    const isLoggedIn = true;

    return isLoggedIn 
                ? <div>{children}</div> 
                : <div>login</div>;
}

export default DashboardLayout