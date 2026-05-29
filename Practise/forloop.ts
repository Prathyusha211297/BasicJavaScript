class LoopsExample {

    // Method 1 -> Print numbers from 1 to 10
    printNumbers(): void {

        for(let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }

    // Method 2 -> Print array elements
    printArray(): void {

        let array1:number[] = [2,4,6,8];

        for(let i=0; i<array1.length; i++)
            
            console.log(array1[i]);
        }
    }

// Creating object
 let obj = new LoopsExample();

// Calling methods
obj.printNumbers();

obj.printArray();
