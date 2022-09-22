import { toggleClass } from '/@/utils/dom'

/**
 * Change project gray mode status
 * @param gray
 */
export function updateGrayMode(gray: boolean) {
  toggleClass(gray, 'gray-mode', document.documentElement)
}
