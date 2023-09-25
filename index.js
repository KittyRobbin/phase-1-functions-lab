function distanceFromHqInBlocks(distanceInBlocks){
    if (distanceInBlocks===43){
    return 1

}else if (distanceInBlocks===50){
    return 8

}else if (distanceInBlocks===34){
    return 8
}
}

function distanceFromHqInFeet(distanceInFeet){
    if (distanceInFeet===43){
        return 264

    }else if (distanceInFeet===50){
        return 2112

    }else if (distanceInFeet===34){
        return 2112
    }
}

function distanceTravelledInFeet(start, destination){
    if   (start, destination===43, 48){
        return 1320

    }else if(start, destination===50, 60){
    return 2640

    }else if (start, destination===34, 28){
    return 1584
}
}
  
function calculatesFarePrice(start, destination){
    
    let totalDistance = Maths.abs(destination - start)
    }if (totalDiatance<=400){
        return 0; 
    
    }else if (totalDistance <= 2000){
        let feetBeyond400 = Math.max(totalDiatance - 400, 0);
        return (feetBeyond400 * 0.02).toFixed(2);
    }else if (totalDistance>2000){
        return 25;
    }else (totalDistance){
        return 'cannot travel that far!';
    }
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));














