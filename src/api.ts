import axios from 'axios'

export async function getExample() {
  return await axios.get('https://example.com')
}
