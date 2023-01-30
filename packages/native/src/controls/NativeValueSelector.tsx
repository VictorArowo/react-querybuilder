import { Picker } from '@react-native-picker/picker';
import type { Option } from '@react-querybuilder/ts';
import { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { joinWith, splitBy, standardClassnames } from 'react-querybuilder';
import { defaultNativeSelectStyles, defaultNativeStyles } from '../styles';
import type { ValueSelectorNativeProps } from '../types';

const regexpSC_combinators = RegExp(`\\b${standardClassnames.combinators}\\b`);
const regexpSC_fields = RegExp(`\\b${standardClassnames.fields}\\b`);
const regexpSC_operators = RegExp(`\\b${standardClassnames.operators}\\b`);
const regexpSC_valueSource = RegExp(`\\b${standardClassnames.valueSource}\\b`);
const regexpSC_value = RegExp(`\\b${standardClassnames.value}\\b`);

export const NativeValueSelector = ({
  handleOnChange,
  className = '',
  options,
  value,
  disabled,
  multiple,
  listsAsArrays,
  schema,
  testID,
  pickerComponent: PickerComponent = Picker,
}: ValueSelectorNativeProps) => {
  const styles = useMemo(() => {
    if (regexpSC_combinators.test(className)) {
      return {
        selector: StyleSheet.flatten([
          defaultNativeStyles.combinatorSelector,
          schema.styles?.combinatorSelector,
        ]),
        option: StyleSheet.flatten([
          defaultNativeStyles.combinatorOption,
          schema.styles?.combinatorOption,
        ]),
      };
    } else if (regexpSC_fields.test(className)) {
      return {
        selector: StyleSheet.flatten([
          defaultNativeStyles.fieldSelector,
          schema.styles?.fieldSelector,
        ]),
        option: StyleSheet.flatten([defaultNativeStyles.fieldOption, schema.styles?.fieldOption]),
      };
    } else if (regexpSC_operators.test(className)) {
      return {
        selector: StyleSheet.flatten([
          defaultNativeStyles.operatorSelector,
          schema.styles?.operatorSelector,
        ]),
        option: StyleSheet.flatten([
          defaultNativeStyles.operatorOption,
          schema.styles?.operatorOption,
        ]),
      };
    } else if (regexpSC_valueSource.test(className)) {
      return {
        selector: StyleSheet.flatten([
          defaultNativeStyles.valueSourceSelector,
          schema.styles?.valueSourceSelector,
        ]),
        option: StyleSheet.flatten([
          defaultNativeStyles.valueSourceOption,
          schema.styles?.valueSourceOption,
        ]),
      };
    } else if (regexpSC_value.test(className)) {
      return {
        selector: StyleSheet.flatten([
          defaultNativeStyles.valueEditorSelector,
          schema.styles?.valueEditorSelector,
        ]),
        option: StyleSheet.flatten([
          defaultNativeStyles.valueEditorOption,
          schema.styles?.valueEditorOption,
        ]),
      };
    }
    return StyleSheet.create(defaultNativeSelectStyles);
  }, [
    className,
    schema.styles?.combinatorOption,
    schema.styles?.combinatorSelector,
    schema.styles?.fieldOption,
    schema.styles?.fieldSelector,
    schema.styles?.operatorOption,
    schema.styles?.operatorSelector,
    schema.styles?.valueEditorOption,
    schema.styles?.valueEditorSelector,
    schema.styles?.valueSourceOption,
    schema.styles?.valueSourceSelector,
  ]);

  const onChange = useCallback(
    (v: string | string[]) => {
      // istanbul ignore if
      if (multiple) {
        const valArray = Array.from(v);
        handleOnChange(listsAsArrays ? valArray : joinWith(valArray, ','));
      } else {
        handleOnChange(v);
      }
    },
    [handleOnChange, listsAsArrays, multiple]
  );

  // istanbul ignore next
  const val = multiple ? (Array.isArray(value) ? value : splitBy(value, ',')) : value;

  return (
    <PickerComponent
      testID={testID}
      aria-disabled={disabled}
      style={styles.selector}
      itemStyle={styles.option}
      selectedValue={val}
      onValueChange={onChange}>
      {(options as Option[]).map(c => (
        <PickerComponent.Item key={c.name} label={c.label} value={c.name} />
      ))}
    </PickerComponent>
  );
};

NativeValueSelector.displayName = 'NativeValueSelector';