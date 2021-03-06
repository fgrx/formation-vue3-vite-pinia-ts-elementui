import type IRessource from "@/interfaces/iRessource";
import axios from "axios";

export default {
  async getRessources(): Promise<IRessource[]> {
    let results = [];

    try {
      const response = await axios(
        `${import.meta.env.VITE_API_SERVER}/ressources?_sort=date&_order=desc`
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

  async delteRessource(ressource: IRessource, token: string): Promise<string> {
    let result;
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_SERVER_PROTECTED}/ressources/${
          ressource.id
        }`,
        headers
      );
      result = response.data;
    } catch (error) {
      alert("Une erreur s'est produite, veuillez réessayer plus tard...");
      console.error(error);
    }

    return result;
  },

  async updateRessource(
    ressource: IRessource,
    token: string
  ): Promise<IRessource> {
    let result;
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_SERVER_PROTECTED}/ressources/${
          ressource.id
        }`,
        ressource,
        headers
      );
      result = response.data;
    } catch (error) {
      alert("Une erreur s'est produite, veuillez réessayer plus tard...");
      console.error(error);
    }

    return result;
  },
};
