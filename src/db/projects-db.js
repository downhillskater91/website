import React from 'react';
import { GiAmericanFootballHelmet, GiSyringe, GiDiscGolfBasket, GiBasketballJersey, GiSoccerKick, GiRobotAntennas, GiAmericanFootballPlayer } from 'react-icons/gi';
import { AiOutlineStock } from 'react-icons/ai';

import '../styles/page.css';

export const projects = [
  {
    id: 1,
    category: "Sports",
    title: "ESPN Fantasy Football",
    description: "Explore your ESPN league's fantasy football data all in one place.",
    icon: <GiAmericanFootballHelmet size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/fantasy-football/",
    active: true
  },
  {
    id: 2,
    category: "Sports",
    title: "Fantasy Premier League",
    description: "A better version of the Premier League's 'FPL' app.",
    icon: <GiSoccerKick size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/fpl/home/",
    active: true
  },
  {
    id: 3,
    category: "Sports",
    title: "Sleeper Dynasty",
    description: "Sleeper Dynasty League website",
    icon: <GiAmericanFootballPlayer size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/sleeper/home/",
    active: false
  },
  {
    id: 4,
    category: "Finance",
    title: "Stock Market Analysis",
    description: "Check out various stock charts for stocks on the US stock exchange.",
    icon: <AiOutlineStock size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/stock-market-analysis/",
    active: true
  },
  {
    id: 5,
    category: "Health",
    title: "MN COVID Vaccine",
    description: "Look for available vaccine appointments in Minnesota",
    icon: <GiSyringe size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/mn-covid/",
    active: false
  },
  {
    id: 6,
    category: "Sports",
    title: "Disc Golf Tracker",
    description: "Keep track of your disc golf courses, scores, discs, and more.",
    icon: <GiDiscGolfBasket size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/disc-golf",
    active: false
  },
  {
    id: 7,
    category: "Sports",
    title: "NBA Analytics",
    description: "Explore NBA data.",
    icon: <GiBasketballJersey size="3rem" color="maroon" className="mb-2" />,
    link: "/projects/nba-analytics",
    active: true
  }
];
