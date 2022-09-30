export default function throwError(message: string, type: number) {
  throw {
    type,
    message
  }
}