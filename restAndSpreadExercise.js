const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

//Slice and Dice!
const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) =>  ({...obj, [key]: val});

const removeKey = (obj, key) => {
    const {[key]: _, ...newObj} = abj;
    return newObj;
};

const combine =  (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) =>  ({...obj, [key]: val});