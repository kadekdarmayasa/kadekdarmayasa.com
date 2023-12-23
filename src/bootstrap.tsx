/**
 * Lightrun agent setup
 */

import * as lightrun from 'lightrun'

lightrun.start({
  lightrunSecret: import.meta.env.VITE_LIGHTRUN_SECRET,
  apiEndpoint: import.meta.env.VITE_LIGHTRUN_ENDPOINT,
})
