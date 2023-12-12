
export default function Helper() {

};
export function showmsg(msg) {
    const url = window.location.href;
    if (url.includes("localhost")) {
        console.log(msg);
    }
}