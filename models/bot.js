var gpio = require('rpi-gpio');


function turnOn(req,res,next){
  gpio.setMode(MODE_BCM);
  gpio.setup(7, gpio.DIR_OUT, write);

  function write(){
    gpio.write(7, true, function(err){
      if(err) throw err;
      console.log('pump is on!')
    })
  }
}


function turnOff(req,res,next){
  gpio.setMode(MODE_BCM);
  gpio.setup(7, gpio.DIR_OUT, write);

  function write(){
    gpio.write(7, false, function(err){
      if(err) throw err;
      console.log('pump turned off!')
    })
  }
}


// function turnOn(req,res,next){
//   console.log("ROBOT ON!!!!!!");
//   next()
// }


// function turnOff(req,res,next){
//   console.log("ROBOT OFF!!");
//   next()
// }

module.exports = { turnOn, turnOff }