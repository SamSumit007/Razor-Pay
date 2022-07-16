const app = require("./app");
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_2fC6v21MCncPRX",
  key_secret: "oJgxVZM8wmC7BLnFnfvKf9e7",
});

app.listen(4321, () => {
  console.log(`listning on the port 4321`);
});

var options = {
  amount: 50000, // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11",
};
instance.orders.create(options, function (err, order) {
  console.log(order);
});
