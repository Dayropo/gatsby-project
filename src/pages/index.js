import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/home.module.css"
import Accordion from "../components/Accordion"
import Slider from "../components/Slider"

export default function Home({ data }) {
  console.log(data)
  const testimonials = data.testimonials.nodes

  return (
    <Layout>
      <div>
        <div className={styles.header}>
          <GatsbyImage
            image={getImage(data.header.childImageSharp.gatsbyImageData)}
          />
        </div>
        <div className={styles.sectionOneWrapper}>
          <div className={styles.sectionOne}>
            <div className={`${styles.cardWrapper} ${styles.cardOne}`}>
              <h4>IDEATION, STRATEGY & IMPLEMENTATION</h4>
              <h1>eBusiness Consulting</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardTwo}`}>
              <h4>DESIGN & DEVELOPMENT</h4>
              <h1>Digital Product</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardThree}`}>
              <h4>GROWTH DEVELOPMENT</h4>
              <h1>Product Marketing</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwoWrapper}>
          <div className={styles.sectionTwo}>
            <h4>WHO WE ARE</h4>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              cupiditate iure possimus laboriosam molestias maxime consectetur
              asperiores reprehenderit?
            </h1>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <div className={styles.sectionThreeImageWrapper}>
            <GatsbyImage
              image={getImage(data.accordion.childImageSharp.gatsbyImageData)}
            />
          </div>
          <div className={styles.sectionThreeAccordionWrapper}>
            <h1>Forward thinking team of designers and developers</h1>
            <Accordion />
          </div>
        </div>
        <div className={styles.sectionFourWrapper}>
          <div className={styles.sectionFour}>
            <GatsbyImage
              image={getImage(data.budweiser.childImageSharp.gatsbyImageData)}
            />
            <GatsbyImage
              image={getImage(data.nescafe.childImageSharp.gatsbyImageData)}
            />
            <GatsbyImage
              image={getImage(data.lg.childImageSharp.gatsbyImageData)}
            />
            <GatsbyImage
              image={getImage(data.cocacola.childImageSharp.gatsbyImageData)}
            />
            <GatsbyImage
              image={getImage(
                data.naijawinelovers.childImageSharp.gatsbyImageData
              )}
            />
            <GatsbyImage
              image={getImage(data.lagos.childImageSharp.gatsbyImageData)}
            />
          </div>
        </div>
        <div className={styles.sectionFiveWrapper}>
          <div className={styles.sectionFive}>
            <div className={styles.sectionFiveText}>
              <h4>TESTIMONIALS</h4>
              <h1>What experts have to say</h1>
            </div>
            <div className={styles.sectionFiveSlider}>
              <Slider testimonials={testimonials} />
            </div>
          </div>
        </div>
        <div className={styles.sectionSixWrapper}></div>
        <div className={styles.sectionSevenWrapper}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    header: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "header.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          aspectRatio: 2
          transformOptions: { cropFocus: CENTER }
          placeholder: BLURRED
        )
      }
    }
    accordion: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "accordion.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          aspectRatio: 2.3
          transformOptions: { cropFocus: CENTER }
          placeholder: BLURRED
        )
      }
    }
    budweiser: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "budweiser.png" }
    ) {
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER })
      }
    }
    nescafe: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "nescafe.png" }
    ) {
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER })
      }
    }
    lg: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "lg.png" }
    ) {
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER })
      }
    }
    cocacola: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "cocacola.png" }
    ) {
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER })
      }
    }
    naijawinelovers: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "naijawinelovers.png" }
    ) {
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER })
      }
    }
    lagos: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "lagos.png" }
    ) {
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER })
      }
    }
    testimonials: allMarkdownRemark(
      sort: { fields: frontmatter___department }
    ) {
      nodes {
        frontmatter {
          department
          slug
          name
          position
          avatar {
            childImageSharp {
              gatsbyImageData(transformOptions: { cropFocus: CENTER })
            }
          }
        }
        html
        id
      }
    }
  }
`
