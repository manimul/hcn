import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ImageSection(props) {
  const {heading, alt, label, text, popout, image, cta} = props

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <section
        className={`container mx-auto flex flex-col  ${
          alt ? 'md:flex-row-reverse	' : 'md:flex-row '
        }`}
      >
        <div className="md:w-1/2 ">
          <img
            src={builder.image(image).auto('format').width(2000).url()}
            className={`${styles.image}`}
            alt={heading}
          />
        </div>
        <div className="md:w-1/2 p-12 flex-col  space-y-4">
          <div className="text-sm uppercase text-cyan-800 font-bol">{label}</div>
          <h2 className="text-4xl font-bold">{heading}</h2>
          {text && <SimpleBlockContent blocks={text} />}
          {popout && (
            <div
              className={`p-12 font-extrabold   ${alt ? 'md:-mr-32 	' : 'md:-ml-32 '}  ${
                styles.lightGradient
              }`}
            >
              <SimpleBlockContent blocks={popout} />{' '}
            </div>
          )}
          {cta && cta.route && <Cta {...cta} />}
        </div>
      </section>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  alt: PropTypes.boolean,
  text: PropTypes.array,
  popout: PropTypes.array,

  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
}

export default ImageSection
