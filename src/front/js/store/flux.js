const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      activeUser: sessionStorage.getItem("activeUser"),
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      token: null,
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      getActiveUser: async (email) => {
        try {
          const res = await fetch(
            process.env.BACKEND_URL + "/api/user/active",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          const activeUser = await res.json();
          setStore({ activeUser: activeUser });
          console.log(getStore().activeUser);
          sessionStorage.setItem("activeUser", activeUser);
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },

      getToken: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          if (resp.ok) {
            const token = await resp.json();
            sessionStorage.setItem("token", JSON.stringify(token));
            getActions().getActiveUser(email);
            return true;
          } else {
            throw "User not found";
          }
        } catch (error) {
          throw Error("Invalid email or password");
        }
      },

      createUser: async (email, password) => {
        try {
          const res = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          if (res.ok) {
            const token = await res.json();

            sessionStorage.setItem("token", JSON.stringify(token));
            getActions().getActiveUser(email);

            return true;
          } else {
            throw "Something went wrong";
          }
        } catch (error) {
          throw Error("Something went wrong");
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
