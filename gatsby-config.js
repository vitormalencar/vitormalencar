/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Vitor Alencar`,
    author: `Vitor Alencar`,
    keywords: `Vitor Alencar, vitormalencar, personal website, blog, developer, tech,pwa,web`,
    description: `Developer and speaker, focused on new and scalable technologies like progressive web apps, functional programming and hybrid apps`,
    siteUrl: `https://www.vitormalencar.com/`,
    talks: [
      {
        name: "Immutable Data With Immer",
        link: "https://speakerdeck.com/vitormalencar/immutable-data-with-immer",
        description:
          "Using immutable data structures provides many benefits, including making your code easier to reason about and less prone to bugs.",
      },

      {
        name: "Progressive web apps",
        link:
          "https://speakerdeck.com/vitormalencar/getting-started-with-progressive-web-apps",
        description:
          "Complete how to get started with Progressive Web Apps and build amazing and powerful web applications, for mobile and web.",
      },
      {
        name: "Functional Programming",
        link: "https://slides.com/robertovitormaia/deck-4-13-15/fullscreen",
        description:
          "How to write functional javascript, functional concepts for  creating less code, and avoiding bugs, and heaving more fun !",
      },
      {
        name: "Hybrid app development.",
        link: "https://speakerdeck.com/vitormalencar/ionic-rocks",
        description:
          "Introduction to ionic framework and its incredible tools,hybrid application development might be the right choice!",
        image: "",
      },
    ],
    experiences: [
      {
        name: "Opinary",
        duration: "2017 - CURRENT",
        role: "Front-End Engineer",
        link: "https://Opinary.com",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTry0M76E5lHG8nc5hC8UQQWM4l93XQMIS1IypM28ISWfHJL9d",
        description:
          "As part of the product team I have helped develop tools that help publishers and brands reach, understand and convert their most valuable audiences, using React, Redux ,Sagas, Flow, Reselect and other cutting edge tools in the Front End, we create resilient services that receive more than 5 million users per week",
      },
      {
        name: "Agenda Edu",
        duration: "2015 - 2017",
        role: "Front-End Engineer",
        link: "https://agendaedu.com/",

        image:
          "https://jornadaedu.com.br/wp-content/uploads/2017/10/ae-frame-agenda-edu-lancamento-blog.png",
        description:
          "Developing web and mobile applications in Javascript  using (React - new projects and Angular - old projects), webpack SASS, HTML, Mocha, for client-side and Node.js and Ruby and Rails on server-side",
      },
      {
        name: "Mil Technology",
        duration: "2014 - 2015",
        role: "Front-End Developer",
        link: "http://miltecnologia.com.br/",
        image:
          "https://www.sketchappsources.com/resources/source-image/material-chart-dashboard.jpg",
        description:
          "Creating innovative enterprise resource planning (ERP) projects using HTML, CSS and JS to create single page applications (SPA) with Angular.js, also working on APIs using Ruby and Rails",
      },
    ],
    projects: [
      {
        name: "DEV IO FOUNDATION",
        link: "https://github.com/deviofoundation",
        description:
          "The main idea of DEVIO Foundation is to unite all development groups in one place, making it possible to contribute actively to the growth of local community development.",
        image:
          "https://pbs.twimg.com/profile_images/576433782154113025/y4KXohXr.png",
      },
      {
        name: "GDG FORTALEZA",
        link: "http://gdgfortaleza.org",
        description:
          "Google developer groups (GDG), community built for developers interested in Google's technology; Everything from Android, Chrome, Drive, and Google Cloud platforms, to product APIs like the Cast API, Maps API, and YouTube API.",
        image:
          "https://pbs.twimg.com/profile_images/576433782154113025/y4KXohXr.png",
      },
      {
        name: "FRONT-IN FORTALEZA",
        link: "http://frontinfortaleza.com.br/",
        description:
          "Front-in Fortaleza (FIF) was born as a Front-End conference, today we are the second largest development event in Fortaleza-CE, Our goal is to unite the development community and share knowledge.",
        image:
          "https://pbs.twimg.com/profile_images/576433782154113025/y4KXohXr.png",
      },
    ],
    social: [
      {
        name: "Twitter",
        link: "https://twitter.com/vitormalencar",
      },
      {
        name: "Github",
        link: "https://github.com/vitormalencar",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/vitormalencar",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/vitormalencar",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        name: `Vitor Alencar`,
        short_name: `Vitormalencar`,
        display: `standalone`,
        theme_color: `#000000`,
        background_color: `#000000`,
        icon: "src/images/favicon.png",
      },
    },
  ],
}
