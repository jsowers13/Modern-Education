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
      schools: [1, 2, 3, 4],
      colleges: [5, 6, 7, 8],
      combined_array: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getSchools: async () => {
        try {
          const res = await fetch(process.env.BACKEND_URL + "/api/schools");
          if (res.ok) {
            const data = await res.json();
            setStore({ schools: data });
            console.log(getStore().schools);
          }
          return true;
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },
      getColleges: async () => {
        try {
          const res = await fetch(
            "https://api.collegeai.com/v1/api/college-list?api_key=gdxwlZ51B2qe4BR8Ha3XghIV&filters=%7B%0A%22max_tuition%22%3A50000%0A%7D&info_ids=website%2Cavg_cost_of_attendance%2Clogo_image%2Cshort_description%2Con_campus_housing_available"
          );
          if (res.ok) {
            const data = await res.json();
            setStore({ colleges: data.colleges });
            console.log(getStore().colleges);
          }
          return true;
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },
      getCombinedArray: () => {
        setStore({
          combined_array: [...getStore().schools, ...getStore().colleges],
        });
        console.log(getStore().combined_array);
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
      getFavorites: (item) => {
        console.log(item);
        let myFavorites = getStore().favorites;
        let selected = myFavorites.find((element) => element === item);
        if (selected) {
          myFavorites = myFavorites.filter((element) => item !== element);
          setStore({ favorites: myFavorites });
        } else {
          myFavorites = [...myFavorites, item];
          setStore({ favorites: myFavorites });
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
