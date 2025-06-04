import React, { useRef, forwardRef, useEffect, useImperativeHandle } from 'react';

interface RefProps {
  test: () => void
}

const Child:React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      test() {
        console.log(123)
      }
    }
  }, [])

  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  )
}

const WrapedChild = forwardRef(Child)

const ForwardRefUseImperativeHandle = () => {
  const inputRef = useRef<RefProps>(null)

  useEffect(() => {
    console.log(inputRef.current)
    inputRef.current?.test()
  }, [])

  return (
    <div>
      <WrapedChild ref={inputRef} />
    </div>
  );
}


export default ForwardRefUseImperativeHandle;
