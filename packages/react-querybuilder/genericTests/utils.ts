import { act } from '@testing-library/react';
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event';

export const UNUSED = 'UNUSED';

export const findInput = (el: HTMLElement) =>
  (el.tagName === 'INPUT' ? el : el.querySelector('input')) as HTMLInputElement;

export const findTextarea = (el: HTMLElement) =>
  (el.tagName === 'TEXTAREA' ? el : el.querySelector('textarea')) as HTMLTextAreaElement;

export const findSelect = (el: HTMLElement) =>
  (el.tagName === 'SELECT' ? el : el.querySelector('select')) as HTMLSelectElement;

export const hasOrInheritsClass = (el: HTMLElement | null, className: string) => {
  if (el && (el.classList.contains(className) || el.closest(`.${className}`))) {
    return true;
  }
  return false;
};

export const hasOrInheritsData = (
  el: HTMLElement | null,
  dataAttr: string,
  attempt = 1
): boolean => {
  if (!el || el.tagName === 'BODY') {
    return false;
  }
  if (typeof el.dataset[dataAttr] !== 'undefined') {
    return true;
  }
  if (attempt >= 10) {
    return false;
  }
  return hasOrInheritsData(el.parentElement, dataAttr, attempt + 1);
};

export const isOrInheritsChecked = (el: HTMLElement | null, attempt = 1): boolean => {
  if (!el || el.tagName === 'BODY') {
    return false;
  }
  try {
    expect(el).toBeChecked();
    return true;
  } catch (er) {
    if (attempt < 10) {
      return isOrInheritsChecked(el.parentElement, attempt + 1);
    }
  }
  return false;
};

export const userEventSetup = () => {
  const user = userEvent.setup({ pointerEventsCheck: PointerEventsCheckLevel.Never });
  // TODO: figure out a way to avoid these wrapper functions.
  // See http://kcd.im/react-act
  const click: (typeof userEvent)['click'] = async el =>
    act(async () => {
      await user.click(el);
    });
  const type: (typeof userEvent)['type'] = async (el, txt) =>
    act(async () => {
      await user.type(el, txt);
    });
  const selectOptions: (typeof userEvent)['selectOptions'] = async (el, opts) =>
    act(async () => {
      await user.selectOptions(el, opts);
    });
  return { ...user, click, selectOptions, type };
};

export const consoleMocks = () => {
  const consoleLog = vi.spyOn(console, 'log');
  const consoleError = vi.spyOn(console, 'error');
  const consoleInfo = vi.spyOn(console, 'info');
  const consoleWarn = vi.spyOn(console, 'warn');

  afterEach(() => {
    consoleError.mockReset();
    consoleInfo.mockReset();
    consoleLog.mockReset();
    consoleWarn.mockReset();
  });

  return {
    consoleError,
    consoleInfo,
    consoleLog,
    consoleWarn,
  };
};
