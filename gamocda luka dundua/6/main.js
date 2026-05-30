const info = document.querySelector(".information");

async function getStorys() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getStorys();

const creat = {
  title: "My Test Post",
  body: "This is a test",
  userId: 1,
};

async function creats() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(creat),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
creats();
