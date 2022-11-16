import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import style from './MainPage.module.css'
import React, {FC} from "react";
import { BsCalendarDate } from 'react-icons/bs';
const authorName='Andrey'

const data = Array.from({ length: 100 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `Stable Diffusion 1.4 fine-tuning on real photos for making realistic avatars `,
    author:`Author: ${authorName}`,
    countNumber:`${i}. `,
    date:`12.03.2022`,
    raiting:`23`
}));
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
export const MainPage:FC = () => {
    return (
        <List
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 20,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text={item.raiting} key="list-vertical-star-o" />,
                        <IconText icon={BsCalendarDate} text={item.date} key="list-vertical-like-o" />,
                    ]}

                >
                    <List.Item.Meta
                        className={style.listItem}
                        title={
                            <>
                                <span className={style.customCount}>{item.countNumber}</span>
                                <a className={style.customTitle} href={item.href}>{item.title}</a>
                            </>
                        }
                    />
                    {item.author}
                </List.Item>
            )}
        />
    );
};
