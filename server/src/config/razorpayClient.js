const Razorpay = require('razorpay');

apiKey="rzp_test_OH63sO289RSQu8"
apiSecret="pP9p2sPB864NBvTMs5cCufNs"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;