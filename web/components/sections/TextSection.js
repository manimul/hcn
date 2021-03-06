import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

function TextSection(props) {
  const {heading, label, popout, text} = props

  return (
    <div className={styles.root}>
      <section className="md:max-w-xl p-6 mx-auto space-y-4">
        <div className={styles.label}>{label}</div>
        <h2 className={`text-3xl font-bold {styles.heading}`}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {popout && (
          <div className={`p-12 -mx-8 font-extrabold   ${styles.lightGradient}`}>
            <SimpleBlockContent blocks={popout} />{' '}
          </div>
        )}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  popout: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
