import React from 'react'
import ReactDOM from 'react-dom'

interface BannerProps {
    label: string
    link: {
        label: string
        url: string
    }
    onClick: () => void
}

export const Banner = (props: BannerProps) => {
    const { label, link, onClick } = props

    return ReactDOM.createPortal(
        <div className="Banner">
            <h4 className="header--Banner">{label}</h4>
            <a className="link--Banner" href={link.url} target="_blank" rel="noreferrer" onClick={onClick}>
                {link.label}
            </a>
        </div>,
        document.querySelector('#ad-banner') as Element
    )
}
