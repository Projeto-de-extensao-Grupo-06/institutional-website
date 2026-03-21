import type { viaCepResponse } from "../interfaces/viaCep";
import viaCepApi from "./providers/viaCepProvider";

export default class ViaCepService {
    async requestAddress(cep: string): Promise<viaCepResponse> {
        const req = await viaCepApi.get<viaCepResponse>(`/ws/${cep}/json/`);
        if (req.status !== 200) {
            throw new Error('Erro ao solicitar informações do CEP');
        }

        return req.data;
    }
}