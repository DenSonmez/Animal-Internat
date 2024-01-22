import background  from "./assets/Background_0.png" // src\assets\Background_0.png

function backgroundStyle() {
    const BackgroundStyle = {
        backgroundImage: `url(${background})`,
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return BackgroundStyle;
}

export default backgroundStyle;