import React, {Suspense} from "react";

export const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={'Loading...'}>
            <Component {...props} />
        </Suspense>
    }
}


