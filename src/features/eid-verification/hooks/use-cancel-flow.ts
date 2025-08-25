import { useCallback } from 'react'
import { logger } from '../../../services/logger'

/**
 * Returns a function that cancels the current AA2 Flow if any is running
 * and disconnects the SDK
 */
export const useCancelFlow = () => {
  const cancelFlow = useCallback(async () => {
    try {
      // await AA2CommandService.stop({ msTimeout: AA2_TIMEOUTS.STOP })
    } catch (e) {
      logger.log(e)
    }
  }, [])

  return cancelFlow
}
