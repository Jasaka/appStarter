import React from "react";
import {
    Button as HeadlessButton,
    ButtonProps as HeadlessButtonProps
} from "@headlessui/react";
import {Link} from "@/components/control/Link/Link";
import clsx from "clsx";
import {TouchTarget} from "@/components/control/Button/Button";
import {Badge, BadgeProps} from "@/components/content/Badge/Badge";

export const BadgeButton = React.forwardRef(function BadgeButton(
  {
    color = 'zinc',
    className,
    children,
    ...props
  }: BadgeProps & { children: React.ReactNode } & (HeadlessButtonProps | React.ComponentPropsWithoutRef<typeof Link>),
  ref: React.ForwardedRef<HTMLElement>
) {
  let classes = clsx(
    className,
    'group relative inline-flex rounded-md focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500'
  )

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </Link>
  ) : (
    <HeadlessButton {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </HeadlessButton>
  )
})