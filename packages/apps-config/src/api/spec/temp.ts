export default {
    PerDispatchClassU32: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32'
    },
    BlockLength: {
      max: 'PerDispatchClassU32'
    },
    WeightPerClass: {
      baseExtrinsic: 'Weight',
      maxExtrinsic: 'Weight',
      maxTotal: 'Option<Weight>',
      reserved: 'Option<Weight>'
    },
    PerDispatchClassWeightsPerClass: {
      normal: 'WeightPerClass',
      operational: 'WeightPerClass',
      mandatory: 'WeightPerClass'
    },
    BlockWeights: {
      baseBlock: 'Weight',
      maxBlock: 'Weight',
      perClass: 'PerDispatchClassWeightsPerClass'
    }
};
