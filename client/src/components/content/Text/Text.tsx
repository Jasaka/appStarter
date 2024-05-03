import {clsx} from 'clsx'
import {Link} from '@/components/control/Link/Link'
import React from "react";

export function Text({className, ...props}: React.ComponentPropsWithoutRef<'p'>) {
    return (
        <p
            {...props}
            data-slot="text"
            className={clsx('text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400', className)}
        />
    )
}

export function TextLink({className, ...props}: React.ComponentPropsWithoutRef<typeof Link>) {
    return (
        <Link
            {...props}
            className={clsx(
                'text-zinc-950 underline decoration-zinc-950/50 data-[hover]:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white',
                className
            )}
        />
    )
}

export function Heading1({className, ...props}: React.ComponentPropsWithoutRef<'h1'>) {
    return (
        <h1
            {...props}
            className={clsx(
                'text-2xl font-semibold text-zinc-950 dark:text-white sm:text-3xl',
                className
            )}
        />
    )
}

export function Heading2({className, ...props}: React.ComponentPropsWithoutRef<'h2'>) {
    return (
        <h2
            {...props}
            className={clsx(
                'text-xl font-semibold text-zinc-950 dark:text-white sm:text-2xl',
                className
            )}
        />
    )
}

export function Heading3({className, ...props}: React.ComponentPropsWithoutRef<'h3'>) {
    return (
        <h3
            {...props}
            className={clsx(
                'text-lg font-semibold text-zinc-950 dark:text-white sm:text-xl',
                className
            )}
        />
    )
}

export function Heading4({className, ...props}: React.ComponentPropsWithoutRef<'h4'>) {
    return (
        <h4
            {...props}
            className={clsx(
                'text-base font-semibold text-zinc-950 dark:text-white sm:text-lg',
                className
            )}
        />
    )
}

export function Heading5({className, ...props}: React.ComponentPropsWithoutRef<'h5'>) {
    return (
        <h5
            {...props}
            className={clsx(
                'text-base font-medium text-zinc-950 dark:text-white sm:text-base',
                className
            )}
        />
    )
}

export function Heading6({className, ...props}: React.ComponentPropsWithoutRef<'h6'>) {
    return (
        <h6
            {...props}
            className={clsx(
                'text-sm font-medium text-zinc-950 dark:text-white sm:text-base',
                className
            )}
        />
    )
}

export function Strong({className, ...props}: React.ComponentPropsWithoutRef<'strong'>) {
    return <strong {...props} className={clsx(className, 'font-medium text-zinc-950 dark:text-white')}/>
}

export function Code({className, ...props}: React.ComponentPropsWithoutRef<'code'>) {
    return (
        <code
            {...props}
            className={clsx(
                className,
                'rounded border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white'
            )}
        />
    )
}
