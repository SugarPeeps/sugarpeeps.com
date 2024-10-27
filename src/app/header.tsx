import React from "react";
import Nav from "../components/nav";
import { Button, Logo, Address, Phone, InstagramLink, FacebookLink } from "../components/structure";

export default function Header() {
    return (
        <div>
            <div className="bg-black flex flex-row justify-around">
                <Button href="/appointments">Book Now</Button>
            </div>

            <header className="bg-blue flex flex-col items-center">
                <div className="flex flex-col container md:flex-row gap-10 justify-between items-center md:items-start py-10">
                    <Logo />
                    <Address />
                    <div className="contact">
                        <Phone />
                        <p>Appointment Only</p>
                    </div>
                    <ul className="flex flex-row gap-2">
                        <li><InstagramLink/></li>
                        <li><FacebookLink/></li>
                    </ul>
                </div>
            </header>

            <nav className="bg-blue-dark py-10 md:py-6 px-10 md:px-20 mb-14">
                <Nav className="flex flex-col md:flex-row justify-start items-center md:items-start gap-8 container mx-auto"
                    linkClassName="hover:text-red uppercase text-white"
                    linkActiveClassName="border-b-2 border-red"
                    />
            </nav>
        </div>
    )
}
