import { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Michael Raffaele Senior Front End Developer Resume",
  description: "Michael Raffaele - Senior Front End Developer Resume",
};

export default function Resume() {
  return (
    <div className={styles.page}>
      <h1>Michael Raffaele Resume</h1>
      <h2>Contact Information</h2>
      <p>
        Email:{" "}
        <Link href="michael.w.raffaele@gmail.com">
          michael.w.raffaele@gmail.com
        </Link>
      </p>
      <p>
        Phone Number: <Link href="tel:0422 013 829">0422 013 829</Link>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="http://linkedin.com/in/michaelraffaele">
          linkedin.com/in/michaelraffaele
        </a>
      </p>
      <h2>Professional Summary</h2>
      <p>
        Senior Front End Developer with over 15 years&apos; experience
        delivering scalable, user-centric web applications using React,
        TypeScript, and GraphQL. Skilled in architecting design systems,
        establishing front-end standards, and mentoring developers to deliver
        accessible, performant interfaces. Combines strong technical leadership
        with a product-driven mindset - focused on improving delivery velocity,
        quality, and usability across complex, multi-team environments.
      </p>
      <h2>Skills & Technologies</h2>
      <p>Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS</p>
      <p>
        Frameworks & Libraries: React, Next.js, GraphQL, Angular (10+), Node.js
      </p>
      <p>
        Tooling & Testing: Webpack, Vite, Jest, Cypress, Storybook, Git, CI/CD
      </p>
      <p>
        Practices: Agile / Scrum, Code Reviews, Mentoring, Front-End
        Architecture
      </p>

      <h2>Work Experience</h2>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>REA Group (2021-Present)</h1>
        <h2>Senior UI Engineer (REAx)</h2>
        <p>
          Developing Property.com.au: a resilient React + GraphQL front-end
          application supported by a GraphQL Node.js experience API.
        </p>
        <p>
          As one of the founding developers in the REAx team, I played a pivotal
          role in shaping the codebase and development practices, enabling us to
          launch to market just eight months after forming. This included
          defining the project structure, accessibility direction, and
          establishing templates and workflows in Git and Jira.
        </p>
        <p>
          I&apos;ve led several major initiatives, including the design and
          deployment of a new Search Experience - a project with the critical
          requirement of maintaining and improving SEO rankings.
        </p>
        <p>
          I&apos;m a regular contributor to team knowledge-sharing sessions and
          actively mentor and support other developers.
        </p>
        <p>
          Beyond my immediate team, I serve as a co-admin for the UI Guild, lead
          workshops at our annual Tech Kickoff, and participate in recruitment
          through the Grad Open Home program. I&apos;m also part of the Hackdays
          crew, responsible for organising and running company-wide hackathons.
        </p>
        <h2>Senior UI Engineer / Lead Developer Secondment (Construct Kit)</h2>
        <p>
          Seconded to the Construct Kit platform team in late 2024 - REA&apos;s
          design system and component library powering over 100 applications.
        </p>
        <p>
          Key responsibilities included mentoring and supporting less-senior
          developers to deliver work efficiently and to standard.
        </p>
        <p>
          I enabled and supported the Privacy Kit team by creating space within
          Construct Kit for their living docs and establishing maintenance
          processes.
        </p>
        <p>
          Led an npm package renaming initiative across Construct Kit,
          coordinating with more than 10 teams and federating code changes into
          over five critical codebases.
        </p>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>Alinta Energy (2021)</h1>
        <h2>Senior Front End Developer</h2>
        <p>
          Contributed to the enCORE project, Alinta Energy&apos;s core system
          transformation program.
        </p>
        <p>
          As part of this team, my primary responsibility was upgrading a legacy
          AngularJS application to Angular 10+, improving maintainability and
          aligning with modern front-end standards.
        </p>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>carsales (2017-2021)</h1>
        <h2>Senior Front End Developer</h2>
        <p>
          Initially part of the Inchcape team, responsible for building
          Subaru&apos;s Build and Buy online product in React and later
          developing the replatform of subaru.com.au.
        </p>
        <p>
          Transitioned to the Dealer team to work on Autogate - carsales&apos;
          prospect and inventory management system - focusing on developing
          Angular applications and enhancing our internal front-end framework
          and component library, Seamless.
        </p>
        <p>
          Co-authored multiple cross-team initiatives, including the Hackathon
          Portal (used to run carsales Hackathon events), the carsales careers
          website, and an internal Tech Radar. Served as co-organiser of the
          Front End Developer Guild, a monthly internal forum featuring
          presentations and talks to share front-end knowledge.
        </p>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>
          Tribal Worldwide Melbourne (2014-2017)
        </h1>
        <h2>Senior Front End Developer</h2>
        <p>
          Over the course of my role as Senior Front End Developer I created
          countless landing pages and websites. My major contribution however,
          was the complete overhaul and implementation of modern front end
          development workflows. This enabled greater automation and rapid
          development leveraging reusable components across the client base.
        </p>
        <p>
          Major clients included Porsche, Maxwell & Williams, Momentum Energy,
          DefenceCare and Westpac.
        </p>
        <p>Examples of work:</p>
        <ul>
          <li>
            <Link href="https://momentumenergy.com.au">
              momentumenergy.com.au
            </Link>
          </li>
          <li>
            <Link href="https://maxwellandwilliams.com.au">
              maxwellandwilliams.com.au
            </Link>
          </li>
          <li>
            <Link href="https://defencecare.org.au/fightingnewenemies/">
              defencecare.org.au/fightingnewenemies/
            </Link>
          </li>
        </ul>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>JWT Melbourne (2013-2014)</h1>
        <h2>Front End Developer</h2>
        <p>
          I began at JWT Melbourne in March 2013. My first project was for Miele
          - a heavily customised WordPress website using every feature under the
          sun. It had an events manager and payment gateway with single page
          checkout process, which I later upgraded to enable shopping cart
          functionality.
        </p>
        <p>
          During my time at JWT I&apos;ve performed quite a few internal
          projects for the digital team. I came onboard as a front end developer
          but also performed wireframing, user journey mapping, WordPress
          development, server administration, and tech validation.
        </p>
        <p>
          I have worked on a number of projects for larger clients such as
          Melbourne Writers Festival, TAC, Miele, RAC, Shape Up Australia,
          Vegemite and Ford.
        </p>
        <p>Examples of work:</p>
        <ul>
          <li>mwf.com.au</li>
          <li>saferpplaters.com.au</li>
          <li>Monster-fy iOS App</li>
          <li>Monster-fy Android App</li>
        </ul>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>tkm9 (2012)</h1>
        <h2>Web Developer</h2>
        <p>
          My time at tkm9 began with a WordPress build. This project was for
          Greenbank Environmental and was a custom WordPress website making use
          of custom posts, taxonomy, navigation and two custom calculators.
        </p>
        <p>
          The majority of work was backend development geared towards capturing
          user data, logic for drawing prizes, uptime management and receiving
          data from experientials and then sending results as EDMs or posting to
          facebook etc. Most of this development was custom built using the
          CodeIgniter MVC framework.
        </p>
        <p>
          My role at tkm9 allowed me to work alongside other developers to
          interact with and implement a range of technologies such as augmented
          reality applications, iPad applications and also a deep dive into the
          Facebook Graph Api.
        </p>
        <p>
          tkm9 enabled me to to work with some major clients such including TAC,
          Collingwood Football Club, Sportsgirl, GPT, Kia and Fanta.
        </p>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>Intrepid Travel (2011)</h1>
        <h2>Front End Developer</h2>
        <p>
          I was contracted as a Front End Developer to Intrepid Travel for 6
          months.
        </p>
        <p>
          Intrepid were in the process of a massive redesign and were looking to
          migrate their entire website across to the open source content
          management system Drupal. I was responsive for developing the front
          end and also supported the marketing team with some design.
        </p>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>Web Force Five (2010)</h1>
        <h2>Front End Developer</h2>
        <p>
          I worked for 3 months at Web Force Five in the closing quarter of
          2010.
        </p>
        <p>
          I came on board to design the administrative area for their propriety
          content management system and to design client websites. I was
          responsible for meeting with clients to gather requirements and write
          the brief for upcoming projects.
        </p>
      </article>
      <article className={styles.experience}>
        <h1 className={styles.experienceTitle}>ROI.com.au (2008 - 2010)</h1>
        <h2>Senior Web Designer</h2>
        <p>
          I began at ROI.com.au as a Junior Web Designer in 2008. At first I was
          updating content and providing fixes for existing websites, but I
          quickly began designing and developing websites from the concept
          through to their implementation.
        </p>
        <p>
          In my time at ROI.com.au I completed in excess of 30 websites and
          Landing Pages. For most of these projects I was responsible for the
          Design, Development, Project Management and served as the direct
          contact with the client, often meeting with them to best plan a
          solution for their business. Typically these sites would be built
          using Joomla or WordPress.
        </p>
        <p>
          As well as developing client specific websites, I helped
          conceptualise, design and solely developed a new Real Estate marketing
          approach. Initially starting with the selling of &apos;Feature
          Properties&apos; - a series small single page websites aimed to
          promote an individual property by usage of clean, concise information
          and high quality photos. For one client in particular, this quickly
          grew into a website which showcased all of these properties placed on
          a satellite view of the Mornington Peninsula.
        </p>
        <p>
          The next phase was a project called &apos;Lifestyle Property.&apos; A
          real estate website where properties were categorised by their
          &apos;lifestyle&apos; type, eg: Rural, Coastal and Wineries. This
          website was again solely designed and developed by myself and aimed to
          further push the simple idea of the Feature Properties.
        </p>
        <p>
          I continually progressed at ROI.com.au until I eventually was promoted
          to a Senior Web Designer and was responsible for managing a small team
          of 3 designers/devlopers. During my time at ROI.com.au we had more
          than doubled in size and had been listed in the BRW Fast Starters
          (2009) and SmartCompany (2009).
        </p>
      </article>
      <h2>Education</h2>
      <h3>Victoria University of Technology (2006 - 2007)</h3>
      <p>Advanced Diploma of Multimedia (Interactive Media)</p>
      <h3>Victoria University of Technology (2005)</h3>
      <p>Certificate IV in Information Technology</p>
      <h3>St Pauls College (1999 - 2004)</h3>
      <p>Graduated Year 12</p>
      <h2>References</h2>
      <p>References available on request.</p>
    </div>
  );
}
