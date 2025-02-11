import * as React from 'react';
import { forwardRef } from 'react';
import { defaultControlElements } from '../src/components';
import {
  TestID,
  defaultControlClassnames,
  defaultTranslations as translations,
} from '../src/defaults';
import type {
  ActionProps,
  Classnames,
  Controls,
  Field,
  FieldSelectorProps,
  OperatorSelectorProps,
  QueryActions,
  RuleProps,
  Schema,
  ValueEditorProps,
} from '../src/types/';
import { UNUSED } from './utils';

export const getFieldMapFromArray = (fieldArray: Field[]) =>
  Object.fromEntries(fieldArray.map(f => [f.name, f]));

export const ruleDefaultFields = [
  { name: 'field1', label: 'Field 1' },
  { name: 'field2', label: 'Field 2' },
] satisfies Field[];

export const ruleFieldMap = getFieldMapFromArray(ruleDefaultFields);

export const ruleControls = {
  cloneRuleAction: (props: ActionProps) => (
    <button
      data-testid={TestID.cloneRule}
      className={props.className}
      onClick={e => props.handleOnClick(e)}>
      {translations.cloneRule.label}
    </button>
  ),
  fieldSelector: (props: FieldSelectorProps) => (
    <select
      data-testid={TestID.fields}
      className={props.className}
      onChange={e => props.handleOnChange(e.target.value)}>
      <option value="field">Field</option>
      <option value="any_field">Any Field</option>
    </select>
  ),
  operatorSelector: (props: OperatorSelectorProps) => (
    <select
      data-testid={TestID.operators}
      className={props.className}
      onChange={e => props.handleOnChange(e.target.value)}>
      <option value="operator">Operator</option>
      <option value="any_operator">Any Operator</option>
    </select>
  ),
  valueEditor: (props: ValueEditorProps) => (
    <input
      data-testid={TestID.valueEditor}
      className={props.className}
      type="text"
      onChange={e => props.handleOnChange(e.target.value)}
    />
  ),
  removeRuleAction: (props: ActionProps) => (
    <button
      data-testid={TestID.removeRule}
      className={props.className}
      onClick={e => props.handleOnClick(e)}>
      {translations.removeRule.label}
    </button>
  ),
  dragHandle: forwardRef(({ className, label }, ref) => (
    <span ref={ref} className={className}>
      {label}
    </span>
  )),
} satisfies Partial<Controls>;

export const ruleClassnames = {
  cloneRule: 'custom-cloneRule-class',
  dragHandle: 'custom-dragHandle-class',
  fields: 'custom-fields-class',
  operators: 'custom-operators-class',
  removeRule: { 'custom-removeRule-class': true },
  rule: ['custom-rule-class'],
} satisfies Partial<Classnames>;

const ruleSchema = {
  fields: ruleDefaultFields,
  fieldMap: ruleFieldMap,
  controls: { ...defaultControlElements, ...ruleControls },
  classNames: { ...defaultControlClassnames, ...ruleClassnames },
  getOperators: () => [
    { name: '=', label: 'is' },
    { name: '!=', label: 'is not' },
  ],
  getValueEditorType: () => 'text',
  getValueEditorSeparator: () => null,
  getValueSources: () => ['value'],
  getInputType: () => 'text',
  getValues: () => [
    { name: 'one', label: 'One' },
    { name: 'two', label: 'Two' },
  ],
  getRuleClassname: () => '',
  showCloneButtons: false,
  validationMap: {},
} satisfies Partial<Schema>;

const ruleActions = {
  onPropChange: () => {},
  onRuleRemove: () => {},
} satisfies Partial<QueryActions>;

export const getRuleProps = (
  mergeIntoSchema: Partial<Schema> = {},
  mergeIntoActions: Partial<QueryActions> = {}
): RuleProps => ({
  id: 'id',
  rule: {
    field: 'field', // note that this is not a valid field name based on the defaultFields
    value: 'value',
    operator: 'operator',
  },
  field: UNUSED,
  operator: UNUSED,
  value: UNUSED,
  schema: { ...ruleSchema, ...mergeIntoSchema } as Schema,
  actions: { ...ruleActions, ...mergeIntoActions } as QueryActions,
  path: [0],
  translations,
});
