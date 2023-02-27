import type { RenderHookResult } from '@testing-library/react';
import { act, renderHook, waitFor } from '@testing-library/react';
import { consoleMocks } from 'react-querybuilder/genericTests';
import type { UseReactDnD } from '../types';
import { useReactDnD } from './useReactDnD';

consoleMocks();

beforeEach(() => {
  vi.resetModules();
});

it('returns the react-dnd exports', async () => {
  let hookResult: RenderHookResult<UseReactDnD | null, UseReactDnD | undefined>;
  await act(async () => {
    hookResult = renderHook(() => useReactDnD());
    await waitFor(() => hookResult?.result.current);
    hookResult.rerender();
  });
  expect(hookResult!.result.current).toHaveProperty('useDrag');
  expect(hookResult!.result.current).toHaveProperty('useDrop');
  expect(hookResult!.result.current).toHaveProperty('HTML5Backend');
});

it('returns the provided DnD', async () => {
  const existingDnD = {
    ...(await import('react-dnd')),
    ...(await import('react-dnd-html5-backend')),
  };

  let hookResult: RenderHookResult<UseReactDnD | null, UseReactDnD | undefined>;
  await act(async () => {
    hookResult = renderHook(() => useReactDnD(existingDnD));
    await waitFor(() => hookResult?.result.current);
    hookResult.rerender();
  });
  expect(hookResult!.result.current).toBe(existingDnD);
});

it('fails gracefully', async () => {
  vi.doMock('react-dnd', () => {
    throw new Error('react-dnd');
  });
  vi.doMock('react-dnd-html5-backend', () => {
    throw new Error('react-dnd-html5-backend');
  });

  let hookResult: RenderHookResult<UseReactDnD | null, UseReactDnD | undefined>;
  await act(async () => {
    hookResult = renderHook(() => useReactDnD());
    await waitFor(() => hookResult?.result.current);
    hookResult.rerender();
  });
  expect(hookResult!.result.current).toBeNull();
});
