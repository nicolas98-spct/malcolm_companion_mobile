import { useEffect, useState } from 'react';

export function useAsyncResource(loader, dependencies = []) {
  const [state, setState] = useState({ data: null, error: null, loading: true });

  useEffect(() => {
    let mounted = true;
    setState((current) => ({ ...current, loading: true, error: null }));
    loader()
      .then((data) => mounted && setState({ data, error: null, loading: false }))
      .catch((error) => mounted && setState({ data: null, error, loading: false }));
    return () => {
      mounted = false;
    };
  }, dependencies);

  return state;
}
