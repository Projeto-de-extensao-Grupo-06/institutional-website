export interface PreBudgetRequest {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    monthlyBill: string;
    address: {
        postalCode: string;
        streetName: string;
        neighborhood: string;
        city: string;
        state: string;
        type: "RESIDENTIAL" | "COMMERCIAL" | "BUILDING" | "OTHER";
    }
}

export interface PreBudgetResponse {
    kwp: number;
    bill: number;
    cost: number;
    paybackYears: number;
    message: string;
    projectId: number;
}