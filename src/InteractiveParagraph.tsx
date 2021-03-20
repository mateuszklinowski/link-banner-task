import React, { ReactNode } from 'react'
import { LinkLike, LinkLikeProps } from './LinkLike'

type Interaction = [string, LinkLikeProps]

interface InteractiveParagraphProps {
    content: string
    interactiveWords: {
        [key: string]: LinkLikeProps
    }
}

const changeWordsToLink = (interactions: Interaction[]) => (word: string, index: number): ReactNode => {
    const interaction = interactions.find(([match]) => match === word)

    if (!interaction) {
        return word
    }

    const [, props] = interaction

    return (
        <LinkLike {...props} key={index}>
            {word}
        </LinkLike>
    )
}

const joinWithSpaces = (el: ReactNode, curr: ReactNode): ReactNode => [el, ' ', curr]

export const InteractiveParagraph = (props: InteractiveParagraphProps) => {
    const interactions = Object.entries(props.interactiveWords)
    const words = props.content.split(' ')

    return (
        <div>
            <p>{words.map(changeWordsToLink(interactions)).reduce(joinWithSpaces)}</p>
        </div>
    )
}
