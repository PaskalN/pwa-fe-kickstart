import React, { FC } from 'react'

import { Global } from '@emotion/react'

export const Fonts: FC = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'MCMFavorit-Regular';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-Regular.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-Regular.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-RegularItalic';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-RegularItalic.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-RegularItalic.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-Bold';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-Bold.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-Bold.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-BoldItalic';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-BoldItalic.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-BoldItalic.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-Book';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-Book.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-Book.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-BookItalic';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-BookItalic.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-BookItalic.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-Light';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-Light.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-Light.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-LightItalic';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-LightItalic.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-LightItalic.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-Medium';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-Medium.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-Medium.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-MediumItalic';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-MediumItalic.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-MediumItalic.woff') format('woff');
    }

    @font-face {
      font-family: 'MCMFavorit-BoldExtended';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('fonts/mcm/MCMFavorit-BoldExtended.woff2') format('woff2'),
         url('fonts/mcm/MCMFavorit-BoldExtended.woff') format('woff');
    }

    video.noControlsFullscreen::-webkit-media-controls-enclosure {
      display: none !important;
    }
  `}
  />
)
