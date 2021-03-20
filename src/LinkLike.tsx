import React, { PropsWithChildren } from 'react'

export interface LinkLikeProps {
    onClick: () => void
    visited?: boolean
}

export const LinkLike = ({ children, onClick, visited }: PropsWithChildren<LinkLikeProps>) => (
    <button className={`button--LinkLike ${visited ? 'button--LinkLike__visited' : ''}`} onClick={onClick}>
        {children}
    </button>
)
