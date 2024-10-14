
export const anim_menuSlide = {
    initial: {
        x: "calc(100% + 100px)"
    },
    enter: {
        x: "0%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        x: "calc(100% + 50px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
}

export const anim_slide = {
    initial: {
        x: "80px",
    },
    enter: (i: number)=>({
        x: "0px",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay : 0.09 * i},
    }),
    exit: (i: number)=>({
        x: "80px",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay : 0.09 * i}
    })
}

const initialPath: string = `M100 0 L100 ${window.innerHeight} Q0 ${window.innerHeight / 2} 100 0`
const targetPath: string = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

export const curvePathAnimation = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        d: initialPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
}
