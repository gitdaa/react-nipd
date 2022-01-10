import {
  FocusItem as focusItem,
  FocusItemRequest as focusItemRequest,
  FocusInfoRequest as focusInfoRequest
} from './focus';

import { VitalSignNoteItemRequest as vitalSignNoteItemRequest } from './vitalsign';
import { InterventionItemsLookupRequest as interventionItemsLookupRequest } from './intervention';
import { EvaluationItemsLookupRequest as evaluationItemsLookupRequest } from './evaluation';

export type FocusItem = focusItem;
export type FocusInfoRequest = focusInfoRequest;
export type FocusItemRequest = focusItemRequest;
export type VitalSignNoteItemRequest = vitalSignNoteItemRequest;

export type InterventionItemsLookupRequest = interventionItemsLookupRequest;
export type EvaluationItemsLookupRequest = evaluationItemsLookupRequest;

export interface VitalSign {
  id: number;
  time: string;
  temp: number;
  bps: number;
  bpd: number;
  pulse: number;
  rr: number;
  map: number;
  pain: number;
  intake: number;
  output: number;
  oxygensat: number;
}

export interface NursingNoteItem {
  id: string | null;
  text: string;
  is_new?: boolean;
  // item_id?: string | null;
  item_id?: number | null;
  // item: T,
  problem_list_id?: number;
  readonly?: boolean;
  created_at?: Date;
}

export interface NursingNoteAssessment extends NursingNoteItem {}

export interface NursingNoteIntervention extends NursingNoteItem {}

export interface NursingNoteEvaluation extends NursingNoteItem {}
