import { useEffect, useState } from "react"
import redaxios from "redaxios"

const baseUrl = "https://api.jikan.moe/v4"

const useFetch = (url: string) => {
  const [ data, setData ] = useState(Object)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ pagination, setPagination ] = useState(Object)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => redaxios.get(baseUrl + url).then(data => {
        setData(data.data.data)
        setPagination(data.data.pagination)
        setLoading(false)
    }).catch(err => {
      setError(err)
      setLoading(false)
    }), 500)
  }, [url])

  return { data, loading, error, pagination }
}
 
export default useFetch