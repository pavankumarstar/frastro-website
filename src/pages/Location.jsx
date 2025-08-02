import React from 'react'
import FadeContent from '../components/FadeContent'
const Location = () => {
    return (
        <div>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
  Location content goes here
</FadeContent>
        </div>
    )
}

export default Location
