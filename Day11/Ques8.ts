// 8. Async Higher-Order Function (HOF)
// Scenario: You want to wrap any asynchronous function with a standard error logger.
// Task: Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.

function safeExecute<T, Args extends any[]>(
    fn: (...args: Args) => Promise<T>
) {
    return async (...args: Args): Promise<T | null> => {
        try {
            const result = await fn(...args);
            return result;
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };
}
async function fetchUser(id: number): Promise<string> {
    if (id === 0) {
        throw new Error("Invalid User ID");
    }
    return `User ${id} data fetched`;
}

const safeFetchUser = safeExecute(fetchUser);
safeFetchUser(1).then((data) => {
    console.log("Success:", data);
});


safeFetchUser(0).then((data) => {
    console.log("Failure:", data);
});