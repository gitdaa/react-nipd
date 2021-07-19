import { ActionConst } from 'react-nipd'
import _ from 'lodash'
import { AnyAction } from 'redux'
import dayjs from 'dayjs'
import { LookupAssessmentListRequest } from '../../types/lookup/assessment'

const initialData: LookupAssessmentListRequest = {
  isFetching: false,
  data: [],
  error: false,
  errorMessage: '',
  expireAt: null
}

export function assessment(
  state = initialData,
  action: AnyAction
): LookupAssessmentListRequest {
  switch (action.type) {
    case ActionConst.NN_LOOKUP_ASSESSMENT.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionConst.NN_LOOKUP_ASSESSMENT.SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: action.data.data,
        expireAt: dayjs().add(60, 'm').toDate()
      }
    }
    case ActionConst.NEW_ASSESSMENT.SUCCESS:
    case ActionConst.QUICK_ADD_ASSESSMENT.SUCCESS:
    case ActionConst.UPDATE_ASSESSMENT.SUCCESS: {
      const mergeData = _.unionBy(
        [action.data.data, ...state.data],
        'assessment_items_code'
      )
      return {
        ...state,
        isFetching: false,
        data: mergeData
      }
    }
    case ActionConst.NN_LOOKUP_ASSESSMENT.FAILURE:
      return {
        ...state,
        isFetching: false,
        data: [],
        error: true
      }
    default:
      return state
  }
}
