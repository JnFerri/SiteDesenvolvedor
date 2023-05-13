import anime from "animejs";


export function AnimationTranlateX50(value){
    anime({
        targets: `${value}`,
        translateX: 50,
      })
}