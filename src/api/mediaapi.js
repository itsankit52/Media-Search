import axios from "axios";

// Get API keys from Vite env
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

// Fetch Photos from Unsplash
export async function fetchPhoto(query, page = 1, per_page = 20) {
  try {
    if (!UNSPLASH_KEY) {
      throw new Error("Missing Unsplash API Key");
    }

    const res = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query, page, per_page },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error(
      "Unsplash Error:",
      error.response?.data || error.message
    );
    return null;
  }
}
// Fetch GIFs from GIPHY
export async function fetchGifs(query, limit = 20) {
  try {
    if (!GIPHY_KEY) {
      throw new Error("Missing GIPHY API Key");
    }

    const res = await axios.get(
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          api_key: GIPHY_KEY,
          q: query,
          limit,
        },
      }
    );

    return res.data.data.map((gif) => ({
      id: gif.id,
      type: "gif",
      src: gif.images.fixed_height.url,
      title: gif.title
    })); // only gifs array
  } catch (error) {
    console.error(
      "GIPHY Error:",
      error.response?.data || error.message
    );
    return null;
  }
}
// Fetch Videos from Pexels
export async function fetchVideo(query, page = 1, per_page = 20) {
  try {
    if (!PEXELS_KEY) {
      throw new Error("Missing Pexels API Key");
    }

    const res = await axios.get(
      "https://api.pexels.com/videos/search",
      {
        params: { query, per_page, page },
        headers: {
          Authorization: PEXELS_KEY,
        },
      }
    );

    return res.data; // data
  } catch (error) {
    console.error(
      "Pexels Error:",
      error.response?.data || error.message
    );
    return null;
  }
}