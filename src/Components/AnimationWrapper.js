import {useInView} from "react-intersection-observer";

const AnimationWrapper = ({children, animation, delay, triggerOnce = false}) => {
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: triggerOnce
  });

  return (
    <div ref={ref} className={inView ? animation : 'invisible'} style={{animationDelay: (delay ? `${delay}ms` : 0)}}>
      {children}
    </div>
  )
}

export default AnimationWrapper;
