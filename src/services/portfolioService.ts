import api from "./api";
import type PortfolioItem from "../interfaces/PortfolioItem";

export async function getPortfolios(): Promise<PortfolioItem[]> {
  const response = await api.get("/portfolios");
  return response.data;
}