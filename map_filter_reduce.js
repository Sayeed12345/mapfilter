const input = [22, 32, 42, 133, 11];


// double the value \|/
const output_2 = input.map(function double(x) {     // ex: function double(x){return x * 2};
    return x * 2
});
console.log(output_2);


// triple the value \|/      
const output_3 = input.map((x) => x * 3);           // can also use fatArrow =>
console.log(output_3);


// binary the value \|/
const output_binary = input.map(function binary(x) {
    return x.toString(2)
});
console.log(output_binary);


// filter the value \|/
const filterGreater = input.filter(x => x > 25);      // filter greater
const filterOdd = input.filter(x => x % 2);           // filter odd
const filterEven = input.filter(x => x % 2 === 0);    // filter even
console.log(filterGreater);
console.log(filterOdd);
console.log(filterEven);


// reduce (sum or max) \|/
function findSum(input) {                             // general process to sum
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    return sum;
}
console.log(findSum(input));


const output_sum = input.reduce(function (acc, curr) {      // reduce process to sum
    acc = acc + curr;                                       // here- acc=sum, curr=i
    return acc;
}, 0);
console.log(output_sum);


function findMax(input) {                                   // general process to max
    let max = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
    }
    return max;

}
console.log(findMax(input));


const output_max = input.reduce(function (max, curr) {       // reduce process to max
    if (curr > max) {                                        // here- max=acc, curr=i
        max = curr;
    };
    return max;
}, 0);
console.log(output_max);


const users = [
    { firstName: "shahrukh", lastName: "khan", age: 50 },
    { firstName: "tom", lastName: "cruise", age: 40 },
    { firstName: "elon", lastName: "musk", age: 30 },
    { firstName: "barak", lastName: "obama", age: 50 },
]


// list of user fullName
const output_fullName = users.map((fullName) => fullName.firstName + " " + fullName.lastName)
console.log(output_fullName);

// list of same/single age
const output_age = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output_age);

// list of users less than age 45 & get their firstName only
// we can use .filter along with .map as well
const output_agefirstName = users.filter((agefirstName) => agefirstName.age < 45)
                                 .map((agefirstName) => agefirstName.firstName);
console.log(output_agefirstName);