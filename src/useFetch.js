import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setData(data)
        setPending(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setError(err.message)
          setPending(false)
        }
      })

    return () => abortCont.abort()
  }, [url])
  return { data, pending, error }
}

export default useFetch
