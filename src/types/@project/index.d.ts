declare namespace Project {
  namespace Utils {
    type ObjectKeyString = { [key: string]: string }
    type ObjectKeyUnknown = { [key: string]: unknown }
    type ObjectKeyNumber = { [key: string]: number }
    interface ObjectKeyType<T> {
      [key: string]: T
    }
  }
}
