import React from 'react';
import './Footer.css'

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all'
    },
    {
        text: 'Active',
        id: 'active'
    },
    {
        text: 'Completed',
        id: 'completed'
    }
]

const Footer = ({amount, activeFilter, changeFilter}) => {
    return (
        <div>
            {/* <span className="counter">{`${amount} Tasks left`}</span> */}
            <div className="buttons__container">{FILTERS_BTN.map(({text, id}) => <button className="submit_button" key = {id} onClick={() => changeFilter(id)} key={id}>{text}</button>)}</div> 
        </div>
    )
}

export default Footer;