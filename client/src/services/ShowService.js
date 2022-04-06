import Client from './'

export const GetShows = async () => {
  try {
    const res = await Client.get('/shows')
    return res.data
  } catch (error) {
    throw error
  }
}