import React, { useState } from "react"
import * as styles from "../styles/slider.module.css"
import { IconContext } from "react-icons"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Slider({ testimonials }) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null
  }

  return (
    <IconContext.Provider value={{ size: "24px" }}>
      <div className={styles.sliderWrapper}>
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index}>
              {index === current && (
                <div className={styles.slider}>
                  <div className={styles.header}>
                    <div className={styles.avatar}>
                      <GatsbyImage
                        image={getImage(
                          testimonial.frontmatter.avatar.childImageSharp
                            .gatsbyImageData
                        )}
                      />
                    </div>
                    <p>{testimonial.frontmatter.department}</p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: testimonial.html }} />
                  <div className={styles.name}>
                    {testimonial.frontmatter.name}
                  </div>
                  <div>{testimonial.frontmatter.position} </div>
                </div>
              )}
            </div>
          )
        })}
        <div className={styles.icons}>
          <FiArrowLeftCircle className={styles.leftArrow} onClick={prevSlide} />
          <FiArrowRightCircle onClick={nextSlide} />
        </div>
      </div>
    </IconContext.Provider>
  )
}
