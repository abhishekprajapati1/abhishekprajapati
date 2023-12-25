import React, { SVGProps } from "react"

export type WrapperProps = {
    children?: React.ReactNode;
}

export interface IconInterface extends SVGAElement<SVGProps> {

}

export type SkillCardProps = {
    label: string;
    image: string;
    href: string;
}