class Traveler {
    constructor(flubber) {
        this.name = flubber;
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt(){ 
        this.food +=2
    }
    eat(){
        if(this.food === 0){
            this.isHealthy = false;
        }
        else {
            this.food -= 1;
        }
    }
}
class Wagon {
    constructor(c){
        this.capacity = c;
        this.passengers = [];

    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length;

    }

    join(traveler){
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler)
        }
        
    }
    shouldQuarantine(){
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy=== true){
                return true;
            }
            else {
                return false;
            }
        }

    }
    totalFood(){
        let total = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            total += this.passengers[i].food;
        }
        return total;

    }
}