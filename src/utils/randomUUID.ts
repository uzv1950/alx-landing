import { v4 as uuidv4 } from 'uuid'

const randomUUID = () => {
  if (typeof window === 'undefined') return uuidv4()
  if (window.crypto?.randomUUID()) {
    return crypto.randomUUID()
  }

  return uuidv4()
}

export default randomUUID
