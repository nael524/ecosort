import * as tf from "@tensorflow/tfjs";


tf.ready().then(()=>{

console.log(
    "TensorFlow OK",
    tf.version.tfjs
);

});