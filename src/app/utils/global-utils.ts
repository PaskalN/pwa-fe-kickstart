export const generateID = (length: number): string => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export const getHrefLangs = <Category>(category: Category, word: string): Array<{ [key: string]: string }> | null => {
  const hrefLangs = []

  if (!category) {
    return null
  }

  for (const key in category) {
    if (category?.hasOwnProperty(key) && typeof key === 'string' && key.includes(word)) {
      hrefLangs.push(...JSON.parse(category?.[key] as string))
    }
  }
  return hrefLangs
}
