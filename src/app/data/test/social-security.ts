import { WEEKLY } from '@btas/data/base.reference';
import { ISocialSecurity, ICentrelinkDVABenefit, IGiftedAsset } from '@btas/models/social-security';
import * as uuid from 'uuid/v4';
import { Currency } from '@btas/common/currency';


export const SOCIAL_SECURITY = <ISocialSecurity> {
    id: uuid(),
    centrelinkCVAEligibility: true,
    centrelinkCVABenefits: [<ICentrelinkDVABenefit> {
        benefitType: 'Centrelink',
        owner: 'Client 1',
        amount: <Currency> { value: 10, code: 'USD' },
        frequency: WEEKLY,
        taxable: false
    },
    <ICentrelinkDVABenefit> {
        benefitType: 'BVA',
        owner: 'Client 2',
        amount: <Currency> { value: 2000, code: 'USD' },
        frequency: WEEKLY,
        taxable: true
    }],
    centrelinkConcessionCardHolder: true,
    centrelinkConcessionCardDescription: 'Centrelink',
    assetsGiftedInLast5Years: true,
    giftedAssets: [<IGiftedAsset> {
        amount: <Currency> { value: 20, code: 'USD'},
        owner: 'Client 1', date: '2016-03-25'} ],
    // temporary until table is ready
    date: '2016-04-20',
    // temp as an example
    amount: <Currency> { value: 10, code: 'AUD' }
};
