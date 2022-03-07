import type IRessource from "@/interfaces/iRessource";
import axios from "axios";

export default {
  async getRessources(): Promise<IRessource[]> {
    let results = [];

    try {
      const response = await axios(
        `${import.meta.env.VITE_API_SERVER}/ressources`
      );
      results = response.data;
    } catch (error) {
      alert("Une erreur s'est produite, veuillez réessayer plus tard...");
      console.error(error);
    }

    return results;
  },

  async getRessourceById(id: string): Promise<IRessource> {
    let result;

    try {
      const response = await axios(
        `${import.meta.env.VITE_API_SERVER}/ressources/${id}`
      );
      result = response.data;
    } catch (error) {
      alert("Une erreur s'est produite, veuillez réessayer plus tard...");
      console.error(error);
    }

    return result;
  },

  async addRessource(ressource: IRessource): Promise<IRessource> {
    let result;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_SERVER}/ressources/`,
        ressource
      );
      result = response.data;
    } catch (error) {
      alert("Une erreur s'est produite, veuillez réessayer plus tard...");
      console.error(error);
    }

    return result;
  },
};