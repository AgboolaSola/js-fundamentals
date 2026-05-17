const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Here is your data!");
  } else {
    reject("Something went wrong");
  }
});

// Reading the result with .then() and .catch()
myPromise.then((data) => console.log(data)).catch((err) => console.log(err));

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    const status = true;

    if (status) {
      setTimeout(() => {
        resolve({ name: "Tolu", age: 23, city: "Lagos" });
      }, 3000);
    } else {
      reject("I just wan reject am like a typical nigerian lecturer");
    }
  });
};

console.log("Starting...");

fetchUser()
  .then((user) => {
    console.log(`Got user: ${user.name} from ${user.city}`);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("This runs immediately — before the user arrives!");

const loadUser = async () => {
  try {
    const user = await fetchUser();
    console.log(`Got ${user.name} from ${user.city}`);
    console.log(`Age: ${user.age}`);
  } catch (error) {
    console.log("Failed:", error);
  }
};

const riskyFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const worked = Math.random() > 0.5;
      if (worked) {
        resolve({ name: "Emeka", city: "PH" });
      } else {
        reject("Server error — try again");
      }
    }, 1000);
  });
};

const riskyFetchDetails = async () => {
  try {
    const userInfo = await riskyFetch();
    console.log(
      `Your name is ${userInfo.name} and your city shortcode is ${userInfo.city}`,
    );
  } catch (error) {
    console.log("Fetching the risky text didn't pay off because", error);
  } finally {
    console.log("Request finished");
  }
};

const getPost = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();

    console.log(`${user?.name} ${user?.email} ${user.address?.city}`);
  } catch (error) {
    console.log(error.message);
  }
};

getPost(1);
getPost(-1);
getPost(6);

const getTodos = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const todo = await response.json();

    console.log(`${todo.completed ? "Task Done" : "Still Pending"}`);
  } catch (error) {
    console.log(error.message);
  }
};

getTodos(2);
