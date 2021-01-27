export default {
    PeerId: 'Vec<u8>',
    identifier: '[u8;32]',
    public_key: '[u8;32]',
    metadata: 'Vec<u8>',
    DidStruct: {
      identifier: 'identifier',
      public_key: 'public_key',
      metadata: 'metadata'
    },
    Did: '[u8;32]',
    PublicKey: '[u8;32]',
    Address: 'MultiAddress',
    LookupSource: 'MultiAddress',
    TreasuryProposal: {
      proposer: 'Did',
      beneficiary: 'Did',
      value: 'Balance',
      bond: 'Balance'
    },
    CurrencyId: 'i64',
    Amount: 'i64'
};
