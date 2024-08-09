import React from 'react'
import './portfolio.css'
import Portfolio1 from "../../assets/learners-migrated.png"
import Portfolio2 from "../../assets/Learners.png"
import Portfolio3 from "../../assets/CoordiMate.png"
import Portfolio4 from "../../assets/Sally.png"
import Portfolio5 from "../../assets/Memorise.png"
import Portfolio6 from "../../assets/CommunityConnects.png"
import Portfolio7 from "../../assets/TrailBlaze.png"

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "LEARNers- Migrated Version",
    tags: ["React", "Postgres", "Express", "Node", "TypeScript", "HTML", "CSS"],
    internal: "https://github.com/pra-navi/cvwo_submission",
    external: "https://github.com/pra-navi/cvwo_submission/blob/main/README.md"
  },
  {
    id: 2,
    image: Portfolio2,
    title: "LEARNers",
    tags: ["React", "MongoDB", "Express.js", "Node.js", "JavaScript", "HTML", "CSS"],
    internal: "https://github.com/pra-navi/orbital-mern",
    external: "https://learners-react.vercel.app/posts"
  },
  {
    id: 3,
    image: Portfolio3,
    title: "CoordiMate",
    tags: ["Java", "JavaFX", "CSS"],
    internal: "https://github.com/AY2324S1-CS2103T-T10-2/tp",
    external: "https://github.com/AY2324S1-CS2103T-T10-2/tp/releases/tag/v1.4"
  },
  {
    id: 4,
    image: Portfolio4,
    title: "Sally",
    tags: ["Java", "JavaFX", "CSS"],
    internal: "https://github.com/pra-navi/ip",
    external: "https://github.com/pra-navi/ip/releases/tag/A-Release"
  },
  {
    id: 5,
    image: Portfolio5,
    title: "MEMOrise",
    tags: ["HTML", "CSS"],
    internal: "https://github.com/suryanshkushwaha/lifehack23-MEMOrise",
    external: "https://lh23-memorise-1.vercel.app/"
  },
  {
    id: 6,
    image: Portfolio6,
    title: "CommunityConnects",
    tags: ["Figma", "UI/UX Design"],
    internal: "https://docs.google.com/presentation/d/1Q_3CfGWLCXcwvsiJYiWIs_aXCpiRKh7LUKhDRP4EssE/edit#slide=id.p",
    external: "https://www.figma.com/file/2708wfrF5b9qnR8NjTpUXn/CommunityConnects?type=design&node-id=0-1&mode=design&t=GuabWHXOOkZlS6yT-0"
  },
  {
    id: 7,
    image: Portfolio7,
    title: "TrailBlaze",
    tags: ["Figma", "UI/UX Design"],
    internal: "https://docs.google.com/presentation/d/14_AgCwxbRhx6QOEVm31qfzke03UtflOI6a9tY1Qrr9I/edit#slide=id.p",
    external: "https://www.figma.com/file/hEoKhfHCSBoZSZaxMHlyTr/Trailer-App-For-Theatre?type=design&node-id=0-1&mode=design&t=s9qfoPbXUmeQdaF3-0"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio - Purely Pet Projects</h2>
      <h5>Other private projects done under business needs can be discussed separately</h5>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, tags, internal, external}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="tags">
                  {
                    tags.map((tag, index) => {
                      return (
                        <span key={index} className="tag">#{tag}</span>
                      )
                    })
                  }
                </div>
                <div className="portfolio_item-cta">
                  <a href={internal} className="btn" target="_blank">Internal</a>
                  <a href={external} className="btn btn-primary" target="_blank">External</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio