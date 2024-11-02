'use client'
import AboutUs from "./(components)/AboutUs";
import Banner from "./(components)/header/Banner";
import BestSellers from "./(components)/BestSellers";
import CakesAndSweets from "./(components)/CakesAndSweets";
import ClientTestimonials from "./(components)/ClientTestimonials";
import Footer from "./(components)/Footer";
import SpecialGallery from "./(components)/SpecialGallery";
import WhatMakesUsSpecial from "./(components)/WhatMakesUsSpecial";
import { useSession } from "next-auth/react"
import { TUser } from "@/types/index";



export default function Home() {
  const { data: session } = useSession()

  const user=session?.user as TUser

  return (
    <main>

        <Banner user={user}/>
        <AboutUs />
        <CakesAndSweets />
        <BestSellers />
        <WhatMakesUsSpecial />
        <ClientTestimonials />
        <SpecialGallery />
        <Footer />
    </main>
  );
}

