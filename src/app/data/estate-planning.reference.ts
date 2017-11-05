import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import {
  IEstatePlanning,
  IEstatePlanningWill,
  IEstatePlanningDeathNomination,
  IEstatePlanningPowerOfAttorney
} from '@btas/models/estate-planning';
import { SuperBeneficiaryOptions } from '@data/super-beneficiary.reference';
import { NominationPermissionOptions } from '@data/death-nomination.reference';
import { PowerOfAttorneyTypeOptions } from '@data/base.reference';

import * as uuid from 'uuid/v4';


export const ESTATEPLANNING: IEstatePlanning =
  <IEstatePlanning> {
    will: <IEstatePlanningWill[]> [
    {
      id: uuid(),
      hasWill: true,
      willDetails: 'not Provided',
      intendedBeneficiary: 'Other',
      lastUpdated: 'it was updated in january',
      willWishesCurrent: true,
      whereIsWillKept: 'Solicter\'s Office',
      executorDetails: 'Lawyer'
    },
    {
      id: uuid(),
      hasWill: true,
      willDetails: 'not Provided',
      intendedBeneficiary: 'Other',
      lastUpdated: 'it was updated in january',
      willWishesCurrent: false,
      whereIsWillKept: 'Solicter\'s Office',
      executorDetails: 'Lawyer'
    }],
    deathNomination: <IEstatePlanningDeathNomination[]> [
    {
      id: uuid(),
      superBeneficiary: 'My Partner',
      deathNominationPrepared: 'Yes',
      deathNominationCurrent: 'Yes',
      partnerPercentage: '25 percent',
      childrenPercentage: '2/all of M, 1/all of F',
      otherPercentage: 'City Bank\'s Locker',
      intendedBeneficiary: 'My Father'
    },
    {
      id: uuid(),
      superBeneficiary: 'My Partner',
      deathNominationPrepared: 'Yes',
      deathNominationCurrent: 'Yes',
      partnerPercentage: '25 percent',
      childrenPercentage: '2/all of M, 1/all of F',
      otherPercentage: 'City Bank\'s Locker',
      intendedBeneficiary: 'My Father'
    }],
    powerOfAttorney: <IEstatePlanningPowerOfAttorney[]> [
    {
      id: uuid(),
      hasPowerOfAttorney: true,
      powerOfAttorneyType: 'General',
      otherAttorneyType: 'Other',
      details: 'Details'
    },
    {
      id: uuid(),
      hasPowerOfAttorney: false,
      powerOfAttorneyType: 'Medical',
      otherAttorneyType: 'Other',
      details: 'Details'
    }]
  };


export const ESTATEPLANNING_WILL_DEF = <IGroupPanelItem> {
  title: 'Wills',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'hasWill',
      title: 'Do you have a Will?',
      type: 'checkbox'
    },
    {
      name: 'willDetails',
      title: 'Details',
      type: 'textarea',
      hideWhen: '!hasWill'
    },
    {
      name: 'intendedBeneficiary',
      title: 'Who are the intended beneficiary(ies)?',
      type: 'input:text'
    },
    {
      name: 'lastUpdated',
      title: 'When was it last updated?',
      type: 'textarea',
      hideWhen: '!hasWill'
    },
    {
      name: 'willWishesCurrent',
      title: 'Is the Will in line with your current wishes?',
      type: 'radio',
      hideWhen: '!hasWill'
    },
    {
      name: 'whereIsWillKept',
      title: 'Where is your Will kept (e.g. solicitor\'s office)',
      type: 'textarea',
      hideWhen: '!hasWill'
    },
    {
      name: 'executorDetails',
      title: 'Details of Executor',
      type: 'text',
      hideWhen: '!hasWill'
    }
  ],
  deletable: true
};

export const ESTATEPLANNING_DEATHNOMINATION_DEF = <IGroupPanelItem> {
  title: 'Death Nominations',
  subtitle: 'superannuation and income stream',
  summary: [],
  fields: [
    {
      name: 'superBeneficiary',
      title: `Who do you intend to leave your superannuation
      and income stream assets to in the event of death, and
      what are your nominations?`,
      type: 'select',
      options: SuperBeneficiaryOptions
    },
    {
      name: 'deathNominationPrepared',
      title: `Have you already made death nominations on your
      superannuation and income stream assets?`,
      type: 'select',
      options: NominationPermissionOptions
    },
    {
      name: 'deathNominationCurrent',
      title: `If 'Yes', are these nominations in line
      with your current wishes?`,
      type: 'select',
      options: NominationPermissionOptions,
      hideWhen: "deathNominationPrepared != 'Yes'"
    },
    {
      name: 'partnerPercentage',
      title: 'My Partner percentage',
      type: 'text',
      hideWhen: "deathNominationPrepared != 'Yes'"
    },
    {
      name: 'childrenPercentage',
      title: 'My children percentage',
      type: 'text',
      hideWhen: "deathNominationPrepared != 'Yes'"
    },
    {
      name: 'otherPercentage',
      title: 'Other percentage',
      type: 'text',
      hideWhen: "deathNominationPrepared != 'Yes'"
    },
    {
      name: 'intendedBeneficiary',
      title: `Name(s) of intended beneficiary(ies)
(if applicable)`,
      type: 'textarea',
      hideWhen: "deathNominationPrepared != 'Yes'"
    }
  ],
  deletable: true
};

export const ESTATEPLANNING_POWERSOFATTORNEY_DEF = <IGroupPanelItem> {
  title: 'Powers of Attorney',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'hasPowerOfAttorney',
      title: 'Do you have a current Power of Attorney?',
      type: 'radio'
    },
    {
      name: 'powerOfAttorneyType',
      title: 'If ‘Yes’, what type(s)?',
      type: 'checkbox:multiselect',
      options: PowerOfAttorneyTypeOptions,
      hideWhen: '!hasPowerOfAttorney'
    },
    {
      name: 'otherAttorneyType',
      title: 'Other (specify)',
      type: 'input',
      hideWhen: "!('Other' in powerOfAttorneyType)"
    },
    {
      name: 'details',
      title: 'Details of Attorney(s)',
      type: 'input',
      hideWhen: '!hasPowerOfAttorney'
    }
  ],
  deletable: true
};
