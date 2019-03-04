import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import Particles from 'react-particles-js'

const ParcticlesWrapper = ({children, bg, position, width, height}) => (
  <Fragment>
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3
            }
          },
          color: { value: '#2e9cca' },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out'
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: 'bubble'
            },
            onclick: {
              enable: false,
              mode: 'repulse'
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
            },
            repulse: {
              distance: 400,
              duration: 4
            }
          }
        }
      }}
      style={{
        position: position,
        zIndex: '0',
        backgroundColor: bg,
        backgroundImage:
          'linear-gradient(to bottom,  #0f2027, #203a43, #2c5364)',
        width: width,
        height: height
      }}
    />
  </Fragment>
)

ParcticlesWrapper.propTypes = {
  bg: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

ParcticlesWrapper.defaultProps = {
  bg: '#02aab0',
  position: 'fixed',
  height: '100%',
  width: '100%'
}

export default ParcticlesWrapper