import axios from "axios";

export const getAllOnuDetails = async () => {
  try {
    const data = await axios.get(
      "https://rednuevaconexion.smartolt.com/api/onu/get_all_onus_details",
      {
        maxBodyLength: Infinity,
        headers: {
          "X-Token": "f34191fa081849129f1566ff553e6149",
        },
        // timeout: 5000, // 5 segundos
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error.message;
  }
};
