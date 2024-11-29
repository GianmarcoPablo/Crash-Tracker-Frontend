import React, { PropsWithChildren } from 'react'

export const ErrorsMessage = ({ children }: PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    )
}
