const url = window.location.href;
let prefix = "";
if (url.includes("localhost")) {
    prefix = "http://localhost:8081/";
}
else {
    prefix = "https://devoxx-app-admin.internal.happyground-0fe13831.westeurope.azurecontainerapps.io"
}

//const prefix = "https://devoxx-app-admin.internal.happyground-0fe13831.westeurope.azurecontainerapps.io"
const commonurls = {
    "loginurl": prefix + "api/v1/auth/authenticate",
    "eventurls": prefix + "api/v1/events",
    "questionsurl": prefix + "api/v1/questions"
}
export default commonurls;