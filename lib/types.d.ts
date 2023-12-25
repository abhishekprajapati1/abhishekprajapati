import React, { SVGProps } from "react"

export type WrapperProps = {
    children?: React.ReactNode;
}

export interface IconInterface extends SVGProps<SVGSVGElement> {

}

export type SkillCardProps = {
    label: string;
    image: string;
    href: string;
}