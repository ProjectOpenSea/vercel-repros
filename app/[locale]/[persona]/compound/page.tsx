import React, { forwardRef } from "react"

const FlexColumn = (props: any) => {
  return <span {...props} />
}

const MyComponent = forwardRef<HTMLSpanElement>(
  function MyComponent(props, ref) {
    return (
      <span ref={ref} {...props}>
        Hello world
      </span>
    )
  },
)

const CompoundComponent = Object.assign(MyComponent, { MyComponent })

export default function Page() {
  return (
    <FlexColumn>
      <CompoundComponent />
    </FlexColumn>
  )
}