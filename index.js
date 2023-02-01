const headquartersLocation = 42

    function distanceFromHqInBlocks(pickupLocation) {
        return Math.abs(pickupLocation - headquartersLocation);
    //returns the number of blocks given a value
  }

    function distanceFromHqInFeet(pickupLocation) {
        return Math.abs(pickupLocation - headquartersLocation) * 264

    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

    function distanceTravelledInFeet(start, destination) {
        return Math.abs(start - destination) * 264
    //returns the number of feet traveled
    }

    function calculatesFarePrice(start, destination) {
        let distance = Math.abs(start - destination) *264;
        if (distance <= 400) {
          return 0;
        } else if (distance <= 2000) {
          return (distance - 400) * 0.02;
        } else if (distance <= 2500) {
          return 25;
        } else {
          return "cannot travel that far";
        }
      }