function signin() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location.replace("home.html");
}
function download() {
    location.assign("https://x.thunkable.com/projects/60a2a4b3a2ce9300115749d7/e7b09631-66eb-4493-a047-558da5233640/designer");
}