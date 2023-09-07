type ClassGenerator = {
  from: number
  to: number
  key: string
  writer: (_index: number) => Project.Utils.ObjectKeyString | string
}

export const classGenerator = (
  props: ClassGenerator
): Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString> | {} => {
  const { from, to, key, writer } = props
  const obj: Project.Utils.ObjectKeyUnknown = {}

  for (let index = from; index < to + 1; index++) {
    const parsedKey = key.replace('${INDEX}', index.toString())
    obj[parsedKey] = writer(index)
  }

  return obj
}
