# react-hook-on-screen

A simple and performatic react hook that returns a true boolean value when a component become visible on the screen


## Example

```typescript
import { createRef, useEffect } from 'react'
import useOnScreen from 'react-hook-on-screen'

const ref = createRef<HTMLDivElement>()
const isVisible = useOnScreen(ref)

useEffect(() => {
  console.log('Is this visible?', isVisible)
}, [isVisible])

<div ref={ref}>
  react-hook-on-screen
</div>
```
