import React, { useCallback, useState } from 'react'
import { createRouteConfig } from '../../../navigation/utils/create-route-config'
import { modalCardStyle } from '../../../theme/utils'
import { CancelEidFlowAlert } from '../components/cancel-eid-flow-alert'
import { useHandleGestures } from '../hooks/use-handle-gestures'

export const EidAboutVerificationRouteName = 'EidAboutVerification'

export type EidAboutVerificationRouteParams = undefined

export const EidAboutVerificationRoute: React.FC = () => {
  const [cancelAlertVisible, setCancelAlertVisible] = useState(false)

  const onClose = useCallback(() => {
    setCancelAlertVisible(true)
  }, [])

  useHandleGestures(onClose)

  return (
    <>
      <CancelEidFlowAlert visible={cancelAlertVisible} onChange={setCancelAlertVisible} />
    </>
  )
}

export const EidAboutVerificationRouteConfig = createRouteConfig({
  name: EidAboutVerificationRouteName,
  component: EidAboutVerificationRoute,
  options: { cardStyle: modalCardStyle },
})
