import React, { useCallback, useEffect } from 'react'
import { Platform } from 'react-native'
import { createRouteConfig } from '../../../navigation/utils/create-route-config'
import { modalCardStyle } from '../../../theme/utils'
import { EidErrorAlert } from '../components/eid-error-alert'
import { useCloseFlow } from '../hooks/use-close-flow'
import { useHandleGestures } from '../hooks/use-handle-gestures'
import { EidNFCDisabledScreen } from './eid-nfc-disabled-screen'
import { EidNFCNotSupportedScreen } from './eid-nfc-not-supported-screen'

export const EidNFCNotSupportedRouteName = 'EidNFCNotSupported'

export type EidNFCNotSupportedRouteParams = undefined

export const EidNFCNotSupportedRoute: React.FC = () => {
  const { closeFlow } = useCloseFlow()

  useEffect(() => {
    if (Platform.OS === 'android') {
      // AA2WorkflowHelper.isNfcEnabled().then(result => setNfcIsDisabled(result === false))
    }
  }, [])

  const onClose = useCallback(async () => {
    await closeFlow()
  }, [closeFlow])

  useHandleGestures(onClose)

  return (
    <>
      <EidErrorAlert error={null} />
      {false ? (
        <EidNFCNotSupportedScreen onClose={onClose} />
      ) : (
        <EidNFCDisabledScreen onClose={onClose} />
      )}
    </>
  )
}

export const EidNFCNotSupportedRouteConfig = createRouteConfig({
  name: EidNFCNotSupportedRouteName,
  component: EidNFCNotSupportedRoute,
  options: { cardStyle: modalCardStyle },
})
