export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay: any) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: any,
  delay: any,
  duration: any,
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
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

export const bounceIn = (delay: number, duration: number) => {
  return {
    hidden: {
      y: -100,
      scale: 0.5,
    },
    show: {
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: any,
  delayChildren?: any,
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const scale = () => {
  return {
    hidden: {
      scale: 0
    },
    show: {
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }
  }
}
