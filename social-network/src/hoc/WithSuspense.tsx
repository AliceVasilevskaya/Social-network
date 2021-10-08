import React, {Suspense} from 'react'

export function WithSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>){
    return (props: WCP) => {
        return <Suspense fallback={'Loading...'}>
            <WrappedComponent {...props} />
        </Suspense>
    }
}


