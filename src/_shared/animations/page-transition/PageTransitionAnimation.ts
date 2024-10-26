export const zoom = {
    initial: {
        opacity: 0.9,
        scale: 0.85,
        border: 'solid 3px #3D4343',
        borderRadius: '1.6rem',
    },
    enter: {
        opacity: 1,
        scale: 1,
        borderRadius: 0,
        borderColor: 'transparent',
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: [0.64, 0, 0.78, 0]
        },
        // transitionEnd: {
        // 	top: '47.5%',
        // }
    },
    exit: {
        opacity: .9,
        scale: 0.85,
        borderRadius: '1.6rem',
        borderColor: '#3D4343',
        transition: {
            duration: 0.5,
            // delay: 0.4,
            ease: [0.33, 1, .68, 1]
        },
    }
}