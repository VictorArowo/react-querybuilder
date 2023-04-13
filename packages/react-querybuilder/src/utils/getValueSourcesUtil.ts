import type { Field, ValueSources } from '@react-querybuilder/ts/dist/index.noReact';

export const getValueSourcesUtil = (
  fieldData: Field,
  operator: string,
  getValueSources?: (field: string, operator: string) => ValueSources
): ValueSources => {
  // TypeScript doesn't allow it directly, but in practice
  // `fieldData` can end up being undefined or null. The nullish
  // coalescing assignment below avoids errors like
  // "TypeError: Cannot read properties of undefined (reading 'name')"
  const fd = fieldData ?? /* c8 ignore else */ {};

  if (fd.valueSources) {
    if (typeof fd.valueSources === 'function') {
      return fd.valueSources(operator);
    }
    return fd.valueSources;
  }
  if (getValueSources) {
    const vals = getValueSources(fd.name, operator);
    /* c8 ignore else */
    if (vals) return vals;
  }

  return ['value'];
};
