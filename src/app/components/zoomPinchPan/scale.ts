const calculateScaleFactor = (parent: HTMLDivElement | null, child: HTMLDivElement | null): number => {
  if (!parent || !child) return 1

  const parentWidth = parent.clientWidth
  const childWidth = child.clientWidth

  if (parentWidth === 0 || childWidth === 0) return 1

  return parentWidth > childWidth ? childWidth / parentWidth : parentWidth / childWidth
}

const calculateInitialScaleFactorByFacotrs = (
  minScaleFactor?: number,
  maxScaleFactor?: number
): {
  minScaleFactor: number
  maxScaleFactor: number
} => {
  if (!minScaleFactor && !maxScaleFactor) {
    return {
      minScaleFactor: 0.5,
      maxScaleFactor: 2
    }
  }

  if (!minScaleFactor && maxScaleFactor) {
    return {
      minScaleFactor: 0.5,
      maxScaleFactor: maxScaleFactor < 0.5 ? 1 : maxScaleFactor
    }
  }

  if (minScaleFactor && !maxScaleFactor) {
    return {
      minScaleFactor: minScaleFactor > 2 ? 2 : minScaleFactor,
      maxScaleFactor: 2
    }
  }

  if (minScaleFactor && maxScaleFactor) {
    return {
      minScaleFactor: minScaleFactor > maxScaleFactor ? maxScaleFactor : minScaleFactor,
      maxScaleFactor: maxScaleFactor < minScaleFactor ? minScaleFactor : maxScaleFactor
    }
  }

  return {
    minScaleFactor: 0.5,
    maxScaleFactor: 2
  }
}

const calculateInitialScaleFactorByWidth = (
  child: HTMLDivElement | null,
  minScaleWidth?: number,
  maxScaleWidth?: number
): {
  minScaleFactor: number
  maxScaleFactor: number
} => {
  if (!child) {
    return {
      minScaleFactor: 0.5,
      maxScaleFactor: 2
    }
  }

  const childWidth = child.clientWidth

  if (minScaleWidth && !maxScaleWidth) {
    const ratio = minScaleWidth / childWidth

    if (ratio > 1) {
      return {
        minScaleFactor: 1,
        maxScaleFactor: 2
      }
    }

    return {
      minScaleFactor: ratio,
      maxScaleFactor: 2
    }
  }

  if (!minScaleWidth && maxScaleWidth) {
    const ratio = maxScaleWidth / childWidth

    if (ratio < 1) {
      return {
        minScaleFactor: 0.5,
        maxScaleFactor: 1
      }
    }

    return {
      minScaleFactor: 0.5,
      maxScaleFactor: ratio
    }
  }

  if (minScaleWidth && maxScaleWidth) {
    const ratioMax = maxScaleWidth / childWidth
    const ratioMin = minScaleWidth / childWidth

    return {
      minScaleFactor: ratioMin < ratioMax ? ratioMin : ratioMax,
      maxScaleFactor: ratioMax > 1 && ratioMax > ratioMin ? ratioMax : ratioMin < ratioMax ? ratioMin : ratioMax
    }
  }

  return {
    minScaleFactor: 0.5,
    maxScaleFactor: 2
  }
}

const calculateInitalScaleFactor = (
  child: HTMLDivElement | null,
  minScaleFactor?: number,
  maxScaleFactor?: number,
  minScaleWidth?: number,
  maxScaleWidth?: number
): {
  minScaleFactor: number
  maxScaleFactor: number
} => {
  if (minScaleFactor || maxScaleFactor) {
    return calculateInitialScaleFactorByFacotrs(minScaleFactor, maxScaleFactor)
  }

  if (minScaleWidth || maxScaleWidth) {
    return calculateInitialScaleFactorByWidth(child, minScaleWidth, maxScaleWidth)
  }

  return {
    minScaleFactor: 0.5,
    maxScaleFactor: 2
  }
}

export default {
  calculateScaleFactor,
  calculateInitalScaleFactor
}
