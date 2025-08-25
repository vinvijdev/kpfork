import { ErrorWithCode } from '../../services/errors/errors'

export enum AA2ErrorCode {
  AA2_ERROR = 'AA2_ERROR',
  AA2_AUTH_ERROR_RESULT = 'AA2_AUTH_ERROR_RESULT',
  AA2_AUTH_ERROR = 'AA2_AUTH_ERROR',
  AA2_INIT_ERROR = 'AA2_INIT_ERROR',
  AA2_BAD_STATE = 'AA2_BAD_STATE',
  AA2_INTERNAL_ERROR = 'AA2_INTERNAL_ERROR',
  AA2_INVALID_MESSAGE = 'AA2_INVALID_MESSAGE',
  AA2_UNKNOWN_COMMAND = 'AA2_UNKNOWN_COMMAND',
  AA2_BELOW_MIN_YEAR_OF_BIRTH = 'AA2_BELOW_MIN_YEAR_OF_BIRTH',
  AA2_BELOW_MIN_AGE = 'AA2_BELOW_MIN_AGE',
  AA2_FOREIGN_RESIDENCY = 'AA2_FOREIGN_RESIDENCY',
  AA2_PSEUDONYM_ALREADY_IN_USE = 'AA2_PSEUDONYM_ALREADY_IN_USE',
  AA2_CARD_DEACTIVATED = 'AA2_CARD_DEACTIVATED',
  AA2_TIMEOUT = 'AA2_TIMEOUT',
  AA2_ACCEPT_TIMEOUT = 'AA2_ACCEPT_TIMEOUT',
  AA2_SET_PIN_TIMEOUT = 'AA2_SET_PIN_TIMEOUT',
  AA2_CARD_REMOVED = 'AA2_CARD_REMOVED',
  AA2_CARD_VALIDATION_FAILED = 'AA2_CARD_VALIDATION_FAILED',
  AA2_CARD_AUTHENTICITY_VALIDATION_FAILED = 'AA2_CARD_AUTHENTICITY_VALIDATION_FAILED',
}

export class AA2Error extends ErrorWithCode {
  type?: string
  constructor(errorCode: AA2ErrorCode = AA2ErrorCode.AA2_ERROR, detailCode?: string) {
    super(errorCode, detailCode)
  }
}

export class AA2AuthErrorResultError extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_AUTH_ERROR_RESULT, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2AuthError extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_AUTH_ERROR, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2InitError extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_INIT_ERROR, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2BadState extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_BAD_STATE, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2InternalError extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_INTERNAL_ERROR, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2InvalidMessage extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_INVALID_MESSAGE, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2UnknownCommand extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_UNKNOWN_COMMAND, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

/**
 * User is too young to be verified
 */
export class AA2BelowMinYearOfBirth extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_BELOW_MIN_YEAR_OF_BIRTH, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

/**
 * User is too old to be verified
 */
export class AA2BelowMinAge extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_BELOW_MIN_AGE, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2ForeignResidency extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_FOREIGN_RESIDENCY, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}
export class AA2PseudonymAlreadyInUse extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_PSEUDONYM_ALREADY_IN_USE, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2CardDeactivated extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_CARD_DEACTIVATED, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2Timeout extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_TIMEOUT, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2AcceptTimeout extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_ACCEPT_TIMEOUT, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2SetPinTimeout extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_SET_PIN_TIMEOUT, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2CardRemoved extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_CARD_REMOVED, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2CardValidationFailed extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_CARD_VALIDATION_FAILED, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export class AA2CardAuthenticityValidationFailed extends AA2Error {
  constructor(detailCode?: string, message?: string, type?: string) {
    super(AA2ErrorCode.AA2_CARD_AUTHENTICITY_VALIDATION_FAILED, detailCode)
    this.message = message ?? this.message
    this.type = type
  }
}

export const errorCodeToAA2Error = (errorCode: string): AA2Error => {
  switch (errorCode) {
    case 'BELOW_MIN_YEAR_OF_BIRTH':
      return new AA2BelowMinYearOfBirth()
    case 'BELOW_MIN_AGE':
      return new AA2BelowMinAge()
    case 'FOREIGN_RESIDENCY':
      return new AA2ForeignResidency()
    case 'PSEUDONYM_ALREADY_IN_USE':
      return new AA2PseudonymAlreadyInUse()
    default:
      return new AA2AuthError(errorCode)
  }
}
