export const getThemeData = (root, key, defaultvalue = '') => {
  const keySegments = key.split('.')
  let val = root
  try {
    keySegments.forEach((k) => {
      val = val[k]
    })
    return val
  } catch {
    return defaultvalue
  }
}
