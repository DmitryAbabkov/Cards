import React, {FC} from 'react';
interface Props {
    children?: React.ReactNode,
    title: string,
    description: string,
    link: string
}
const Card:FC<Props> = ({children,title, description, link}) => {
        return (
            <div className='card'>
                {children}
                <div className='card__detail'>
                    <h2 className='card__title'>{title}</h2>
                    <p className='card__descr'>{description}</p>
                    <a className='card__link'>{link}</a>
                </div>
            </div>
    );
}

export default Card;

