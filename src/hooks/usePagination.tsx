import {useCallback, useEffect, useMemo, useState} from 'react'

const usePagination = ( url: string, contentPerPage: number ) => {
  const [data, setData] = useState<any[]>( [] )
  const [current, setCurrent] = useState( 0 )

  const pages = Math.ceil( data.length / contentPerPage )

  // fetch data
  const fetchData = useCallback( async () => {
    try {
      const res = await fetch( url )
      const res_data = await res.json()
      setData( res_data )
    } catch ( error ) {
      console.error( error )
    }
  }, [url], )

  // run only once
  useEffect( () => {
    fetchData()
  }, [] )

  const prev = () => ( current > 0 ) ? setCurrent( prev => prev - 1 ) : null
  const next = () => ( current <= pages ) ? setCurrent( prev => prev + 1 ) : null

  // data for the page
  const selectedData = useMemo( () =>
    data.slice( current * contentPerPage, ( current * contentPerPage ) + contentPerPage ),
    [contentPerPage, data, current] )

  return {
    data: selectedData,
    current: current + 1,
    next,
    prev,
    pages,
  }
}

export default usePagination