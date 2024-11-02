
type fadeInProps = {
   direction: string,
   type: string,
   delay: number,
   duration: number
}
export const fadeIn = ({direction, type, delay, duration}: fadeInProps )=> {
   return {
   hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
   },
   visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
         type: type,
         delay: delay,
         duration: duration,
         ease: "easeOut",
      },
   },
   };
};