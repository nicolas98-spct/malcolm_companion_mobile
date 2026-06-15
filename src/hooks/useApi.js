import { useEffect, useState } from 'react';

export default function useApi(loader, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);
    loader()
      .then((result) => mounted && setData(result))
      .catch((err) => mounted && setError(err.message || 'Error inesperado'))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, deps);

  return { data, loading, error };
}
