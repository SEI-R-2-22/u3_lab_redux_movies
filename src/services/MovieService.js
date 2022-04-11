import Client from "./IndexService";

export const GetMoviesList = async () => {
  try {
    const res = await Client.get(
      `/discover/movie?api_key=a1a2a9631f04a7ac4fa07dedda3a5024`
    );
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    throw error;
  }
};

export const GetMovieDetails = async (id) => {
  try {
    const res = await Client.get(
      `/discover/movie/${id}?api_key=a1a2a9631f04a7ac4fa07dedda3a5024`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
