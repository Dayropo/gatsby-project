import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <div className={styles.header}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className={styles.sectionOneWrapper}>
          <div className={styles.sectionOne}>
            <div className={`${styles.cardWrapper} ${styles.cardOne}`}>
              <h4>IDEATION, STRATEGY & IMPLEMENTATION</h4>
              <h2>eBusiness Consulting</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardTwo}`}>
              <h4>DESIGN & DEVELOPMENT</h4>
              <h2>Digital Product</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardThree}`}>
              <h4>GROWTH DEVELOPMENT</h4>
              <h2>Product Marketing</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwoWrapper}>
          <div className={styles.sectionTwo}>
            <h4>WHO WE ARE</h4>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              cupiditate iure possimus laboriosam molestias maxime consectetur
              asperiores reprehenderit?
            </h2>
          </div>
        </div>
        <div className={styles.sectionThreeWrapper}>
          <div className={styles.sectionThree}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Header {
    file(relativePath: { eq: "header-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
