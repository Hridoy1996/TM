
import { FinanceTypeEnum } from '../constants/signup.constants';
import {
    IBankInformation,
    IMobileFinancialServiceInfo,
    ITraditionalBankInfo,
} from '../interfaces/bank-info.interface';

export class BankInfo implements IBankInformation<ITraditionalBankInfo> {
    constructor(public Info: ITraditionalBankInfo, public Type: string) { }
}

export class MfsInfo implements IBankInformation<IMobileFinancialServiceInfo>
{
    constructor(public Info: IMobileFinancialServiceInfo, public Type: string) { }
}

export class UserFinancialInfo {
    public Type: FinanceTypeEnum;
    public MobileFinancialServiceInfo: (IMobileFinancialServiceInfo | null) = null;
    public BankFinancialServiceInfo: (ITraditionalBankInfo | null) = null;

    constructor(mfs: (MfsInfo | null), bfs: (BankInfo | null), type: FinanceTypeEnum) {

        this.Type = type;

        if (mfs) {
            this.MobileFinancialServiceInfo = {
                OperatorName: mfs.Info ? mfs.Info.OperatorName : '',
                PhoneNumber: mfs.Info ? mfs.Info.PhoneNumber : ''
            }
        }

        if (bfs) {
            this.BankFinancialServiceInfo = {
                AccountHolderName: bfs.Info ? bfs.Info.AccountHolderName : '',
                AccountNumber: bfs.Info ? bfs.Info.AccountNumber : '',
                BankName: bfs.Info ? bfs.Info.BankName : '',
                BranchName: bfs.Info ? bfs.Info.BranchName : '',
                RoutingNumber: bfs.Info ? bfs.Info.RoutingNumber : ''
            }
        }
    }
}
