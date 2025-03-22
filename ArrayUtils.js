//Create a static class called ArrayUtils with static methods called Average and Max. Data will be an array of numbers
//Gotta finish this later, for now focus on course material
class ArrayUtils {

    static data = [2,4,6,8,10]; 
    static sum = 0; 
    
    static average (){
        console.log(ArrayUtils.data)
        const numbers = ArrayUtils.data; 
        let sum = ArrayUtils.sum

        if (numbers.length === 0) {
            return 0; 
        }

        for (let index = 0; index < numbers.length; index++) {
            
            const total = sum += numbers[index]
            console.log(total / 2)
            
        }
}


    static max (){

}
}

ArrayUtils.average()