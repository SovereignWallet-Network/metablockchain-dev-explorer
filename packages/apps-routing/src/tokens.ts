// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TFunction } from 'i18next';
import { Route } from './types';

import Component from '@polkadot/app-extrinsics';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: []
    },
    group: 'Token',
    icon: 'envelope-open-text',
    name: 'tokens',
    text: t('nav.tokens', 'Token', { ns: 'apps-routing' })
  };
}