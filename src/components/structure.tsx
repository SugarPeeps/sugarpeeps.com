import React from 'react';
import {
    ContactAddress,
    ContactAddress2,
    ContactCity,
    ContactEmail,
    ContactPhone,
    FacebookUrl,
    InstagramUrl,
} from "../constants";
import Image from "next/image";
import { Facebook, Instagram } from "react-feather";

export function Container({ children } : { children: React.ReactNode[] | React.ReactNode }) : React.ReactNode {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}

export function ColumnContainer({ children } : { children: React.ReactNode[] | React.ReactNode }) : React.ReactNode {
    return (
        <div className="flex flex-col xl:flex-row container mx-auto">
            {children}
        </div>
    )
}

export function P({ children, center = false }: { children: React.ReactNode[] | React.ReactNode, center?: boolean }) : React.ReactNode {
    return (
        <p className={`mx-10 mb-8 leading-8 ${center ? "text-center" : "text-justify"}`}>{children}</p>
    )
}

export function H({ children } : { children: React.ReactNode[] | React.ReactNode }) : React.ReactNode {
    return (
        <h2 className="text-xl mx-10 mt-10 pb-8">{children}</h2>
    )
}

export function List({ children } : { children: React.ReactNode[] | React.ReactNode }) : React.ReactNode {
    return (
        <ul className="ml-4 px-10 list-disc">{children}</ul>
    )
}

export function Item({ children } : { children: React.ReactNode[] | React.ReactNode }) : React.ReactNode {
    return (
        <li className="mb-4 leading-8">{children}</li>
    )
}

export function Space() : React.ReactNode {
    return (
        <div className="py-4"/>
    )
}

type LinkProps = {
    children: React.ReactNode[] | React.ReactNode;
    url: string;
    newWindow?: boolean;
    noColor?: boolean;
}

export function Link({ children, url, newWindow = false, noColor = false }: LinkProps) : React.ReactNode {
    const className = noColor ? "hover:text-red" : "text-red hover:text-black";
    return (
        <a className={className} href={url} target={newWindow ? "_blank" : null}>{children}</a>
    )
}

export type ButtonProps = {
    children: React.ReactNode[] | React.ReactNode;
    onClick?: () => void;
    href?: string;
}

export function Button({ children, onClick, href }: ButtonProps) : React.ReactNode {
    return (
        <div className="p-2 bg-red">
            <a className="text-white" href={href || "#"} onClick={onClick}>{children}</a>
        </div>
    )
}

export function Address() : React.ReactNode {
    return (
        <address className="not-italic">
            <a href={`https://google.com/maps/?q=${ContactAddress}`} target="_blank" className="hover:text-red">
                <div className="font-bold">{ContactAddress}</div>
                <div>{ContactAddress2}</div>
                <div>{ContactCity}</div>
            </a>
        </address>
    )
}

export function Logo() : React.ReactNode {
    return (
        <a href="/">
            <Image src="/images/pinup.png" alt="Sugar Peeps logo" width={240} height={126} priority={true} />
        </a>
    )
}

export type EmailProps = {
    children?: React.ReactNode[] | React.ReactNode;
    [key: string]: any;
}

export function Email({ children, ...props }: EmailProps) : React.ReactNode {
    return (
        <Link url={`mailto:${ContactEmail}`} {...props}>
            { children ? children : ContactEmail }
        </Link>
    )
}

export function Phone() : React.ReactNode {
    return (
        <a href={`tel:${ContactPhone}`} className="hover:text-red">
            {ContactPhone}
        </a>
    )
}

export function FacebookLink() {
    return (
      <Link url={FacebookUrl} newWindow noColor><Facebook/></Link>
    )
}

export function InstagramLink() {
    return (
      <Link url={InstagramUrl} newWindow noColor><Instagram/></Link>
    )
}
