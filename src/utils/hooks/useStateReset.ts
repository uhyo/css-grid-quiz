import { useMemo, useState } from "react";
import { arrayShallowEqual } from "../arrayShallowEqual";

/**
 * useState, but reset when given deps has changed.
 */
export function useStateReset<T>(
  deps: readonly unknown[],
  initialValue: () => T
): [state: T, update: (updater: T | ((current: T) => T)) => void] {
  type InternalState = {
    deps: readonly unknown[];
    value: T;
  };
  const [state, setStateInternal] = useState<InternalState>(() => ({
    deps,
    value: initialValue(),
  }));

  const setState = (value: T | ((current: T) => T)) => {
    setStateInternal((current) => {
      if (typeof value !== "function") {
        return {
          deps,
          value,
        };
      }
      const currentState = arrayShallowEqual(current.deps, deps)
        ? current.value
        : initialValue();
      return {
        deps,
        value: (value as (current: T) => T)(currentState),
      };
    });
  };

  const currentState = useMemo(() => {
    if (arrayShallowEqual(deps, state.deps)) {
      return state.value;
    } else {
      return initialValue();
    }
  }, [state, deps]);

  return [currentState, setState];
}
