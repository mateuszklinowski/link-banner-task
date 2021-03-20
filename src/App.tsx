import React, { useState } from 'react'
import './App.css'
import { InteractiveParagraph } from './InteractiveParagraph'
import { useBanner } from './useBanner'

const data = `I like coffee but coffee can require a lot of equipment to prepare, depending on the style you'd like.
 One of the simplest ways to make coffee, which requires little equipment, is cold brew.
  Cold brew is made with a pitcher, ground coffee, water, and a strainer / filter.
  On the other hand, espresso is more complicated and usually requires an espresso machine, which can be quite expensive.`

export type BannerState = 'COFFEE' | 'ESPRESSO' | null

function App() {
    const [bannerState, setBannerState] = useState<BannerState>(null)
    const [visited, setVisited] = useState<BannerState>(null)
    const renderBanner = useBanner(bannerState)

    const handleVisit = (state: BannerState) => {
        setVisited(state)
    }

    const handleClick = (state: BannerState) => {
        setBannerState(state)
    }

    return (
        <div className="App">
            <header className="App-header">
                <InteractiveParagraph
                    content={data}
                    interactiveWords={{
                        coffee: {
                            onClick: () => handleClick('COFFEE'),
                            visited: visited === 'COFFEE',
                        },
                        espresso: {
                            onClick: () => handleClick('ESPRESSO'),
                            visited: visited === 'ESPRESSO',
                        },
                    }}
                />
            </header>
            {renderBanner(handleVisit)}
        </div>
    )
}

export default App
