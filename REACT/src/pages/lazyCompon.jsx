import React,{ Suspense } from 'react'

const LazyComp = React.lazy(()=>import('./counterrr'))

const LazyPar = ()=>{
    return (
        <div>
            <h1>react.lazy example</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComp/>
            </Suspense>
        </div>
    )
}

export default LazyPar