import React,{ Suspense } from 'react'

const LazyLoadedComponent = React.lazy(()=>import('./useEffect'))

const LazyParent = ()=>{
    return (
        <div>
            <h1>React.lazy Example</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedComponent/>
            </Suspense>
        </div>
    )
}

export default LazyParent