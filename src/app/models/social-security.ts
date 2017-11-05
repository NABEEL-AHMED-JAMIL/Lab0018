import { IDataModel } from './base';
import { Frequency } from '@btas/data/base.reference';
import { Currency } from '@btas/common/currency';


export interface ICentrelinkDVABenefit {
    benefitType: string;
    owner: string;
    amount: Currency;
    frequency: Frequency;
    taxable: boolean;
}


export interface IGiftedAsset {
    amount: Currency;  // TODO: change to currency
    owner: string;
    date: string;
}


export interface ISocialSecurity extends IDataModel {
    centrelinkCVAEligibility: boolean;
    /**
     * The list of benefit is populated if the eligibility criteria in
     * {{centrelinkCVAEligibility}} is true
     */
    centrelinkCVABenefits: ICentrelinkDVABenefit[];
    centrelinkConcessionCardHolder: boolean;
    centrelinkConcessionCardDescription: string;
    assetsGiftedInLast5Years: boolean;
    /**
     * The list of gifted assets is populated here if the value in
     * {{assetGiftedInLast5Years}} is true
     */
    giftedAssets: IGiftedAsset[];
}
