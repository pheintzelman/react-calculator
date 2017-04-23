const Operations = { Identity: (x, y) => y, /* returning y here is important for chaining operations */
                     Add: (x, y) =>  x + y,
                     Minus: (x, y) =>  x - y,
                     Times: (x, y) =>  x * y,
                     Divide: (x, y) =>  x / y};

export default Operations;
