import { useEffect, useState } from "react";
import { Box } from "../../../node_modules/@mui/material/index";
import axios from "../../../node_modules/axios/index";
import commonurls from "../../commonurls";
const ViewQRCode = (props) => {
    const [flag, setFlag] = useState(false)
    const [image, setImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageSrc, setImageSrc] = useState('');
    function hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }
    /*
        useEffect(() => {
            let url = commonurls.eventurls + "/qrcodes/" + props.locationid;
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    responseType: "blob"
                },
    
            };
            //showmsg("trying to get data");
            axios.get(url, config)
                .then((res) => {
                    //showmsg("got some response");
                    setFlag(true);
                    let imageUrl = res.data;
                    console.log(res.data);
                    setImage(imageUrl);
    
                })
                .catch((error) => {
                    // console.error(error)
                })
        }, [])
        */
    useEffect(() => {
        loadEvent();
    }, []);

    const loadEvent = async (e) => {


        let url = commonurls.eventurls + "/qrcodes/" + props.locationid;
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                responseType: "blob"
            },

        };
        //showmsg("trying to get data");
        const result = await axios.get(url, config);
        setImageSrc('data:image/png;base64,' + result.data)
        console.log(result.data);
        const byteArray = result.data;
        const blob = new Blob([byteArray], { type: "image/png" });
        console.log(blob)
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        const img = new Image();
        img.onload = function () {
            console.log("Image loaded successfully.");
        };
        img.onerror = function (error) {
            console.log("Error loading image.", error);
        };
        img.src = imageUrl;
    };
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);
    return (
        <div>

            {props.locationid}


            <Box mt={2} textAlign="center">
                <div>Image Preview:</div>
                <img src={imageSrc} height="100px" />
            </Box>

        </div>
    );
}

export default ViewQRCode;