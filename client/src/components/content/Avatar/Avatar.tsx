import clsx from 'clsx'
import React from 'react'

type SizeOptions = "6" | "8" | "10" | "12" | "14" | "16" | "20" | "24" | "28" | "32"

export type AvatarProps = {
    size?: SizeOptions
    src?: string | null
    square?: boolean
    initials?: string
    alt?: string
    className?: string
}

export function Avatar({
                           size = "8",
                           src = null,
                           square = false,
                           initials,
                           alt = '',
                           className,
                           ...props
                       }: AvatarProps & React.ComponentPropsWithoutRef<'span'>) {

    const renderInitials = () => {
        if (initials) return (
            <svg
                className="select-none fill-current text-[48px] font-medium uppercase"
                viewBox="0 0 100 100"
                aria-hidden={alt ? undefined : 'true'}
            >
                {alt && <title>{alt}</title>}
                <text x="50%" y="50%" alignmentBaseline="middle" dominantBaseline="middle" textAnchor="middle"
                      dy=".125em">
                    {initials}
                </text>
            </svg>
        )
    }
    const renderAvatarImage = () => {
        if (src) return (
            <img src={src} alt={alt}/>
        )
    }

    const renderInsetBorder = () => {
        return (
            <span className="ring-1 ring-inset ring-black/5 dark:ring-white/5 forced-colors:outline"
                  aria-hidden="true"/>
        )
    }

    const sizeClass = `size-${size}`

    return (
        <span
            data-slot="avatar"
            className={clsx(
                sizeClass,
                className,
                // Basic layout
                'inline-grid align-middle *:col-start-1 *:row-start-1',
                // Add the correct border radius
                square ? 'rounded-[20%] *:rounded-[20%]' : 'rounded-full *:rounded-full'
            )}
            {...props}
        >
            {renderInitials()}
            {renderAvatarImage()}
            {renderInsetBorder()}
    </span>
    )
}

interface AvatarGroupProps {
    avatarData: AvatarProps[]
    className?: string
    bgColor?: {
        light: string
        dark: string
    }
    size?: SizeOptions
    space?: "2" | "4" | "6"
}

export function AvatarGroup({
                                avatarData,
                                className,
                                bgColor = {light: "ring-white", dark: "ring-zinc-900"},
                                size = "8",
                                space = "2"
                            }: AvatarGroupProps) {
    return (
        <div className={clsx(className, `flex space-x-${space}`)}>
            {avatarData.map((avatar, index) => (
                <Avatar key={index} {...avatar} size={size}
                        className={`ring-2 ${bgColor?.light} dark:${bgColor?.dark}`}
                />
            ))}
        </div>)
}