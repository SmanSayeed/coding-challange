/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Hero from "@/components/Hero/Hero";
import { useAuth } from "@/firebase/auth";
import { useEffect, useState } from "react";
export default function Home() {
  const { authUser, isLoading } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(authUser);
    if (!isLoading && authUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between "> */}
      <Hero />
      <div className="card-group">
        <div className="card">
          <h1 className="title">Static design problem</h1>
          <p className="details">
            Mr X has a car business. He needs a website to show his cars list,
            car details, contact and visit information and details of his shop.
            Also, he needs a personal page in this website, where customer will
            know about him in details. Make a website for him
          </p>
          <p className="hints">
            Hints: Design a static website with the pages Mr X needs. Try to do
            your best. use any of these : html, css / scss / bootstrap /
            tailwind etc. you can use little bit JS if necessary but it is
            optional.
          </p>

          <ul className="short-details">
            <li>Challange category: static website </li>
            <li>Duration: 7 days </li>
            <li>Begin at: coming soon</li>
          </ul>

          <button className="card-btn">Accept challange!</button>
        </div>

        <div className="card">
          <h1 className="title">Interactive design problem</h1>
          <p className="details">
            Dipjol is a villain. he wants to kidnap some australian cows. But
            Hero Manna appears to him as a thorn. Now make a web app, from where
            only Dipjol can kidnap Australian cows, but Manna can make the cows
            free.
          </p>
          <p className="hints">
            Hints: Design a one page web application with Javascript where there
            will be image of Dipjol, Manna and at least 8 Australian cows. If
            you select Dipjol and then select any cows from a box, it will move
            the cows to dipjols box. but if you select manna and the select any
            cows from dipjols box, it will revert that cow in its initial place.
            Use Javascript / Jquery / React JS / Next JS any thing you want
          </p>
          <ul className="short-details">
            <li>Challange category: static website </li>
            <li>Duration: 7 days </li>
            <li>Begin at: coming soon</li>
          </ul>
          <button className="card-btn">Accept challange!</button>
        </div>
      </div>
      {/* </main> */}
    </>
  );
}
