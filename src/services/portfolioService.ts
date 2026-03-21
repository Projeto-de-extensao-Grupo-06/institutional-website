import api from "./providers/api";
import type PortfolioItem from "../interfaces/PortfolioItem";

export async function getPortfolios(): Promise<PortfolioItem[]> {
  const response = await api.get<PortfolioItem[]>("/portfolios");
  return response.data;
}