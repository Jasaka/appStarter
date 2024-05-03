import React from "react";
import {
    Button as HeadlessButton,
    ButtonProps as HeadlessButtonProps
} from "@headlessui/react";
import {Link} from "@/components/control/Link/Link";
import clsx from "clsx";
import {TouchTarget} from "@/components/control/Button/Button";
import {Avatar, AvatarProps} from "@/components/content/Avatar/Avatar";

export const AvatarButton = React.forwardRef(function AvatarButton(
  { size,
    src,
    square = false,
    initials,
    alt,
    className,
    ...props
  }: AvatarProps & (HeadlessButtonProps | React.ComponentPropsWithoutRef<typeof Link>),
  ref: React.ForwardedRef<HTMLElement>
) {
  let classes = clsx(
    className,
    square ? 'rounded-lg' : 'rounded-full',
    'relative focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500'
  )

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>
        <Avatar size={size} src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </Link>
  ) : (
    <HeadlessButton {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Avatar size={size} src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </HeadlessButton>
  )
})