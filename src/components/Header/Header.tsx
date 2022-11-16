import style from './Header.module.css'
import { PageHeader } from 'antd';
export const Header = () => {
    return (
        <h1>
            <PageHeader
            className="site-page-header"
            title="Hacker News"
        />
        </h1>


    );
};
