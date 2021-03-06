import React from 'react';
import styles from './Barrage.css';
import EmojiItem from 'components/Emoji/EmojiItem.jsx';
import CategoryItem from 'components/CategoryItem';

const getBarrage = (props) => {
    switch (props.type) {
        case 'emoji':
        const asi = props.content.split('+') ;
            return (
                <EmojiItem xais={asi[0]} yais={asi[1]} />
            )
        
        case 'screen':
            let items = [];
            console.log(props.content, props)
            JSON.parse(props.content).forEach((item, key) => {
                items.push(<CategoryItem filterSwitch={false} key={`${item.roomId}${key}`} type="screen" item={item} />)
            })

            return <div className={styles.share}>{ items }</div>;

        case 'log':
            return <span>欢迎<strong style={{color: props.user.color}}>{` ${props.user.username}` }</strong>!</span>
            
        default:
            return props.content
    }
}

export default (props) => {
    const namecolor = props.color || '#fff';
    const barrage = getBarrage(props);
    const typeText =  props.type == 'screen' ? '正在看' : '';
    const typeTitle = props.type == 'log' ? true : false; 

    return (
        <li>
            {/*{props.mmr ? <span className={styles.playerMmr}>{props.mmr}</span> : ''}*/}

            {
                typeTitle ? '' : <span  className={styles.playerName} style={{color: namecolor}}>{props.nickname || '弹幕大神'}{typeText}: </span>
            }
            
            { barrage }
        </li>
    )
}