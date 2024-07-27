export function saveOrMergeItem<T extends object>(
  key: string,
  newValue: T,
): void {
  const existingValue = localStorage.getItem(key)

  if (!existingValue) return localStorage.setItem(key, JSON.stringify(newValue))

  try {
    const parsedValue = JSON.parse(existingValue) as T
    const mergedValue = { ...parsedValue, ...newValue }
    localStorage.setItem(key, JSON.stringify(mergedValue))
  } catch {
    localStorage.setItem(key, JSON.stringify(newValue))
  }
}

export function getItem<T>(key: string): T | null {
  const item = localStorage.getItem(key)

  if (item === null) return item

  try {
    return JSON.parse(item) as T
  } catch {
    localStorage.removeItem(key)
    return getItem<T>(key)
  }
}
