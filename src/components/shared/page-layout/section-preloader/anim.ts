export const opacity = {
    initial: {
        opacity: 0,
        top: '60%',
    },
    enter: {
        opacity: 1,
        top: '47.5%',
        transition: {
            duration: 0.75,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1]
        },
        transitionEnd: {
            top: '47.5%',
        }
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: [0.33, 1, .68, 1]
        },
    }
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}