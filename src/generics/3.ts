function merge<T, U>(objA: T, objB: U): T & U {
    return { ...objA, ...objB };
}

const obj1 = { name: 'John', age: 30 };
const obj2 = { gender: 'male', email: 'john@example.com' };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);

