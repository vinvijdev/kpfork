import React from 'react'
import { ModalScreen } from '../../../components/modal-screen/modal-screen'
import { ModalScreenHeader } from '../../../components/modal-screen/modal-screen-header'
import { useTestIdBuilder } from '../../../services/test-id/test-id'


export type EidServiceProviderDetailsScreenProps = {
  onBack: () => void
  onClose: () => void
}

export const EidServiceProviderDetailsScreen: React.FC<EidServiceProviderDetailsScreenProps> = ({
  onBack,
  onClose,
}) => {
  const { buildTestId } = useTestIdBuilder()

  return (
    <ModalScreen testID={buildTestId('eid_serviceProviderDetails')}>
      <ModalScreenHeader
        testID={buildTestId('eid_serviceProviderDetails_title')}
        titleI18nKey="eid_serviceProviderDetails_title"
        onPressClose={onClose}
        onPressBack={onBack}
      />
    </ModalScreen>
  )
}
