import { ReactNode } from "react";

export interface MenuItemProps {
   href: string,
   title: string,
   icon: JSX.Element,
   className?: string,
   isHover?: boolean,
   onClick?: () => void,
   children?: ReactNode,

}
