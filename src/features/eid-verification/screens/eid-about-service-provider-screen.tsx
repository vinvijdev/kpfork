import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from '../../../components/button/button'
import { ModalScreen } from '../../../components/modal-screen/modal-screen'
import { ModalScreenFooter } from '../../../components/modal-screen/modal-screen-footer'
import { ModalScreenHeader } from '../../../components/modal-screen/modal-screen-header'
import { SvgImage } from '../../../components/svg-image/svg-image'
import { TranslatedText } from '../../../components/translated-text/translated-text'
import { useTestIdBuilder } from '../../../services/test-id/test-id'
import { HITSLOP } from '../../../theme/constants'
import { useTheme } from '../../../theme/hooks/use-theme'
import { spacing } from '../../../theme/spacing'

export type EidAboutServiceProviderScreenProps = {
  onProviderDetails: () => void
  onNext: () => void
  onClose: () => void
}

export const EidAboutServiceProviderScreen: React.FC<EidAboutServiceProviderScreenProps> = ({
  onProviderDetails,
  onNext,
  onClose,
}) => {
  const { buildTestId } = useTestIdBuilder()
  const { colors } = useTheme()

  // const subjectName = certificate.description.subjectName

  // const effectiveAccessRights = accessRights.chat.effective

  return (
    <ModalScreen whiteBottom testID={buildTestId('eid_aboutServiceProvider')}>
      <ModalScreenHeader
        testID={buildTestId('eid_aboutServiceProvider_title')}
        titleI18nKey="eid_aboutServiceProvider_title"
        onPressClose={onClose}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
        <TranslatedText
          i18nKey="eid_aboutServiceProvider_subtitle"
          testID={buildTestId('eid_aboutServiceProvider_subtitle')}
          textStyle="BodyRegular"
          textStyleOverrides={{ color: colors.labelColor }}
        />
        <Pressable
          accessible
          accessibilityRole="button"
          hitSlop={HITSLOP}
          testID={buildTestId('eid_aboutServiceProvider_details_button')}
          style={[styles.providerButton, { backgroundColor: colors.secondaryBackground }]}
          onPress={onProviderDetails}>
          <SvgImage type="government" width={36} height={36} />
          <SvgImage type="chevron" width={24} height={24} />
        </Pressable>
        <TranslatedText
          i18nKey="eid_aboutServiceProvider_accessRights_title"
          testID={buildTestId('eid_aboutServiceProvider_accessRights_title')}
          textStyle="SubtitleSemibold"
          textStyleOverrides={{ color: colors.labelColor }}
        />
        <TranslatedText
          i18nKey="eid_aboutServiceProvider_accessRights_subtitle"
          testID={buildTestId('eid_aboutServiceProvider_accessRights_subtitle')}
          textStyle="BodyRegular"
          textStyleOverrides={[styles.accessRightsSubtitle, { color: colors.labelColor }]}
        />
      </ScrollView>
      <ModalScreenFooter>
        <Button
          onPress={onNext}
          variant="primary"
          testID={buildTestId('eid_aboutServiceProvider_accept_button')}
          i18nKey="eid_aboutServiceProvider_accept_button"
        />
      </ModalScreenFooter>
    </ModalScreen>
  )
}

export const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: spacing[6],
    paddingHorizontal: spacing[5],
  },
  providerButton: {
    borderRadius: 16,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    marginVertical: spacing[6],
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  accessRightsSubtitle: {
    paddingTop: spacing[5],
    paddingBottom: spacing[6],
  },
})
