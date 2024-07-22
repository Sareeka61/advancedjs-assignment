// Find the sum of first 4 natural numbers using callback functions and promises(also with async/await)

// Using callback
function sumOfFourNaturalNumbers (n, callback){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    callback(sum);
}

sumOfFourNaturalNumbers(4, (result) => {
    console.log("Sum using callback", result);
});

// Using Promises
function sumOfFirstFourNaturalNumbers(n) {
    return new Promise((resolve, reject) => {
        if(n<0){
            reject("Negative numbers isn't allowed!");
        } else {
            let sum = 0;
            for(let i=1; i<=n; i++) {
                sum += i;
            }
            resolve(sum);
        }
    });
}

sumOfFirstFourNaturalNumbers(4) 
    .then((result) => {
        console.log("Sum is:", result);
    })
    .catch((error) => {
        console.log("Something went wrong", error);
    });

// Using async/await in promises
function sumofNumbers(n) {
    return new Promise((resolve, reject) => {
        if(n<0){
            reject("Only Positive numbers are valid!");
        } else {
            let sum = 0;
            for(let i=1; i<=n; i++) {
                sum += i;
            }
            resolve(sum);
        }
    });
}

async function total_result() {
    try {
        const result = await sumofNumbers(4);
        console.log(result);
    } catch(error) {
        console.error("Error:",error);
    }
};

total_result();

