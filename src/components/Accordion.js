import React, { useState } from "react"
import { IconContext } from "react-icons"
import { FiPlus, FiMinus } from "react-icons/fi"
import * as styles from "../styles/accordion.module.css"

export default function Accordion() {
  const data = [
    {
      heading: "Website & Mobile Design",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tenetur quod labore animi accusamus nihil? Dolor, quis. Excepturi architecto laudantium odio dignissimos, illum sed consequuntur exercitationem reiciendis eveniet eos culpa!",
    },
    {
      heading: "Brand Logo & Designs",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto excepturi nam mollitia harum libero eaque non molestias magni esse alias dicta recusandae autem quidem, praesentium modi a consectetur laboriosam maxime.",
    },
    {
      heading: "Digital Experience",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem reiciendis rem ratione aut magni illo voluptates explicabo a, eligendi repellendus voluptas, adipisci fugiat optio temporibus aliquid nemo, nulla assumenda provident.",
    },
  ]

  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    } else {
      setClicked(index)
    }
  }

  return (
    <IconContext.Provider value={{ color: "#000", size: "20px" }}>
      <div className={styles.accordionWrapper}>
        <div>
          {data.map((item, index) => {
            return (
              <div>
                <div
                  onClick={() => toggle(index)}
                  key={index}
                  className={styles.headingWrapper}
                >
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  <p>{item.heading}</p>
                </div>
                {clicked === index ? (
                  <div>
                    <p>{item.body}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </IconContext.Provider>
  )
}
