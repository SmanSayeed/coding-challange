import { ProblemCategoryItem, ProblemItem } from "./interfaces";

export const problemCategories: ProblemCategoryItem[] = [
  {
    title: "Static Design",
    categoryId: "static",
    details: "HTML and CSS related tasks only",
    enableStatus: true,
    bg: "bg-green-600",
    titleColor: "text-green-600",
  },
  {
    title: "Interactive Design",
    categoryId: "interactive",
    details: "Solve awesome, funny and smart tasks with Javascript",
    enableStatus: true,
    bg: "bg-orange-600",
    titleColor: "text-orange-600",
  },
  {
    title: "Advance Interactive Design",
    categoryId: "Advance Interactive",
    details: "Hei expert! React js, next js, vue js and more tasks here!",
    enableStatus: false,
    bg: "bg-green-600",
    titleColor: "",
  },
];

export const problems: ProblemItem[] = [
  {
    categoryId: "static",
    problemId: "4",
    title: "Figma to landing page",
    tags: ["html", "css", "flexbox", "bootstrap", "tailwind", "any"],
    level: "beginner",
    target: [
      "Learning Figma to web desgin",
      "Practicing pixel perfect web design",
    ],
    description: `
    <p>
      Design a pixel perfect website from the following figma. 
      <br/>
      Consider only desktop view
      <br/>
      Figma Link: <a className="problem-link" href="https://www.figma.com/file/pMMw5PBGIa64Hb06tl0vk9/Tripma---Flight-booking-web-app-(Community)?type=design&node-id=740%3A19142&t=wOkymWNwktm5NTfW-1" target="_blank">Click me to open</a>
      <br/>
    </p>
    `,
  },
  {
    categoryId: "static",
    problemId: "1",
    title: "Responsive Header",
    tags: ["html", "css", "flexbox", "media-query"],
    level: "beginner",
    target: [
      "Learning media-query",
      "Practicing flexbox",
      "practicing position",
    ],
    description: `
    <p>
      Design a responsive header with following structure:
      <br/>
      Desktop mode (min width 600px)
      <ul>
      <li>
        A logo at left side
      </li>
      <li>
        A navbar at middle including four menu items (Home,About,Contact,Blog)
      </li>
      <li>
      A search bar and profile icon at right side
      </li>

      <br/>
      Mobile mode (max width 600px)
      <ul>
      <li>
        A logo at left side
      </li>
      <li>
      A hamburger menu icon at right side
      </li>
      <li>
      If hover or click on hamburger menu icon, a drawer from left side will open. It will cover 80% width of the viewport.
      </li>
      <li>
      In that drawer, logo will be at middle top. then there will be the search bar. After that Menus will be at center and at bottom there will be the profile icon
      </li>
      </ul>
    </p>
    `,
  },
  {
    categoryId: "static",
    problemId: "2",
    title: "Car shop",
    tags: [
      "html",
      "css",
      "scss",
      "flexbox",
      "media-query",
      "bootstrap",
      "tailwind",
    ],
    level: "beginner",
    target: [
      "Learn to make a complete project",
      "Writing requirements ",
      "practicing all parts of html and css",
      "practicing responsiveness",
      "practicing different libraries and techs used in static website ",
    ],
    description: `
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
    `,
  },
  {
    categoryId: "interactive",
    problemId: "3",
    title: "Dipjol and Manna",
    tags: ["javascript"],
    level: "beginner",
    target: [
      "Learning javascript",
      "Practicing DOM",
      "practicing onclick event handler",
    ],
    description: `
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
    `,
  },
];
