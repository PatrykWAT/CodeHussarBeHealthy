const tf = require('@tensorflow/tfjs');


exports.start = (obj) => {


  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));
  model.add(tf.layers.dense({ units: 1, useBias: true }));
  model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
  
  c = tf.tensor([1, 2, 3, 4]);
  d = tf.tensor([1, 2, 3, 4]);


  console.log(xs, ys)
  console.log(c, d)

  model.fit(c, d, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`)
    }
  });
}