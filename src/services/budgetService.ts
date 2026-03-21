import type { PreBudgetRequest, PreBudgetResponse } from "../interfaces/PreBudget";
import api from "./providers/api";

export default class BudgetService {
    async requestPreBudget(request: PreBudgetRequest): Promise<PreBudgetResponse> {
        const req = await api.post<PreBudgetResponse>('/projects/site', request);
        if (req.status !== 201) {
            throw new Error('Erro ao solicitar orçamento');
        }

        return req.data;
    }
}