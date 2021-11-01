export interface ICompany{
    id: number;
    name:string;
    code:string;
    telephone:string
}

export interface ICompanyToCreate{
    name:string;
    code:string;
    telephone:string
}

export class CompanyFormValues implements ICompanyToCreate{
    name = '';
    code = '';
    telephone:'';

    constructor(init?: CompanyFormValues){
        Object.assign(this, init);
    }
}

