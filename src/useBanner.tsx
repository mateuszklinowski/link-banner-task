import { BannerState } from './App'
import React, { ReactNode } from 'react'
import { Banner } from './Banner'

type RenderBanner = (onClick: (state: BannerState) => void) => ReactNode

export const useBanner = (bannerState: BannerState): RenderBanner => {
    return (onClick) => {
        switch (bannerState) {
            case 'COFFEE':
                return (
                    <Banner
                        label="Love coffee?"
                        link={{
                            label: 'Buy Coffee Now',
                            url: 'https://www.google.com/search?q=coffee',
                        }}
                        onClick={() => onClick(bannerState)}
                    />
                )
            case 'ESPRESSO':
                return (
                    <Banner
                        label="Learn to make espresso"
                        link={{
                            label: 'Sign Up Now',
                            url: 'https://www.google.com/search?q=coffee',
                        }}
                        onClick={() => onClick(bannerState)}
                    />
                )
            case null:
                return null
            default:
                throw new Error('Incorrect banner state')
        }
    }
}
